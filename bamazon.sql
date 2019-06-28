CREATE DATABASE IF NOT EXISTS BAMAZON;

USE BAMAZON;

CREATE TABLE IF NOT EXISTS Products (
    sku INTEGER AUTO_INCREMENT,
    product_name VARCHAR(32) NOT NULL UNIQUE,
    department_name VARCHAR(32) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER DEFAULT 0,
    PRIMARY KEY(sku)
   );
   
   INSERT INTO Products (sku, product_name, department_name, price, stock_quantity)
   VALUES(1, 'Tee', 'Tee-dept', 12.99, 20);
   INSERT INTO Products (sku, product_name, department_name, price, stock_quantity)
   VALUES(2, 'Jeans', 'Jeans-dept', 12.99, 20);
   INSERT INTO Products (sku, product_name, department_name, price, stock_quantity)
   VALUES(3, 'Shirt', 'Shirt-dept', 12.99, 20);
   INSERT INTO Products (sku, product_name, department_name, price, stock_quantity)
   VALUES(4, 'Canvas', 'Canvas-dept', 12.99, 20)