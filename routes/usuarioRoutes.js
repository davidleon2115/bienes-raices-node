import express from "express";

const router = express.Router();


router.get('/', (req, res) => {
    res.send("Hola Mundo en express");
})

router.get('/nosotros', function(req, res){
res.send("Información de nosotros")
})

export default router;