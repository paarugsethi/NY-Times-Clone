const UsNews = async () => {
    try {

        const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=BJfrjqbfWdZvD9ALPlGGqTwjoKISrWmD`)
        const data = await res.json();
        console.log(data);
        print_div(data);
    }
    catch (err) {

    }
}

function print_div(data) {
    const news_hedline = document.getElementById('news-hedline');
    news_hedline.innerHTML = "";
    news_hedline.innerHTML = ` <div class="first-innerDiv">
    <div class="second-innerDiv">
    <a href="#"><img src="${data.results[9].multimedia[0].url}"></a>
    
    <p class="p_grapherName">${data.results[9].multimedia[0].copyright.toUpperCase()}</p>
    <div class="text_center">
    <a href="#"><h2 class="title">${data.results[9].title}</h2></a>
    <p class="description">${data.results[9].abstract}</p>
    </div>
    </div>

    <div class="third-innerdiv">
    <div class="small_Div">
    <div class="smaldiv_size">
    <a href="#"><h2>${data.results[11].title}</h2></a>
    <p>${data.results[11].abstract}</p>
    </div>
    <div class="small-img_div">
    <img src="${data.results[11].multimedia[0].url}" />
    <p class="p_grapherName hide">${data.results[11].multimedia[0].copyright.toUpperCase()}</p>
    </div>
    </div>

    <div class="small_Div">
    <div class="smaldiv_size">
    <a href="#"><h2>${data.results[7].title}</h2></a>
    <p>${data.results[7].abstract}</p>
    </div>
    <div class="small-img_div">
    <img src="${data.results[7].multimedia[0].url}" />
    <p class="p_grapherName hide">${data.results[7].multimedia[0].copyright.toUpperCase()}</p>
    </div>
    </div>

    <div class="small_Div last_smallDiv">
    <div class="smaldiv_size">
    <a href="#"><h2>${data.results[13].title}</h2></a>
    <p>${data.results[13].abstract}</p>
    </div>
    <div class="small-img_div">
    <img src="${data.results[13].multimedia[0].url}" />
    <p class="p_grapherName hide">${data.results[13].multimedia[0].copyright.toUpperCase()}</p>
    </div>
    </div>

    </div>



    </div>


    `
    let resultlenth = document.getElementById("resultlength");
    resultlenth.textContent=`3652${data.results.length}`;
    
}
UsNews();


const loadHome2 = async () => {
    try {
  
        const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=BJfrjqbfWdZvD9ALPlGGqTwjoKISrWmD`)
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