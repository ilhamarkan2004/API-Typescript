import { Request, Response } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation } from '../validations/product.validation'

export const createProduct = (req: Request, res: Response) => {
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR = product - create', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message, data: {} })
  }
  logger.info('Add Product Success')
  return res.status(200).send({
    status: true,
    statusCode: 200,
    message: 'Add product success',
    data: value
  })
}

export const getAllProduct = (req: Request, res: Response) => {
  logger.info('Get Product Success')
  return res.status(200).send({
    status: true,
    statusCode: 200,
    data: [
      {
        name: 'Sepatu Baru',
        price: 500000
      }
    ]
  })
}
