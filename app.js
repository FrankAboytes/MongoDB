//   mongodb+srv://admin123:admin123@clustergeoref.mpkyopx.mongodb.net/

const express = require('express');
const app = express();
const cors = require('cors');
const books = require('./routes/books');
const mongoose = require('mongoose');

app.use(cors());

// --- INICIO DE CAMBIOS ---
// Reemplaza a bodyParse.json()
app.use(express.json()); 
// Añade esto también, te servirá para formularios
app.use(express.urlencoded({ extended: true })); 
// --- FIN DE CAMBIOS ---

app.use('/api/books', books);

mongoose.connect(
    'mongodb+srv://FrankoDarko:Flanax.1@loslibrosdeltioflan.nxf1nh3.mongodb.net/?retryWrites=true&w=majority&appname=loslibrosdeltioflan',)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB...', err))

app.listen(4000, () => {
    console.log('Server running on port 4000'); // (Bonus: buena práctica)
});

// (Se eliminó la llave '}' extra de aquí)