import path from 'node:path'
import swaggerJSDoc from 'swagger-jsdoc'

const swaggerConfig: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Administrador de productos',
      description: 'API para administrar los productos',
      version: '1.0.0',
    },
  },
  apis: [path.join(__dirname, '..', 'swagger', '**', '*')], // files containing annotations as above
  
}
export const swaggerSpec = swaggerJSDoc(swaggerConfig)