import request from "supertest"
import app from "../../server"

const BASE_URL = "/api/products"
const BAD_REQUEST = 400
const CREATED = 201
const OK = 200
const NOT_FOUND = 404

describe("POST /api/products", () => {
  it("should return a 400 status code when the request body is empty", async () => {
    const response = await request(app).post(BASE_URL).send({})
    expect(response.status).toBe(BAD_REQUEST)
    expect(response.body).toHaveProperty("errors")
    expect(response.body.errors).toHaveLength(3)
  })
  it("should return a 201 status code when the request body is valid", async () => {
    const data = {
      "name": "Laptop Gamer",
      "price": 1200,
    }
    const response = await request(app).post(BASE_URL).send(data)
    expect(response.status).toBe(CREATED)
    expect(response.body).toHaveProperty("data")
    expect(response.body.data).toBeDefined()
  })
})

describe("GET /api/products", () => {
  it("should return a 201 status code when the request body is valid", async () => {
    const response = await request(app).get(BASE_URL)
    expect(response.status).toBe(OK)
    expect(response.body).toHaveProperty("data")
    expect(response.body.data).toHaveLength(1)
  })
})

describe("GET /api/products/:id", () => {
  it("should return a 404 status code when not found the product", async () => {
    const idNotFound = 2000
    const response = await request(app).get(`${BASE_URL}/${idNotFound}`)
    expect(response.status).toBe(NOT_FOUND)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("Producto no encontrado")
  })
  it("should return a 400 status code when the product id is invalid", async () => {
    const idNotValid = "hola"
    const response = await request(app).get(`${BASE_URL}/${idNotValid}`)
    expect(response.status).toBe(BAD_REQUEST)
    expect(response.body).toHaveProperty("errors")
    expect(response.body.errors).toHaveLength(1)
  })
  it("should return a 200 status code when the product id is valid", async () => {
    const idValid = 1
    const response = await request(app).get(`${BASE_URL}/${idValid}`)
    expect(response.status).toBe(OK)
    expect(response.body).toHaveProperty("data")
    expect(response.body.data).toBeDefined()
  })
})

describe("PUT /api/products/:id", () => {
  it("should return a 404 status code when not found the product", async () => {
    const idNotFound = 2000
    const response = await request(app).get(`${BASE_URL}/${idNotFound}`)
    expect(response.status).toBe(NOT_FOUND)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("Producto no encontrado")
  })
  it("should return a 400 status code when the product id is invalid", async () => {
    const idNotValid = "hola"
    const response = await request(app).get(`${BASE_URL}/${idNotValid}`)
    expect(response.status).toBe(BAD_REQUEST)
    expect(response.body).toHaveProperty("errors")
    expect(response.body.errors).toHaveLength(1)
  })
  it("should return a 200 status code when the product id is valid", async () => {
    const idValid = 1
    const data = {
      "name": "Laptop Gamer",
      "price": 1200,
    }
    const response = await request(app).put(`${BASE_URL}/${idValid}`).send(data)
    expect(response.status).toBe(OK)
    expect(response.body).toHaveProperty("data")
    expect(response.body.data).toBeDefined()
  })
})

describe("DELETE /api/products/:id", () => {
  it("should return a 404 status code when not found the product", async () => {
    const idNotFound = 2000
    const response = await request(app).get(`${BASE_URL}/${idNotFound}`)
    expect(response.status).toBe(NOT_FOUND)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("Producto no encontrado")
  })
  it("should return a 400 status code when the product id is invalid", async () => {
    const idNotValid = "hola"
    const response = await request(app).get(`${BASE_URL}/${idNotValid}`)
    expect(response.status).toBe(BAD_REQUEST)
    expect(response.body).toHaveProperty("errors")
    expect(response.body.errors).toHaveLength(1)
  })
  it("should return a 200 status code when the product id is valid", async () => {
    const idValid = 1
    const response = await request(app).delete(`${BASE_URL}/${idValid}`)
    expect(response.status).toBe(OK)
    expect(response.body).toHaveProperty("data")
    expect(response.body.data).toBeDefined()
  })
})