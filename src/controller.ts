import { Request, Response } from 'express'
import { loadEnvironment } from './config'

const consultarStatusServico = async (_: Request, res: Response) => {
  const nfewizard = await loadEnvironment()
  const result = await nfewizard.NFE_ConsultaStatusServico()
  res.json(result)
}

const consultarProtocolo = async (_: Request, res: Response) => {
  const nfewizard = await loadEnvironment()
  const result = await nfewizard.NFE_ConsultaProtocolo(
    process.env.NFE_CHAVE as string
  )
  res.json(result)
}

const consultarDistribuicaoDFePorChave = async (_: Request, res: Response) => {
  const nfewizard = await loadEnvironment()
  const chaveNFe = {
    cUFAutor: 29,
    CNPJ: process.env.NFE_CPFCNPJ as string,
    consChNFe: {
      chNFe: process.env.NFE_CHAVE as string
    }
  }
  const result = await nfewizard.NFE_DistribuicaoDFePorChave(chaveNFe)
  res.json(result)
}

export const controller = {
  consultarStatusServico,
  consultarProtocolo,
  consultarDistribuicaoDFePorChave
}
