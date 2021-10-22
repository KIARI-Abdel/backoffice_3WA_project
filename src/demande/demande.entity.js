const mongoose = require('mongoose');

const DemandeSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date_of_demand: { type: Date, required: true },
    id_lot: Number,
    IsValid: Boolean,
    IsReserved: Boolean
});

const Demande = mongoose.model('Demande', DemandeSchema);

module.exports = { DemandeSchema, Demande };