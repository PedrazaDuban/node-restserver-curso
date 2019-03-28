// =========================
// PUERTO
// =========================
process.env.PORT = process.env.PORT || 3000;

// =========================
// ENTORNO
// =========================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// =========================
// Base de datos
// =========================

let urlDB;
if (process.env.NODE_ENV === 'dev') {

    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    // urlDB = 'mongodb+srv://DubanPedraza:qbKn2wh88BFzexkb@cluster0-ssjqe.mongodb.net/cafe'
    urlDB = 'mongodb://DubanPedraza:qbKn2wh88BFzexkb@cluster0-shard-00-00-ssjqe.mongodb.net:27017,cluster0-shard-00-01-ssjqe.mongodb.net:27017,cluster0-shard-00-02-ssjqe.mongodb.net:27017/cafe?replicaSet=Cluster0-shard-0&ssl=true&authSource=admin'
}
process.env.URLDB = urlDB;