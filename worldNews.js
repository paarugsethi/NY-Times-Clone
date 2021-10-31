const loadHome = async () => {
    try {

        const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=BJfrjqbfWdZvD9ALPlGGqTwjoKISrWmD`)
        const data = await res.json();
        console.log(data);
        prin_div(data);
    }
    catch (err) {

    }
}


function prin_div(data) {
    const news_hedline = document.getElementById('news-hedline');
    //news_hedline.innerHTML ="";
    news_hedline.innerHTML = `<div class="news_inner_div" id="div1">
    <a href="${data.results[1].url}"><img class="news-poster" src="${data.results[1].multimedia[0].url}" alt="${data.results[1].multimedia[0].caption}"></a>
    <p class="Text_mute">${data.results[1].multimedia[0].copyright.toUpperCase()}<p>
   <a href="${data.results[1].url}"> <h2 class="news_title">${data.results[1].title}</h2></a>
    <p>${data.results[1].abstract}</p>
    </div>

    <div class="news_inner_small-div div2">
    <a href="${data.results[20].url}"><img class="news-poster" src="${data.results[20].multimedia[0].url}" alt="${data.results[1].multimedia[0].caption}"></a>
    <p class="Text_mute">${data.results[20].multimedia[0].copyright.toUpperCase()}<p>
    <a href="${data.results[20].url}"><h2 class="news_title">${data.results[20].title}</h2></a>
    <p>${data.results[20].abstract}</p>
    </div>


    <div class="div3">
    <div class="story">
    <a href="${data.results[4].url}"><h2 class="news_title">${data.results[4].title}</h2></a>
    <div>
    <p class="abstract">${data.results[4].abstract}</p>
    <a href="${data.results[4].url}"><img class="small-poster small" src="${data.results[4].multimedia[0].url}" alt="${data.results[1].multimedia[0].caption}"></a>
    </div>
    <p class="Text_mute">${data.results[4].multimedia[0].copyright.toUpperCase()}<p>
    
    </div>
    <hr>
    <div class="story display-non">
    <a href="${data.results[31].url}://www.nytimes.com/2021/10/25/world/middleeast/israel-jews-palestinians-journey.html"><h2 class="news_title">${data.results[11].title}</h2></a>
    <div>
    <p class="abstract">${data.results[11].abstract}</p>
    <a href="${data.results[31].url}://www.nytimes.com/2021/10/25/world/middleeast/israel-jews-palestinians-journey.html"><img class="small-poster" src="${data.results[11].multimedia[1].url}" alt="${data.results[1].multimedia[0].caption}"></a>
    </div>
    <p class="Text_mute">${data.results[11].multimedia[0].copyright.toUpperCase()}<p>
    
    </div>

    </div>
    `
    const title_poster = document.getElementById('title_poster');
    //title_poster.innerHTML = "";
    title_poster.innerHTML = `
    <div class="titlePoster nopad" >
    <a href="${data.results[3].url}">
    <img src="${data.results[3].multimedia[0].url}" class="card-poster" alt="${data.results[1].multimedia[0].caption}" /></a>
    <a href="${data.results[3].url}">
    <h4>${data.results[3].title}</h4></a>
    <p>${data.results[3].abstract}</p>
    </div>

    <div class="titlePoster">
    <a href="${data.results[8].url}">
    <img src="${data.results[8].multimedia[0].url}" class="card-poster" alt="${data.results[1].multimedia[0].caption}" /></a>
    <a href="${data.results[8].url}">
    <h4>${data.results[8].title}</h4></a>
    <p>${data.results[8].abstract}</p>
    </div>

    <div class="titlePoster">
    <a href="${data.results[0].url}">
    <img src="${data.results[0].multimedia[0].url}" class="card-poster" alt="${data.results[1].multimedia[0].caption}" /></a>
    <a href="${data.results[0].url}">
    <h4>${data.results[0].title}</h4></a>
    <p>${data.results[0].abstract}</p>
    </div>

    <div class="titlePoster">
    <a href="${data.results[2].url}">
    <img src="${data.results[2].multimedia[0].url}" class="card-poster" alt="${data.results[1].multimedia[0].caption}" /></a>
    <a href="${data.results[2].url}">
    <h4>${data.results[2].title}</h4></a>
    <p>${data.results[2].abstract}</p>
    </div>

    <div class="titlePoster bor">
    <a href="${data.results[31].url}">
    <img src="${data.results[31].multimedia[0].url}" class="card-poster" alt="${data.results[1].multimedia[0].caption}" /></a>
    <a href="${data.results[31].url}">
    <h4>${data.results[31].title}</h4></a>
    <p>${data.results[31].abstract}</p>
    </div>
    `
    const timeSpenish = document.getElementById("time-spenish");
    timeSpenish.innerHTML = `
    <button><a>More in Read The Times in Spanish <i class="fas fa-angle-right"></i></a></button>
    <h3>Read The Times in Spanish</h3>
    <div id="timespenish_div">

    <div class="timespenish_inner nopad">
    <a href="http://"><img src="https://static01.nyt.com/images/2021/10/13/world/00somalia-1-esp-1/merlin_186381585_dc6c629d-6cba-436e-b569-b01007021dcb-videoLarge.jpg"/></a>
      <div>
      <a href="http://"><h4>Un combatiente de la CIA, un fabricante de bombas somalí y una década de lucha contra Al Shabab</h4></a>
      <p>La búsqueda de un escurridizo militante somalí ilustra por qué el grupo islámico está en su punto más sólido en años, a pesar de que EE. UU. lleva diez años realizando operaciones de baja intensidad.</p>
      </div>
        </div>

      <div class="timespenish_inner">
      <a href="#"><img src="https://static01.nyt.com/images/2021/10/21/world/00HaitiClergy-esp-1/merlin_196570188_ccd904de-9348-4bdc-b038-f61f74555b55-videoLarge.jpg"/></a>
      <div>
      <a href="http://"> <h4>Se han violado todos los tabús’: las pandillas en Haití empezaron a secuestrar a religiosos</h4></a>
      <p>Un sacerdote francés en Haití recuerda el secuestro que sufrió a manos de 400 Mawozo, la misma pandilla que ha privado de la libertad a 17 extranjeros, incluidos un bebé y un infante.</p>
     </div>
        </div>

       <div class="timespenish_inner">
       <a href="#"><img src="https://static01.nyt.com/images/2021/10/23/world/23japan-royalwomen1-esp-1/23japan-royalwomen1-videoLarge.jpg"/></a>
      <div>
      <a href="#"><h4>La vida de las princesas japonesas no es un cuento de hadas</h4></a>
      <p>Una princesa que pronto se casará representa la tercera generación que sufre un intenso malestar emocional en un país que suele relegar a las mujeres a roles rígidos.</p>
     </div>
        </div>

         <div class="timespenish_inner">
         <a href="#"><img src="https://static01.nyt.com/images/2021/10/19/world/19Haiti01-esp-1/merlin_196415103_25616c1a-c8b4-4eab-a467-7462781fc34f-videoLarge.jpg"/></a>
      <div>
      <a href="#"><h4>Los secuestradores en Haití exigen 17 millones de dólares para liberar a los misioneros</h4></a>
      <p>Los rehenes, casi todos estadounidenses relacionados con un grupo de ayuda cristiano, son las víctimas más recientes de una ola de criminalidad que ha crecido en el vacío político de la isla.</p>
      </div>
        </div>

       <div class="timespenish_inner bor">
       <a href="#"><img src="https://static01.nyt.com/images/2021/10/19/world/19brazil-ESP-00/merlin_195706455_54f0115a-b2db-429c-994a-abe74501cb08-videoLarge.jpg"/></a>
       <div>
       <a href="#"><h4>Jair Bolsonaro, acusado de crímenes contra la humanidad por el manejo de la pandemia</h4></a>
       <p>Un esperado reporte del Senado de Brasil concluye que Jair Bolsonaro permitió a propósito que el coronavirus se propagara y matara a los brasileños en una apuesta fallida por la inmunidad de rebaño.</p>
      </div>
        </div>
      
    </div>
    `

    const dispatches = document.getElementById("dispatches");
    dispatches.innerHTML = `
    <button><a>More in Dispatches <i class="fas fa-angle-right"></i></a></button>
    <h3>Dispatches</h3>
    <div id="timespenish_div">

    <div class="timespenish_inner nopad">
    <a href="http://"><img src="https://static01.nyt.com/images/2021/10/22/world/00philippines-whalesharks-dispatch-2/00philippines-whalesharks-dispatch-2-videoLarge-v2.jpg"/></a>
      <div>
      <a href="http://"><h4>Please Don’t Feed the Whale Sharks? Fishing Town Says It Must, to Prosper.</h4></a>
      <p>The chance to swim with the world’s biggest fish drew tourists to a Philippines town, but conservation groups denounce the hand-feeding that keeps the gentle creatures around.</p>
      </div>
        </div>

      <div class="timespenish_inner">
      <a href="#"><img src="https://static01.nyt.com/images/2021/10/19/world/19KILIS-TURKEY-DISPATCH01/merlin_193183176_8c488af0-f344-4d5e-b64e-72181615c049-videoLarge.jpg"/></a>
      <div>
      <a href="http://"> <h4>Turkey Sours on Syrians, but Not in This Sleepy Town, Jolted Awake</h4></a>
      <p>As calls increase in Turkey for Syrian refugees to go home, Kilis, a border town transformed by the newcomers’ energy, has embraced the change.</p>
     </div>
        </div>

       <div class="timespenish_inner">
       <a href="#"><img src="https://static01.nyt.com/images/2021/10/15/world/00tunis-dispatch-4/merlin_195983085_934354a3-53c1-4f69-9a5c-4b63cb8ce015-videoLarge.jpg"/></a>
      <div>
      <a href="#"><h4>Tunisians Recall Revolution Reluctantly, if at All: ‘It Just Faded Away’</h4></a>
      <p>When a monument to those killed in the 2011 uprising was recently damaged, few took notice or even cared in a town, and country, where there is now more regret than a wish to remember.</p>
     </div>
        </div>

         <div class="timespenish_inner">
         <a href="#"><img src="https://static01.nyt.com/images/2021/10/13/world/13mexico-murals-dispatch-top/13mexico-murals-dispatch-top-videoLarge.jpg"/></a>
      <div>
      <a href="#"><h4>Frida Kahlo, Aztec Gods: Can Art Lift Up a Poor Neighborhood?</h4></a>
      <p>A new cableway and hundreds of giant murals have brightened lives in Iztapalapa, Mexico City’s most populous neighborhood, but poverty and attacks against women are still pervasive.</p>
      </div>
        </div>

       <div class="timespenish_inner bor">
       <a href="#"><img src="https://static01.nyt.com/images/2021/10/09/world/09Rwanda-Milk-Bar1/09Rwanda-Milk-Bar1-videoLarge-v2.jpg"/></a>
       <div>
       <a href="#"><h4>At Rwanda’s Favorite Bars, Forget the Beer: Milk Is What’s on Tap</h4></a>
       <p>Milk is a favorite drink in Rwanda, and milk bars serve it up in abundance, fresh or fermented, hot or cold. “When you drink milk, you always have your head straight and your ideas right.”</p>
      </div>
        </div>
      
    </div>
    
    `

    const saturday = document.getElementById("saturday");
    saturday.innerHTML = `
    <button><a href="">More in The Saturday Profile <i class="fas fa-angle-right"></i></a></button>
    <h3>The Saturday Profile</h3>
    <div id="timespenish_div">

    <div class="timespenish_inner nopad">
    <a href="${data.results[16].url}"><img id="img-size" src="${data.results[16].multimedia[0].url}"/></a>
      <div>
      <a href="${data.results[16].url}"><h4>${data.results[16].title}</h4></a>
      <p>${data.results[16].abstract}</p>
      </div>
        </div>

      <div class="timespenish_inner">
      <a href="${data.results[23].url}"><img id="img-size" src="${data.results[23].multimedia[0].url}"/></a>
      <div>
      <a href="${data.results[23].url}"> <h4>${data.results[23].title}</h4></a>
      <p>${data.results[23].abstract}</p>
     </div>
        </div>

       <div class="timespenish_inner">
       <a href="${data.results[12].url}"><img id="img-size" src="${data.results[12].multimedia[0].url}"/></a>
      <div>
      <a href="${data.results[12].url}"><h4>${data.results[12].title}</h4></a>
      <p>${data.results[12].abstract}</p>
     </div>
        </div>

         <div class="timespenish_inner">
         <a href="${data.results[29].url}"><img id="img-size" src="${data.results[29].multimedia[0].url}"/></a>
      <div>
      <a href="${data.results[29].url}"><h4>${data.results[29].title}</h4></a>
      <p>${data.results[29].abstract}</p>
      </div>
        </div>

       <div class="timespenish_inner bor">
       <a href="${data.results[30].url}"><img id="img-size" src="${data.results[30].multimedia[0].url}"/></a>
       <div>
       <a href="${data.results[30].url}"><h4>${data.results[30].title}</h4></a>
       <p>${data.results[30].abstract}</p>
      </div>
        </div>
      
    </div>
    
    `
    let resultlenth = document.getElementById("resultlength");
resultlenth.textContent=`3652${data.results.length}`;

}



const loadHome2 = async () => {
  try {

      const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=BJfrjqbfWdZvD9ALPlGGqTwjoKISrWmD`)
      const data = await res.json();
      console.log(data);
      showData(data);
  }
  catch (err) {

  }
}


function showData(data){
    const result = document.getElementById("ltestNewsView");
    result.innerHTML = "";
        result.innerHTML = data.results.map((news)=>{
            return `
            <div class="latest-item">
            <div>
            <a href="${news.url}">
            <h3>${news.title}</h3>
            <p class="latest_para">${news.abstract}</p>
           </div>
           <div>
           <img src="${news.multimedia[3].url}"/>
           </div>
           </a>
            </div>`
        })

 }

loadHome();

loadHome2();


// https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=ZsKZUuLiXAPBGZIfhTTr634FJs7cZNRM

function Searchlatest(){
    let serch = document.getElementById("Nsearch");
    serch.style.display = "none";
    let inputserch = document.getElementById("inputSearch");
    inputserch.style.display = "block";
    let option = document.getElementById('option');
    option.className = "block";
        console.log("click")
}


// oldest News pert



const oldestNews = async () => {
  try {

      var res = await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=440gKsMZ5tvMQP0TPdNfvBrWKrRfhtiV`)
      var data = await res.json();
      console.log(data);
      
        OldestnewsView(data);

    
      
  }
  catch (err) {

  }
}


function OldestnewsView(data){
  const oldest = document.getElementById("oldest");
  oldest.innerHTML = "";
      oldest.innerHTML = data.results.map((old)=>{
          return `
          <div class="oldNewsDiv">
          <p clss="OldnewsStatus" style="font-size: 12px">${old.byline.toUpperCase()}</p>
          <h3>${old.title.toUpperCase()}</h3>
          <p>${old.abstract}${old.adx_keywords}</p>
          <p style="color: rgb(175, 172, 172); font-size: 12px">${old.byline.toUpperCase()}</p>
          </div>
         `
      })

}
oldestNews();


function block(){
  const result = document.getElementById("ltestNewsView");
  result.className ="none"
 const oldest = document.getElementById("oldest");
  oldest.className = "block"
  const searchDiv = document.getElementById("search_div");
  searchDiv.innerHTML = "";
  Search_div.className = "none"
}

function alwaysView(){
  const oldest = document.getElementById("oldest");
  oldest.className = "none"
  const result = document.getElementById("ltestNewsView");
  result.className ="block"
  // const option = document.getElementById("option");
  // option.className = "none"
  Search_div.className = "none"
  location.reload();
}

var latestnewsButton = document.getElementById("latest-news");
latestnewsButton.addEventListener("click", alwaysView )

const paragraph = document.getElementById("paragraph");
const newpara = document.getElementById("newpara");
const inputsearcheR = document.getElementById("inputSerachR")
const Search_div = document.getElementById("serch_div")


window.addEventListener("load", function () {
  inputsearcheR.addEventListener("keyup", UpdateWithDebouncer)
})
function updateFunc() {
  console.log(inputsearcheR.value);
  paragraph.className = "none"
  newpara.textContent = inputsearcheR.value;
}

function debouncer(func, delay) {
  let id;
  return function () {
      // if id exists
      // then clear the previous timeout 
      console.log(`previous id value is ${id}`)
      if (id) {
          clearTimeout(id);
      }
      id = setTimeout(() => {
          func()
      }, delay)
      updateDebounce()
  }
  console.log(`new setTimeout value is ${id}`)
}

const UpdateWithDebouncer = debouncer(updateFunc, 500)


const searchNews = async () => {
  



  //check for empty
  try {
    
  const newsName = inputsearcheR.value;
  console.log(newsName);
    var res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${newsName}&api-key=BI80rnnh0QqGJfTAmrjBIKiUQ3DLqadm`)
    var data = await res.json();
    console.log(data);
    searcResult(data)
      

  
    
}
catch (err) {

}
}

function searcResult(data){
  Search_div.innerHTML = "";
  
  Search_div.innerHTML = data.response.docs.map((news) => {
    return `
    <div class="SearchNews">
    <div >
    
    <a href="${news.web_url}"><h3>${news.abstract}</h3></a>
    
    <p>${news.snippet}</p>
    </div>
    <div class="searchImg_Div">
    <img src="https://www.nytimes.com/${news.multimedia[6].url}"/>
           </div>
           
      </div>
    `
  })
  const Noview = document.getElementById('ltestNewsView');
  Noview.className="none"
  const oldest = document.getElementById('oldest');
  oldest.className = "none"

}

function Debouncer(func, delay){
  let id;
  return function () {
      // if id exists
      // then clear the previous timeout 
      console.log(`previous id value is ${id}`)
      if (id) {
          clearTimeout(id);
      }
      id = setTimeout(() => {
          func()
      }, delay)
  }
}

const updateDebounce = Debouncer(searchNews, 500)
//updateDebounce()