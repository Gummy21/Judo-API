const db = require('./index')

const Moves = db.sequelize.define('moves', {
    id: { 
      primaryKey: true,
      autoIncrement: true,
      type: db.Sequelize.INTEGER
    },
    name:{
      type:db.Sequelize.TEXT,
      allowNull:false
    }, 
    description:{
      allowNull:false,
      type: db.Sequelize.TEXT
    },
    category:{
      allowNull:false,
      type: db.Sequelize.TEXT
    },
    img:{
      type:db.Sequelize.TEXT,
      allowNull:false
    }, 
    video:{
      type:db.Sequelize.TEXT,
      allowNull:false
    }, 
    backup_vid:{
      type:db.Sequelize.TEXT
    }
  },{

  freezeTableName: true,
  timestamps: false
});


module.exports = Moves
