const mongoose = require('mongoose');
const URI = 'mongodb+srv://RICARDO:Bedu@cluster0.nfsc5.mongodb.net/mern-tasks?retryWrites=true&w=majority';

// const URI = 'mongodb://localhost/4:27017/mern-task';

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;