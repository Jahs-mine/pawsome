// create pet group class 
// give pet group a prototype fetch method
const DOGURL = `https://api.api-ninjas.com/v1/dogs?shedding=1`;

class PetGroup {

    constructor(type, url) {

        this.cards = [];
        this.url = url;
        this.setPets = url;
        this.type

        PetGroup.allGroups.push(this)
    }

    set setPets(url) {
        fetch(url, {
            method: 'GET',
            headers: { 'X-API-Key': '/a/9AXftITBh++A+ise9/w==oRKz3dC4P3u8Hudr' },
        })
            .then(res => res.json())
            .then(data =>{
                console.log(data)
                for (const obj of data) {
                  this.cards.push(DOM.createPetCard(obj.name,obj.image_link))
                }
            })
    }

    static allGroups = []
}

new PetGroup('dogs', DOGURL)

const DOM  = {
    appendPetCard:function(cards){
        let resultSection = document.querySelector(".pets_result");
        resultSection.innerHTML = "";
        for (const card of cards) {
            resultSection.appendChild(card)
        }
    },
    createPetCard: function(breedName, imgURL,pet_gender="male",pet_age="1 yrs old"){
        let petCol= document.createElement("div");
        petCol.classList = 'col_12 col_md_10';

        petCol.innerHTML=`
        <div class="pet_card">
          <div class="row">
            <div class="col_5">
              <a href="" class="pet_card_img_link">
                <img src="" alt="" class="img pet_card_img" />
              </a>
            </div>
            <div class="col_7">
              <div class="pet_card_texts p_y_2 row g_2">
                <h4 class="pet_breed col_9">Breed</h4>
                <span class="pet_gender col_3">gender</span>
                <span class="pet_age">Age</span>
              </div>
            </div>
          </div>
        </div>
      `
      let name = petCol.querySelector('.pet_breed')
      let link = petCol.querySelector('.pet_card_img_link');
      let img = petCol.querySelector('.pet_card_img');
      let gender = petCol.querySelector('.pet_gender');
      let age = petCol.querySelector('.pet_age');

      name.innerText= breedName;
      link.href = imgURL;
      img.src= imgURL;
      gender.innerText = pet_gender;
      age.innerText = pet_age; 

      return petCol
    }, 
}

setTimeout(()=>{DOM.appendPetCard(PetGroup.allGroups[0].cards)},10000)
// create pet class that stores 