import ItunesService from "./itunes-service.js";
//Private
const itunesService = new ItunesService()

function drawSongs() {
  //changes button back to GET MUSIC once songs are loaded
  document.querySelector('#get-music-button').textContent = 'GET MUSIC'

  // create a template variable
  let songsElem = document.querySelector ('#songs')
  let template = ''
  let iTunesCopy = itunesService.Songs
  iTunesCopy.forEach(song => {
    template += song.Template
  })
  songsElem.innerHTML = template
  // loop over the array of songs and add a template for each song to the template variable
  // assign the template as the innerHTML of #songs

}


//PUBLIC
class ItunesController {
  constructor() {
    //BE SURE TO REGISTER YOUR SUBSCRIBERS!!!!!!!
    itunesService.addSubscriber('songs', drawSongs)    
  }


  //DO NOT MODIFY THIS METHOD
  getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    //changes the button to loading while songs load
    document.querySelector('#get-music-button').textContent = 'LOADING....'
    itunesService.getMusicByArtist(artist)
  }
}


export default ItunesController