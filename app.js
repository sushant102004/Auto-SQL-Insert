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

    function insertProjects() {
        for (let i = 0; i < dLocations.length; i++) {
            let obj = projects[i]
            connection.query(`INSERT INTO project (Pname, Pnumber, Plocation, Dnum) VALUES ("${obj.name}", ${obj.pNumber}, "${obj.pLocation}", ${obj.dNum});`,
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
        insertDLocations : insertDLocations,
        insertProjects : insertProjects
    }
})()



const projects = [
    { name : 'ProductX', pNumber : 1, pLocation : 'Bellaire', dNum : 5},
    { name : 'ProductY', pNumber : 2, pLocation : 'Sugarland', dNum : 5},
    { name : 'ProductZ', pNumber : 3, pLocation : 'Huston', dNum : 5},
    { name : 'Computerization', pNumber : 10, pLocation : 'Stafford', dNum : 5},
    { name : 'Reorganization', pNumber : 20, pLocation : 'Huston', dNum : 5},
    { name : 'Newbenefits', pNumber : 30, pLocation : 'Stafford', dNum : 5},
]

const insert = insertData
insert.insertProjects()