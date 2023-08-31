// create pet group class 
// give pet group a prototype fetch method
const DOGURL = `https://api.api-ninjas.com/v1/dogs?name=poodle`;

class petGroup {

    constructor(type, url) {

        this.pets = [];
        this.url = url;
        this.setPets = url;
        this.type

        petGroup.allGroups.push(this)
    }

    set setPets(url) {
        fetch(url, {
            method: 'GET',
            headers: { 'X-API-Key': '/a/9AXftITBh++A+ise9/w==oRKz3dC4P3u8Hudr' },
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    static allGroups = []
}

new petGroup('dogs', DOGURL)


// create pet class that stores 