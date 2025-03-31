import { Router } from 'express'
import { controller } from './controller'

const routes = Router()

routes.get('/status-servico', controller.consultarStatusServico)
routes.get('/protocolo', controller.consultarProtocolo)
routes.get(
  '/distribuicao-dfe-por-chave',
  controller.consultarDistribuicaoDFePorChave
)

export default routes
