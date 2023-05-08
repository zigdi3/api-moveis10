import swaggerAutogen from 'swagger-autogen';
import * as dotenv from 'dotenv'

dotenv.config();

const doc = {
  "openapi": "3.0.0",
  "info": {
    title: "API moveis",
    description: "API de moveis.",
    schemes: ['http', 'https'],
  },
  "servers": [
    {
      "url": process.env.NODE_ENV === "DEV" ? "http://localhost:3000" : "apimoveis10-diegozigoto.b4a.run",
      "description": "Server"
    }
  ],
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
  openapi: true,          // Enable/Disable OpenAPI. By default is null
  language: 'en-US',         // Change response language. By default is 'en-US'
  disableLogs: false,     // Enable/Disable logs. By default is false
  autoHeaders: false,     // Enable/Disable automatic headers capture. By default is true
  autoQuery: true,       // Enable/Disable automatic query capture. By default is true
  autoBody: true         // Enable/Disable automatic body capture. By default is true
}

swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
