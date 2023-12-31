import { NextFunction, Request, Response, Router } from "express";
import { logger } from "../utils/logger";

export const HealthRouter : Router = Router()

HealthRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info("Health Check Success")
  res.status(200).send({ status: '200' })
})