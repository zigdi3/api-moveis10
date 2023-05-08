import swaggerAutogen from 'swagger-autogen';
import * as dotenv from 'dotenv'

dotenv.config();

const doc = {
  info: {
    version: "0.8.3",
    title: "API moveis",
    description: "API de moveis."
  },
  host: process.env.NODE_ENV !== 'PROD' ? "localhost:3000" : "apimoveis10-diegozigoto.b4a.run",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  definitions: {
    CadastrarMovel: {
      id: 2328742312,
      categoria: "Casa",
      tipo: "Madeira",
      preco: 135.00,
      descricao: "Armario 3 portas",
      fabricante: 'Tony Tornado'
    }
  }
}

const outputFile = './src/domain/swagger.json';
const endpointsFiles = ['./src/routes/*.route.js'];

const options = {
  openapi: false,          // Enable/Disable OpenAPI. By default is null
  language: 'en-US',         // Change response language. By default is 'en-US'
  disableLogs: false,     // Enable/Disable logs. By default is false
  autoHeaders: true,     // Enable/Disable automatic headers capture. By default is true
  autoQuery: true,       // Enable/Disable automatic query capture. By default is true
  autoBody: true         // Enable/Disable automatic body capture. By default is true
}

swaggerAutogen(options)(outputFile, endpointsFiles, doc);
