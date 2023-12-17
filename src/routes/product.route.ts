import { NextFunction, Request, Response, Router } from 'express'
import { logger } from '../utils/logger'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Get Product Success')
  res.status(200).send({
    status: true,
    statusCode: 200,
    data: [
      {
        name: 'Sepatu Baru',
        price: 500000
      }
    ]
  })
})

ProductRouter.post('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Add Product Success')
   res.status(200).send({
     status: true,
     statusCode: 200,
     data: req.body
   })
})
