// exports 
// module.exports={}
module.exports=(sequelize,Sequelize)=>{
    const User=sequelize.define('User',{
        firstName:{
            type:Sequelize.STRING
        },
        lastName:{
            type:Sequelize.STRING
        },
        bio:{
            type:Sequelize.STRING,
        }
    });
    return User;
}




// const x=require('modeel') if we use the module.exports