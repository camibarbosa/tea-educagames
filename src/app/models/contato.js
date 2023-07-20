import mongoose, { Schema } from "mongoose";

const contatoSchema = new Schema({
  fullname: {
    type: String,
    required: [true, "O nome é obrigatório."],
    trim: true,
    minLength: [2, "O nome deve ter mais de 2 caracteres"],
    maxLength: [50, "O nome deve ter menos de 50 caracteres"],
  },

  email: {
    type: String,
    required: [true, "O e-mail é obrigatório."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Endereço de e-mail inválido"],
  },

  message: {
    type: String,
    required: [true, "Comentário é obrigatório"],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

const Contato =
  mongoose.models.Contato || mongoose.model("Contato", contatoSchema);

export default Contato;