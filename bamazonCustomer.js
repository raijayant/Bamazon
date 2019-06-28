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
    console.log('Welcome to my Bamazon Store !!!')
    for (var i = 0; i < rows.length; i++) {
      console.log('SKU#: ' + rows[i].sku + '|' +
        'Product: ' + rows[i].product_name + '|' +
        'Department: ' + rows[i].department_name + '|' +
        'Price: ' + '$' + rows[i].price + '|' +
        'In Stock: ' + rows[i].stock_quantity)
    }
    buyItem()
  }
  )
}

function buyItem () {
  console.log('Please select from the product list!!!')
  inquirer.prompt([{
    name: 'sku',
    type: 'input',
    message: 'Enter Product SKU:'
  }, {
    name: 'quantity',
    type: 'input',
    message: 'How many units would you like to buy?'

  }
  ]).then(function (answer) {
    var sql = 'SELECT * FROM Products'
    connection.query(sql, function (err, res) {
      if (err) throw err
      var itemChosen
      for (var i = 0; i < res.length; i++) {
        if (res[i].sku === parseInt(answer.sku)) {
          itemChosen = res[i]
        }
      }

      if (itemChosen.stock_quantity > parseInt(answer.quantity)) {
        connection.query(
          'UPDATE Products SET ? WHERE ?',
          [
            {
              stock_quantity: (itemChosen.stock_quantity - parseInt(answer.quantity))
            },
            {
              sku: itemChosen.sku
            }
          ],
          function (error) {
            if (error) throw error
            console.log('Thank you for your business! Your total is ' + '$' + parseInt(answer.quantity) * itemChosen.price)
          }
        )
      } else {
        console.log("We're sorry. We don't have enough in stock.")
      }
    })
  })
}
