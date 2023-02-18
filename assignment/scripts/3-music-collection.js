console.log('***** Music Collection *****')

let collection = [];


//let album1 = {
//'title': 'Purple Rain',
//'artist': 'Prince',
//'yearPublished': 1984
//}

//collection.push(album1);
//console.log(collection);


function addToCollection(title, artist, yearPublished) {
    this.title = title;
    this.artist = artist;
    this.yearPublished = yearPublished;
    collection.push({ title, artist, yearPublished });
    return {title, artist, yearPublished};
}

console.log(addToCollection('Coconut Oil', 'Lizzo', 2016));
console.log(collection);

console.log(addToCollection('Blood on the Tracks', 'Bob Dylan', 1975));
console.log(collection);


console.log(addToCollection('The Jets', 'The Jets', 1985));

console.log(addToCollection('Fontanelle', 'Babes In Toyland', 1992));

console.log(addToCollection('Ipecac Neat', 'P.O.S', 2004));

console.log(addToCollection('Blonde on Blonde', 'Bob Dylan', 1966));

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

//let foundArtist = [];
let foundArtist = [];

function findByArtist(artist){
    for(let i=0; i<collection.length; i++){
        if(collection[i].artist === artist){
            foundArtist.push(collection[i]);
            console.log(collection[i]);
            //i origially thought I was susposed to add all artitst to foundArtist Array, so:
            //for( let i=0; i<collection.length; i++){
            //foundArtist.push(collection[i].artist);
            //it worked :)
        }else{
            console.log('No Match');
        }
}return foundArtist;
}
console.log(foundArtist);
//console.log(findByArtist('Lizzo'));
//console.log(findByArtist('JazzHands'));
console.log(findByArtist('Bob Dylan'));



// *********STRETCH GOALS*********

//Create a search function:

function search(artist, yearPublished) {
    //this.artist = artist;
    //this.year = year;
    for (let i = 0; i < collection.length; i++) {
        let listArtist = collection[i].artist;
        let listYear = collection[i].yearPublished;
        console.log({ listArtist, listYear });
        if (listArtist[i] && listYear[i]) {
            console.log(artist, yearPublished);
            break;
        } else if (listArtist[i] || listYear[i] === undefined) {
            console.log(collection);
            break;
        } else {
            return [];
        }
    }
}
console.log(search('Bob Dylan', 1966));
console.log(search('Lizzo'));

//Add array of tracks to album object: nested object
//*******So I made a new album(now record) object because If this doesn't work i don't like
//to mess with the actual homework-------I hope that's okay . . . */

let collection2 = [];

let record0 = {
    'title': 'Purple Rain',
    'artist': 'Prince',
    'yearPublished': 1984,
    'tracks': [['I would Die 4 U: 2:49'], ["Let's Go Crazy: 4:40"], ['When Doves Cry: 5:53']]  
}

collection2.push(record0);
console.log(collection2);

//Updating addToCollection
function addToCollection2(title, artist, yearPublished, tracks) {
    this.title = title;
    this.artist = artist;
    this.yearPublished = yearPublished;
    this.tracks = tracks;
    collection2.push({ title, artist, yearPublished, tracks });
}
let record1 = new addToCollection2('Coconut Oil', 'Lizzo', 2016, ['Good As Hell: 2:39']);
console.log(record1);

let record2 = new addToCollection2('Blood on the Tracks', 'Bob Dylan', 1975, [['Idiot Wind: 7:50'], ['Shelter From the Storm: 5:02']]);
console.log(record2);


//Update seach function

function search2(artist, yearPublished, tracks){
    this.artist = artist;
    this.yearPublished = yearPublished;
    this.tracks = tracks;
   for(let i =0; i<collection2.length; i++){
       let listArtist = collection2[i].artist;
       let listYear = collection2[i].yearPublished;
       let listTracks = collection2[i].tracks;
       console.log({listArtist, listYear, listTracks});
       if(listArtist[i] && listYear[i] && tracks[i]) {
           console.log({artist, yearPublished, tracks});
           break;
        }else if (listArtist[i] || listYear[i] === undefined){
           console.log(collection2);
            break;
        }else if (tracks[i]){
            console.log({artist, yearPublished, tracks})
       }else{
           return [];
        }
    }
}
console.log(search2('Lizzo', 2016, ['Good As Hell: 2:39']));
//console.log(search2('JazzHands', ['Shake em']));
