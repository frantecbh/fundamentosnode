const express = require("express");

const app = express();

app.use(express.json())


/**
 * Tipos de parametros
 * 
 * Route Params = Identificar um recurso deletar ou editar
 * Query Parms = Paginação, filtros
 * Body Parms = Insersão ou Alteração
 * 
 */

app.get("/courses", (req, res) =>{

    const query = req.query;

    console.log(query)

    res.json(["Curso1", "Curso2","Curso3"])
})

app.post("/courses", (req, res) =>{
    const body = req.body;

    console.log(body)

    res.json(["Curso1", "Curso2","Curso3","Curso4"])
})

app.put("/courses/:id", (req, res) =>{

   // const  parms = req.params;

    const { id } = req.params;

    console.log(id)

    res.json(["Curso6", "Curso2","Curso3","Curso4"])
})

app.patch("/courses/:id", (req, res) =>{
    res.json(["Curso6", "Curso7","Curso3","Curso4"])
})

app.delete("/courses/:id", (req, res) =>{
    res.json(["Curso6", "Curso2","Curso4"])
})






app.listen(3335)