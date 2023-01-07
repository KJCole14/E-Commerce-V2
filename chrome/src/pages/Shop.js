import React from 'react'

export default function Shop() {
  return (
    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody id="output-data"></tbody>
    </table>
  )
}

//const http = require('http');

// const hostName = '127.0.0.1';
// const port = 3000;

// Database connection
const mysql = require('mysql');

const conn = mysql.createConnection({
    host: '127.0.0.1',
    user: 'devuser',
    password: 'Saint-14-2',
    database: 'E_Commerce_2'
});


conn.connect((err) => {
  // let's me know if it can't connect
    if (err) {
        console.log('somethings not right...');
        console.log(err);
        return;
    }
  //tells me it's connected
    console.log('connected!');
});

// Runs mySQL query
conn.query('SELECT * FROM Products', (err, row) => {
    if (err) {
        console.log(err);
        return;
    }
    else {
      console.log(row);
    }
});

conn.end((err) => {
    console.log(err);
});

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

// server.listen(port, hostName, () => {
//     console.log(`listening on http://${hostName}:${port}/`);
// });

// attempt to display
fetch("Products.mysql")

    .then(function (response) {
        return response.mysql();
    })

    .then(function (Products) {
        let placeholder = document.querySelector('#output-data');
        let out = "";
        for (let Product of Products) {
            out += `
            <tr>
            <td>${Product.Product_Name}</td>
                <td>${Product.Price}</td>
                <td>${Product.Product_Desc}</td>
            </tr>
            `;
        }
        placeholder.innerHTML = out;
    })
