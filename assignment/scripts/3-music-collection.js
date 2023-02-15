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

let album2 = new addToCollection('Blood on the Tracks', 'Bob Dylan', 1975);
console.log(album2);
//console.log(collection.push(album2));

let album3 = new addToCollection('The Jets', 'The Jets', 1985);
console.log(album3);
let album4 = new addToCollection('Fontanelle', 'Babes In Toyland', 1992);
console.log(album4);
let album5 = new addToCollection('Ipecac Neat', 'P.O.S', 2004);
console.log(album5);
let album6 = new addToCollection('Blonde on Blonde', 'Bob Dylan', 1966);
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


// *********STRETCH GOALS*********

function search(artist, yearPublished){
    //this.artist = artist;
    //this.year = year;
    for(let i =0; i<collection.length; i++){
        let listArtist = collection[i].artist;
        let listYear = collection[i].yearPublished;
        console.log({listArtist, listYear});
        if(listArtist[i] && listYear[i]){
            console.log({artist, yearPublished});
            break;
        }else if (listArtist[i] || listYear[i] === undefined){
            console.log(collection);
            break;
        }else{
            return [];
        }
    }
}
//console.log(search('Prince', 1984));
console.log(search('Lizzo'));
