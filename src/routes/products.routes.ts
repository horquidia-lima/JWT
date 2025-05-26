import { Router } from "express"
import { ProductsController } from "@/controllers/products-controller"

import { ensureAuthenticated } from "@/middleware/ensureAuthenticated"
import { verifyUserAuthorization } from "@/middleware/verifyUserAuthorization"

const productsRoutes = Router()
const productsController = new ProductsController()

//Todas as totas productsRoutes.use(verifyUserAuthorization(["sale", "admin"]))

productsRoutes.get("/", productsController.index)
productsRoutes.post("/", ensureAuthenticated, verifyUserAuthorization(["sale", "admin"]),productsController.create)

export { productsRoutes }
