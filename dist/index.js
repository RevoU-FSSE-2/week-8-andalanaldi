"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_1 = require("./data");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const secret = process.env.SECRET || "secret";
app.use(body_parser_1.default.json());
//get all
app.get('/fintracks', (req, res) => {
    res.status(200).json({
        messages: "Sucess get all financial transactions data",
        fintrack: data_1.fintrack,
    });
    // res.send('fintracks')
});
// Get by id fintracks *use any for temporary solution
app.get('/fintracks/:id', (req, res) => {
    const fintracks = data_1.fintrack.find(item => item.id === parseInt(req.params.id));
    if (fintracks) {
        res.json({
            message: "Success get financial transaction by id",
            fintracks,
        });
    }
    else {
        res.status(404).json({
            message: "financial transaction not found",
        });
    }
});
app.post('/fintracks', (req, res) => {
    const { id, type, name, info, IDR } = req.body;
    if (id && type && name && info && IDR) {
        const newFintracks = { id, type, name, info, IDR }; // Inline type definition
        data_1.fintrack.push(newFintracks);
        res.status(201).json({
            message: "Success adding one financial transaction",
            fintrack: newFintracks,
        });
    }
    else {
        res.status(400).json({
            message: "Invalid data",
        });
    }
});
// Update fintrack by id
app.put('/fintracks/:id', (req, res) => {
    const fintracksIndex = data_1.fintrack.findIndex(item => item.id === parseInt(req.params.id));
    if (fintracksIndex !== -1) {
        data_1.fintrack[fintracksIndex] = Object.assign(Object.assign({}, data_1.fintrack[fintracksIndex]), req.body);
        res.json({
            message: "Success updating financial transaction",
            fintrack: data_1.fintrack[fintracksIndex],
        });
    }
    else {
        res.status(404).json({
            message: "financial transaction not found",
        });
    }
});
// Delete fintrack by id
app.delete('/fintracks/:id', (req, res) => {
    const fintracksIndex = data_1.fintrack.findIndex(item => item.id === parseInt(req.params.id));
    if (fintracksIndex !== -1) {
        const deletedFintracks = data_1.fintrack.splice(fintracksIndex, 1);
        res.json({
            message: "Success deleting financial transaction",
            deletedFintracks,
        });
    }
    else {
        res.status(404).json({
            message: "financial transaction not found",
        });
    }
});
// Patch fintrack by id
app.patch('/fintracks/:id', (req, res) => {
    const fintracksIndex = data_1.fintrack.findIndex(item => item.id === parseInt(req.params.id));
    if (fintracksIndex !== -1) {
        data_1.fintrack[fintracksIndex] = Object.assign(Object.assign({}, data_1.fintrack[fintracksIndex]), req.body);
        res.json({
            message: "Success patching financial transaction",
            fintrack: data_1.fintrack[fintracksIndex],
        });
    }
    else {
        res.status(404).json({
            message: "financial transaction not found",
        });
    }
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
