const mysql = require('mysql')
const inquirer = require('inquirer')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'nodeUser',
  password: '',
  database: 'BAMAZON'
})

connection.connect(function (err) {
  if (err) throw err
  console.log('Connected as id ' + connection.threadId)
})
