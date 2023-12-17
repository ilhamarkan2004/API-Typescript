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

export const getProduct = (req: Request, res: Response) => {
  const products = [
    {
      name: 'Sepatu',
      price: 200000
    },
    {
      name: 'Baju',
      price: 10000
    }
  ]
  const {
    params: { name }
  } = req

  if (name) {
    const filterProduct = products.filter((product) => {
      if (product.name === name) {
        return product
      }
    })
    if (filterProduct.length === 0) {
      logger.info('Data Product Not Found')
      return res.status(404).send({
        status: false,
        statusCode: 404,
        data: {}
      })
    }
    logger.info('Get Product Success')
    return res.status(200).send({
      status: true,
      statusCode: 200,
      data: filterProduct[0]
    })
  }

  logger.info('Get Product Success')
  return res.status(200).send({
    status: true,
    statusCode: 200,
    data: products
  })
}
