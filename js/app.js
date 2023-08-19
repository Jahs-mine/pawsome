// Create pet group constructor 

class PetGroup {
    // define urls

    constructor(url) {
        const dogUrl = '', birdUrl = '', catUrl = '';

        this.url = url
        this.pets = [];
        
        // fetch data and update pets property
        getPets()

    }

    getPets(){
        //fetch data
        fetch(this.url).then().catch(err=>console.error(err))
    }
}