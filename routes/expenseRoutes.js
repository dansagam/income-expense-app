import express from "express";

const router = express.Router()


router
   .router('/')
   .get()
   .post()

router
   .router('/:id')
   .put()
   .delete()




export default router