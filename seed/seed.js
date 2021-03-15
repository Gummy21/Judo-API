db = require('../models/index')
seedMoves = require('./moves')


function seedDb(){
    seedMoves.forEach(moves => {
        db.moves.create(moves).then().catch(err =>{
            console.log(err)
        })
    });
}

module.exports = seedDb