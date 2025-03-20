/**
 * @swagger
 * /api/products:
 *  post:
 *    summary: Crea un producto
 *    tags:
 *      - Products
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Laptop Gamer
 *              price:
 *                type: number
 *                example: 1200
 *    responses:
 *      201:
 *        description: Petición exitosa
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Product"
 *      400:
 *        description: Petición fallida - Información inválida
 */

/**
 * @swagger
 * /api/products:
 *  get:
 *    summary: Retorna una lista de productos
 *    tags:
 *      - Products
 *    responses:
 *      200:
 *        description: Petición exitosa
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Product"
 */

/**
 * @swagger
 * /api/products/{id}:
 *  get:
 *    summary: Retorna un producto
 *    tags:
 *      - Products
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID del producto que estas buscando
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Petición exitosa
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Product"
 *      404:
 *        description: Petición fallida - Producto no encontrado
 *      400:
 *        description: Petición fallida - ID no válido
 */

/**
 * @swagger
 * /api/products/{id}:
 *  put:
 *    summary: Retorna un producto actualizado
 *    tags:
 *      - Products
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID del producto que queres actualizar
 *        required: true
 *        schema:
 *          type: integer
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *                example: Laptop Gamer
 *              price:
 *                type: number
 *                example: 2000
 *              availability:
 *                type: boolean
 *                example: false
 *    responses:
 *      200:
 *        description: Petición exitosa
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Product"
 *      404:
 *        description: Petición fallida - Producto no encontrado
 *      400:
 *        description: Petición fallida - ID no válido
 */

/**
 * @swagger
 * /api/products/{id}:
 *  patch:
 *    summary: Actualiza la disponibilidad del producto
 *    tags:
 *      - Products
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID del producto que queres actualizar
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Petición exitosa
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Product"
 *      404:
 *        description: Petición fallida - Producto no encontrado
 *      400:
 *        description: Petición fallida - ID no válido
 */

/**
 * @swagger
 * /api/products/{id}:
 *  delete:
 *    summary: Elimina un producto
 *    tags:
 *      - Products
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID del producto que estas buscando
 *        required: true
 *        schema:
 *          type: integer
 *    responses:
 *      200:
 *        description: Petición exitosa
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Product"
 *      404:
 *        description: Petición fallida - Producto no encontrado
 *      400:
 *        description: Petición fallida - ID no válido
 */