const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "Documentation for my Node.js API",
    },
    servers: [
      {
        url: "http://localhost:8000", // تم التغيير من 3000 إلى 8000
        description: "Local server",
      },
    ],
  },
  apis: [__dirname + "/../routes/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("Swagger Docs available at http://localhost:8000/api-docs");
};

module.exports = swaggerDocs;
