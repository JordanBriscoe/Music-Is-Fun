export default class Song {
    constructor(song) {
        this.title = song.trackName
        //Change 250x250 if you want a larger image
        this.albumArt = song.artworkUrl60.replace(/60x60/g, "200x200")
        this.artist = song.artistName
        this.collection = song.collectionName
        this.price = song.collectionPrice
        this.preview = song.previewUrl
    }

    get Template(){
        return `
        <div class="col-3 pt-2">
            <div class="card" style="width: 18rem;">
                <img src="${this.albumArt}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Artist: </b>${this.artist}</h5>
                        <p class="card-text"><b>Title: </b>${this.title}</p>
                        <p class="card-text"><b>Album: </b>${this.collection}</p>
                        <p class="card-text"><b>Price: </b>${this.price}</p>
                        <audio controls src="${this.preview}"></audio>
                    </div>
            </div>
        </div>
        `
    }
}