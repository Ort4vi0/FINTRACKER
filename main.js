import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./Src/Routes/route.js";
dotenv.config()

const app = express()
const port = process.env.PORT

const MainServer = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log("✅ Conectado ao MongoDB com sucesso!");
    mongoose.connection.on("error", (err) => {
      console.error(`Erro de conexão com o MongoDB: ${err.message}`);
    });

    app.use(express.json());
    app.use(route);

    app.listen(port, () => {
      console.log(`🚀 Servidor iniciado na porta ${port}`);
    });
  } catch (err) {
    console.error(
      "❌ Falha ao conectar ao MongoDB. O servidor não foi iniciado."
    );
    console.error(err.message);
    process.exit(1);
  }
};

MainServer();