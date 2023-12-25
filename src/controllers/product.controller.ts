import { Request, Response } from 'express'
import { logger } from '../utils/logger'
import { createProductValidation, updateProductValidation } from '../validations/product.validation'
import { addProductToDB, getProductById, getProductFromDB, updateProductById } from '../services/product.service'
import { v4 as uuidv4 } from 'uuid'

export const createProduct = async (req: Request, res: Response) => {
  req.body.product_id = uuidv4()
  const { error, value } = createProductValidation(req.body)
  if (error) {
    logger.error('ERR = product - create', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
  }

  try {
    await addProductToDB(value)
    logger.info('Add Product Success')
    return res.status(201).send({
      status: true,
      statusCode: 201,
      message: 'Add product success'
    })
  } catch (error) {
    logger.error('ERR = product - create', error)
    return res.status(422).send({ status: false, statusCode: 422, message: error })
  }
}

export const getProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req

  if (id) {
    const product = await getProductById(id)
    if (product) {
      logger.info('Get Product Success')
      return res.status(200).send({
        status: true,
        statusCode: 200,
        data: product
      })
    } else {
      return res.status(404).send({
        status: true,
        statusCode: 404,
        message: 'Data Not Found',
        data: {}
      })
    }
  } else {
    const products: any = await getProductFromDB()
    logger.info('Get Product Success')
    return res.status(200).send({
      status: true,
      statusCode: 200,
      data: products
    })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req
  const { error, value } = updateProductValidation(req.body)
  if (error) {
    logger.error('ERR = product - create', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
  }

  try {
    await updateProductById(id, value)
    logger.info('Update Product Success')
    return res.status(200).send({
      status: true,
      statusCode: 200,
      message: 'Update product success'
    })
  } catch (error) {}
}
