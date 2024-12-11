const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    database : 'carservicedb',
    user : 'root',
    password : 'A_bassam1',
})

connection.connect(function(error){
    if(error){
        throw error;
    }
    else
    {
        console.log('MySQL Database is connected Successfully');
    }
});

module.exports = connection;