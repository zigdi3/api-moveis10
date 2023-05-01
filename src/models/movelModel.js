import mongoose from "mongoose";

const movelSchema = new mongoose.Schema (
    {
     id:{type: String},
     categoria:{type: String, required: true},
     tipo:{type: String, required: true},
     preco:{type: String, required: true},
     descricao:{type: String, required: true},
     fabricante:{type: String, required: true}      
    }
)

const Movel = mongoose.model('Movéis', movelSchema)

export default Movel
