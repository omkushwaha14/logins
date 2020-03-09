const Sequelize = require('sequelize');
 const db = new Sequelize(
    'heroku_298eb0588a3e1da',
    'b375000f561fa6',
    '9b60aece',
    {
        dialect :'mysql',
        host:'us-cdbr-iron-east-04.cleardb.net'
    }

)
const Users = db.define('users',{
    username : {
        type:Sequelize.STRING,
        allowNull:false,
        unique:true
    },
    password: {
     type: Sequelize.STRING,
     allowNull: true
    },
    firstName:Sequelize.STRING,
    lastName:Sequelize.STRING
})
db.sync().then(()=> console.log("database is ready"))
exports = module.exports={
    db,
    Users
}
