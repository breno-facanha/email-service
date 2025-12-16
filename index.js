const express = require('express');
const cors = require('cors');
const app = express();
const port = 4504 ;
require('dotenv').config();
const emailRoutes = require('./src/routes/email');

app.use(cors({
  origin: "localhost:4467",
  methods: ["GET"],
}));

app.use(express.json());
app.use('/email', emailRoutes);


app.get('/', (req, res) => {
    const auth = req.headers.authorization;

    if (!auth){
        return res.status(401).send('Não autorizado');
    }

    if (auth !== process.env.SECRET_KEY){
        return res.status(401).send('Chave Inválida');
    }

    console.log('Serviço executado com sucesso');
  res.send('Serviço executado com sucesso');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});