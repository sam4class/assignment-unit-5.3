console.log('***** Music Collection *****')

let collection = [];


let album1 = {
    'title': 'Purple Rain',
    'artist': 'Prince',
    'yearPublished': 1984
}

collection.push(album1);
console.log(collection);


function addToCollection(title, artist, yearPublished) {
    this.title = title;
    this.artist = artist;
    this.yearPublished = yearPublished;
    collection.push({ title, artist, yearPublished });
}

let album = new addToCollection('Coconut Oil', 'Lizzo', 2016);
console.log(album);
//console.log(collection.push(album));

let album2 = new addToCollection('Blood on the Tracks', 'Bob Dylam', 1975);
console.log(album2);
//console.log(collection.push(album2));

let album3 = new addToCollection('The Jets', 'The Jets', 1985);
console.log(album3);
let album4 = new addToCollection('Fontanelle', 'Babes In Toyland', 1992);
console.log(album4);
let album5 = new addToCollection('Ipecac Neat', 'P.O.S', 2004);
console.log(album5);
let album6 = new addToCollection('Sing the Dancing 20s', 'The Andrews Sisiters', 1958);
console.log(album6);

//After all are added, console.log collection array
console.log(collection);

//Adding showCollection function

function showCollection(array) {
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        let arr = array[i].title;
        let arr1 = array[i].artist;
        let arr2 = array[i].yearPublished;
        console.log(arr + ' by ' + arr1 + ' published in ' + arr2);
    } return true;
}
//Testing function
console.log(showCollection(collection));

//Add a function named findByArtist
//let foundArtist = collection.filter(findByArtist);
let foundArtist = [];

function findByArtist(){
    for(let i =0; i<collection.length; i++){
    let allArtist = collection[i].artist;
    console.log(allArtist);
    foundArtist.push(allArtist);
}
}
//Testing code
console.log(findByArtist(collection));
console.log(foundArtist);
