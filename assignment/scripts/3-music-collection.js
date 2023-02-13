console.log('***** Music Collection *****')

let collection = [];

let album1 ={
    'title': 'Purple Rain',
    'artist': 'Prince',
    'yearPublished': 1984
}

collection.push(album1);
console.log(collection);


function addToCollection(title, artist, yearPublished){
    this.title = title;
    this.artist = artist;
    this.yearPublished = yearPublished;
    if(addToCollection === title, artist, yearPublished){
        collection.push(title, artist, yearPublished);
    }else{
        console.log('Not Vaild Entry');
    }
}


let album = new addToCollection('Coconut Oil', 'Lizzo', 2016);
console.log(album);
//console.log(collection.push(album));

let album2 = new addToCollection('Blood on the Tracks', 'Bob Dylam', 1975);
console.log(album2);
//console.log(collection.push(album2));

let album3 = new addToCollection('HighLife', 1999);
console.log(album3);

let album4 = new addToCollection('The Jets', 'The Jets', 1985);
console.log(album4);
let album5 = new addToCollection('Fontanelle', 'Babes In Toyland', 1992);
console.log(album5);
let album6 = new addToCollection('Ipecac Neat', 'P.O.S', 2004);
console.log(album6);
let album7 = new addToCollection('Sing the Dancing 20s', 'The Andrews Sisiters', 1958);
console.log(album7);

//After all are added, console.log collection array
console.log(collection);
