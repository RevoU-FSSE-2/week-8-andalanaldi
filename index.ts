import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import { fintrack } from "./data"; 

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const secret = process.env.SECRET || "secret";

app.use(bodyParser.json());

//get all
app.get('/fintracks', (req, res) => {
    res.status(200).json({
        messages: "Sucess get all financial transactions data",
        fintrack,
    });
    // res.send('fintracks')
});

// Get by id fintracks *use any for temporary solution
app.get('/fintracks/:id', (req, res) => {
    const fintracks = fintrack.find(item => item.id === parseInt(req.params.id));
    if (fintracks) {
        res.json({
            message: "Success get financial transaction by id",
            fintracks,
        });
    } else {
        res.status(404).json({
            message: "financial transaction not found",
        });
    }
});

app.post('/fintracks', (req, res) => {
    const { id, type, name, info, IDR } = req.body;
    if (id && type && name && info && IDR) {
        const newFintracks = { id, type, name, info, IDR }; // Inline type definition
        fintrack.push(newFintracks);
        res.status(201).json({
            message: "Success adding one financial transaction",
            fintrack: newFintracks,
        });
    } else {
        res.status(400).json({
            message: "Invalid data",
        });
    }
});

// Update fintrack by id
app.put('/fintracks/:id', (req, res) => {
    const fintracksIndex = fintrack.findIndex(item => item.id === parseInt(req.params.id));
    if (fintracksIndex !== -1) {
        fintrack[fintracksIndex] = { ...fintrack[fintracksIndex], ...req.body };
        res.json({
            message: "Success updating financial transaction",
            fintrack: fintrack[fintracksIndex],
        });
    } else {
        res.status(404).json({
            message: "financial transaction not found",
        });
    }
});

// Delete fintrack by id
app.delete('/fintracks/:id', (req, res) => {
    const fintracksIndex = fintrack.findIndex(item => item.id === parseInt(req.params.id));
    if (fintracksIndex !== -1) {
        const deletedFintracks = fintrack.splice(fintracksIndex, 1);
        res.json({
            message: "Success deleting financial transaction",
            deletedFintracks,
        });
    } else {
        res.status(404).json({
            message: "financial transaction not found",
        });
    }
});

// Patch fintrack by id
app.patch('/fintracks/:id', (req, res) => {
    const fintracksIndex = fintrack.findIndex(item => item.id === parseInt(req.params.id));
    if (fintracksIndex !== -1) {
        fintrack[fintracksIndex] = { ...fintrack[fintracksIndex], ...req.body };
        res.json({
            message: "Success patching financial transaction",
            fintrack: fintrack[fintracksIndex],
        });
    } else {
        res.status(404).json({
            message: "financial transaction not found",
        });
    }
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
