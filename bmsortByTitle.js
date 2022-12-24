

const csv = require('csv-parser')
const fs = require('fs');
const { resourceLimits } = require('worker_threads');
const results = [];


//

var data = []

function sortByTitle() {

  function books() {
    fs.createReadStream("books.csv")
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {

        fs.createReadStream("magazines.csv")
          .pipe(csv())
          .on('data', (data) => results.push(data))
          .on('end', () => {

            results.sort(function (x, y) {
              let a = x.title.toUpperCase(),
                b = y.title.toUpperCase();
              return a == b ? 0 : a > b ? 1 : -1;
             
            });
              console.log(results)
          }
          )
      })
  }
  books()
}

sortByTitle()








