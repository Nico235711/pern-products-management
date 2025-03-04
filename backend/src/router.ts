import { Router } from "express";

const router = Router()

router.post("/", (req, res) => {
  res.send("Desde el POST")
})

router.get("/", (req, res) => {
  res.send("Desde el GET")
})

router.put("/", (req, res) => {
  res.send("Desde el PUT")
})

router.delete("/", (req, res) => {
  res.send("Desde el DELETE")
})

export default router