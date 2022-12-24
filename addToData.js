

const csv = require('csv-parser')
const { parse } = require('json2csv');
const fs = require("fs");
const fastcsv = require("fast-csv");

const ws = fs.createReadStream("afterExport.csv");

const results = [];



//

let books = {
  title: 'Harry potter. Kochen lernen mit Alfons Schuhbeck ',
    isbn: '1111-4545-5895',
    authors: 'harry@singh.org',
   description: 'Harry porter, wenn man beim Kochenlernen einen Lehrer wie Alfons Schuhbeck zur Seite hat. Mit seiner Hilfe kann auch der ungeschickteste Anf?ger beste Noten f? seine Gerichte bekommen. Der Trick, den der vielfach ausgezeichnete Meisterkoch dabei anwendet, lautet visualisieren. Die einzelnen Arbeitsschritte werden auf Farbfotos im Format von ca. 3x4 cm abgebildet. Unter diesen stehen kurz und knapp die Angaben zur Zubereitung. So pr?entiert Schuhbecks Kochschule alles bequem auf einen Blick. Und der interessierte Kochneuling kann sich auf die Hau'
}

let magazines = {
    title: 'The Stone',
    isbn: '1111-8548-2541',
    authors: 'harry@singh.org',
    publishedAt: '11.12.2011'
}


function add() {

  function addToData(books, magazines) {
    fs.createReadStream("books.csv")
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
          results.push(books)
        fs.createReadStream("magazines.csv")
          .pipe(csv())
          .on('data', (data) => results.push(data))
          .on('end', () => {
            results.push(magazines)
              const csv = parse(results);
              fs.writeFileSync('test.csv', csv)
              console.log(results)
              // console.log(csv)
              
              
          }
          )
      })
  }
  addToData(books, magazines)

}



add()








