const mongoose = require('mongoose');

const DemandeSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date_of_demand: { type: Date, required: true },
    lot_id: Number,
    IsValid: Boolean,
    IsReserved: Boolean
});

const Demande = mongoose.model('Demande', DemandeSchema);

module.exports = { DemandeSchema, Demande };