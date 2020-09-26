const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and Models
const refNegaraSchema = new Schema({
    sandi: String,
    label: String
});

//Everytime you create data, it saves into refnegara collection (or table in SQL), 
//using refNegaraSchema format
const refNegara = mongoose.model('refnegara', refNegaraSchema);

module.exports = refNegara;
