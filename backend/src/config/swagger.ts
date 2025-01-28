import swaggerJSDoc from 'swagger-jsdoc'
import path from 'node:path'

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    tags: [
      {
        name: 'Productos',
        description: 'Endpoints de productos'
      }
    ],
    info: {
      title: 'Documentación de la API de productos',
      version: '1.0.0'
    }
  },
  apis: [path.join(__dirname, '..', 'swagger', '*.ts')]
}

const swaggerSpecs = swaggerJSDoc(options)

export default swaggerSpecs