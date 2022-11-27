const SUPERHEROTOKEN = 3537651009854793
const BASE_URL = `https://www.superheroapi.com/api.php/${SUPERHEROTOKEN}`
let searchbtn = document.getElementById('searchbtn')
let searchInput = document.getElementById('searchInput1')
let searchInput2 = document.getElementById('searchInput2')
let heroImg = document.getElementById('heroImg')
let herostats = document.getElementById('herostats')
let heroImg2 = document.getElementById('heroImg2')
let herostats2 = document.getElementById('herostats2')
let stats
let line = document.createElement("p")
let name1 
let name2 
let biography2 = document.getElementById('biography2')
const statsEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️',
    power: '🔌',
    combat: '🥋',
 }
const getstats = (character) => {
     stats = Object.keys(character.powerstats).map(stat => {
        return  `${statsEmoji[stat]} ${stat}: ${character.powerstats[stat]} \n\n\n`
     
    })
    
 }

const searchhero = (name) => {
    fetch(`${BASE_URL}/search/${name}`).then(response => response.json()).then(json => {
        name1 = `<h1> ${name} </h1>`
        const hero = json.results[0]
        heroImg.innerHTML = `${name1} (${hero.biography['full-name']}) <img src="${hero.image.url}" style="width: 100%; height:70%" > <h1>Sect:</h1>${hero.biography.publisher}`;
        line.innerText =  getstats(hero)
        herostats.appendChild(line)
        herostats.innerText = stats.join('')
        herostats.style.fontSize = "1rem"
        herostats.style.padding = "2rem"
        return stats.join('')
        })
       
}


const getstats2 = (heroes) => {
    stats = Object.keys(heroes.powerstats).map(stat => {
       return  `${statsEmoji[stat]} ${stat}: ${heroes.powerstats[stat]} \n\n\n`
    
   })

   
}

const searchhero2 = (name) => {
   fetch(`${BASE_URL}/search/${name}`).then(response => response.json()).then(json => {
        name2 = `<h1> ${name} </h1>`
       const hero2 = json.results[0]
       heroImg2.innerHTML = `${name2}(${hero2.biography['full-name']})<img src="${hero2.image.url}" style="width: 100%; height:70%"> <h1>Sect:</h1>${hero2.biography.publisher}`
       console.log(hero2.biography)
       line.innerText =  getstats2(hero2)
       herostats2.appendChild(line)
       herostats2.innerText = stats.join('')
       herostats2.style.fontSize = "1rem"
       herostats2.style.padding = "2rem"
       herostats2.style.display = "flex"
       return stats.join('')
       })
      
}


let searchList = document.getElementById('searchList')
searchInput.search= () => {
    if(searchInput.search.value.length > 1){
        searchhero(searchForm.search.value);
    } else {
        searchList.innerHTML = "";
    }
};



searchbtn.onclick = () => {
    if(searchInput.value === "" || searchInput2.value === ""){
        alert('input hero name')
        return
    }
    else if (searchInput.value == searchInput2.value){
        alert('cannot compare the same hero')
    }
    else{
        searchhero(searchInput.value)
    searchhero2(searchInput2.value)
    }
    searchInput.value = ""
    searchInput2.value = ""
}

// slider
window.onload = function(){
    var slides = document.getElementsByClassName('carousel-item'),
        addActive = function(slide) {slide.classList.add('active')},
        removeActive = function(slide) {slide.classList.remove('active')};
    addActive(slides[0]);
    
    setInterval(function (){
      for (var i = 0; i < slides.length; i++){
        if (i + 1 == slides.length) {
          addActive(slides[0]);
          slides[0].style.zIndex = 100;
          setTimeout(removeActive, 200, slides[i]); //Doesn't be worked in IE-9
          break;
        }
        if (slides[i].classList.contains('active')) { 
          slides[i].removeAttribute('style');
          setTimeout(removeActive, 200, slides[i]); //Doesn't be worked in IE-9
          addActive(slides[i + 1]);
          break;
        }
      } 
    }, 4000);
  }
    




//slider end



