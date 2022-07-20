require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));

var app = express();

app.use(bodyParser.json());


app.get('/stocks', function (_req, res) {
  var dados = [
    {
      stock: 'BRAP3',
      amount: 500,
      price: 51.00,
    },
    {
      stock: 'VALE3',
      amount: 800,
      price: 0.01,
    },
    {
      stock: 'CASH3',
      amount: 2000,
      price: 2.94,
    },
    {
      stock: 'SAPR11',
      amount: 300,
      price: 19.99,
    },
    {
      stock: 'TAEE11',
      amount: 400,
      price: 43.28,
    },
    {
      stock: 'VISC11',
      amount: 700,
      price: 100.43,
    },
    {
      stock: 'XPPR11',
      amount: 800,
      price: 54.71,
    },
    {
      stock: 'QBTC11',
      amount: 300,
      price: 7.30,
    },
    {
      stock: 'HASH11',
      amount: 200,
      price: 20.40,
    },
    {
      stock: 'AAPL34',
      amount: 100,
      price: 79.46,
    },
    {
      stock: 'AMZ034',
      amount: 500,
      price: 3.91,
    },
    {
      stock: 'NFLX34',
      amount: 100,
      price: 20.50,
    },
    {
      stock: 'PETR4',
      amount: 300,
      price: 28.60,
    },
  ];

  res.send(JSON.stringify(dados));
});

const port = process.env.PORT;

app.listen(port, function () {
  console.log(`API-XP rodando na porta ${port}.`);
});
