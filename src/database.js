const mongoose = require ('mongoose');

const URI = 'mongodb://localhost:27017/BDcapitalMarket';

mongoose.connect(URI)
    .then(db => console.log('BDcapitalMarket is connect'))
    .catch (err => console.error(err));


module.exports = mongoose;
