

const csv = require('csv-parser')
const fs = require('fs');
const { resourceLimits } = require('worker_threads');



function findByIsbn(fileName, searchByIsbn) {
    fs.createReadStream(fileName)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
       let searchResult =  results.find(ele =>{
        return ele.isbn === searchByIsbn
      })
      console.log(searchResult)
    });
}

findByIsbn( "books.csv","1024-5245-8584" )



function findByEmail(fileName, searchByEmail) {
  fs.createReadStream(fileName)
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
     let searchResult =  results.find(ele =>{
      return ele.authors === searchByEmail
    }) 
    console.log(searchResult)
  });
}

findByEmail( "books.csv","null-lieblich@echocat.org" )




var data = []

function findByEmail(searchByEmail) {
  
   function  books() {
    const results = [];
    fs.createReadStream("books.csv")
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      let searchResult =  results.filter(ele =>{
        return ele.authors === searchByEmail
      })
      
      data.push(searchResult)
    });}

  function magazines(){
    const results = [];
    fs.createReadStream("magazines.csv")
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
      let searchResult =  results.filter(ele =>{
        return ele.authors === searchByEmail
      })
      data.push(searchResult)
      console.log(data)
    });

  }

        books()
        magazines()
     
}


findByEmail( "null-walter@echocat.org" )







