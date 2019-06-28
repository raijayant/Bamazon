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
  // call displayItems here when connected
  displayItems()
})

function displayItems () {
  var sql = 'SELECT * FROM Products'
  connection.query(sql, function (err, rows, fields) {
    if (err) throw err

    // loop through mysql database for each item
    for (var i = 0; i < rows.length; i++) {
      console.log('SKU#: ' + rows[i].sku + '|' +
        'Product: ' + rows[i].product_name + '|' +
        'Department: ' + rows[i].department_name + '|' +
        'Price: ' + '$' + rows[i].price + '|' +
        'In Stock: ' + rows[i].stock_quantity)
    }
  }
  )
}
