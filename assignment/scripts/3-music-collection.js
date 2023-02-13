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



