import NFeWizard from 'nfewizard-io/src'
import path from 'node:path'

const nfewizard = new NFeWizard()
let initialized = false

export const loadEnvironment = async () => {
  if (initialized) return nfewizard
  await nfewizard.NFE_LoadEnvironment({
    config: {
      dfe: {
        baixarXMLDistribuicao: true,
        pathXMLDistribuicao: 'tmp/DistribuicaoDFe',
        armazenarXMLAutorizacao: true,
        pathXMLAutorizacao: 'tmp/Autorizacao',
        armazenarXMLRetorno: true,
        pathXMLRetorno: 'tmp/RequestLogs',
        armazenarXMLConsulta: true,
        pathXMLConsulta: 'tmp/RequestLogs',
        armazenarXMLConsultaComTagSoap: false,
        armazenarRetornoEmJSON: true,
        pathRetornoEmJSON: 'tmp/DistribuicaoDFe',
        pathCertificado: path.resolve(
          'certificados',
          process.env.NFE_CERTIFICATE_NAME as string
        ),
        senhaCertificado: process.env.NFE_CERTIFICATE_PASSWORD,
        UF: process.env.NFE_UF,
        CPFCNPJ: process.env.NFE_CPFCNPJ
      },
      nfe: {
        ambiente: 1,
        versaoDF: '4.00',
        idCSC: 1,
        tokenCSC: process.env.NFE_TOKEN_CSC
      },
      email: {
        host: process.env.NFE_SMTP_HOST,
        port: parseInt(process.env.NFE_SMTP_PORT as string),
        secure: false,
        auth: {
          user: process.env.NFE_SMTP_USER,
          pass: process.env.NFE_SMTP_PASSWORD
        },
        emailParams: {
          from: process.env.NFE_SMTP_FROM,
          to: process.env.NFE_SMTP_TO
        }
      },
      lib: {
        connection: {
          timeout: 30000
        }
      }
    }
  })
  initialized = true
  return nfewizard
}
