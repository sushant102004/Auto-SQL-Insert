const mysql = require('mysql')

let connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Sushant@123',
    database : 'company'
  });
   
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
   
  console.log('connected as id ' + connection.threadId);
})

// Departement Location
const dLocations = [
    { key: 1, value: 'Huston' },
    { key: 4, value: 'Stafford' },
    { key: 5, value: 'Bellaire' },
    { key: 5, value: 'Sugarland' },
    { key: 5, value: 'Huston' }
]

const insertData = (function() {
    function insertDLocations() {
        for (let i = 0; i < dLocations.length; i++) {
            let obj = dLocations[i]
            connection.query(`INSERT INTO dept_locations (Dnumber, Dlocation) VALUES (${obj.key}, "${obj.value}");`,
                function(err, result, fields) {
                    if(err) {
                        console.error(err)
                        return;
                    } else {
                        console.log('Saved')
                    }
                })
        }
    }

    return {
        insertDLocations : insertDLocations
    }
})()
