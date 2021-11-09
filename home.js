const loadHome = async () => {
    try {

        const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=BJfrjqbfWdZvD9ALPlGGqTwjoKISrWmD`)
        const data = await res.json();
        console.log(data);
        prin_div(data);
        ineerDivDate (data);
    }
    catch (err) {
        
    }
}



function ineerDivDate (data) {
    var date = document.getElementById("demo");
    date.textContent = changeDate(data.last_updated)
}
function changeDate(date) {
  let currentDate = new Date(date);
  var fd = currentDate.toDateString();
  return fd;
}


function prin_div(data) {

    const vdo = document.getElementById("video_running");
    vdo.innerHTML = `<div id="titel_para">
            <div class="details">
                <h2>${data.results[0].title}</h2>
                <p>${data.results[0].abstract}</p>
                <p>${data.results[0].multimedia[0].caption}</p>       
            </div>
            <div class="Secound_details">
            <h4>${data.results[1].title}.<h4>
            </div>
            </div>
            <div class="video_details">
                <div id="vdo_tag">
                <a href="http://"><video autoplay muted loop id="myVideo">
                <source src="https://vp.nyt.com/video/2021/10/29/96899_1_largest-emittors-hp-promo_wg_720p.mp4" type="video/mp4">
                Your browser does not support HTML5 video.
              </video></a>
                </div>
                <div class="videoTitle">
                <h4>How Much Are Countries Pledging To Reduce Emissions?How Much Are Countries Pledging To Reduce Emissions?</h4>
                <p>The newest plans by countries to fight climate change still fall short of what scientists say is necessary. Here’s what the 10 biggest emitters have promised.</p>
                </div>
            </div>
            `
     const background = document.getElementById("back_groundImg");
     background.innerHTML = `   <div class="back_img" style="background-image: url('${data.results[5].multimedia[0].url}');">
     <div>

     <div class="line"></div>

     <h2>${data.results[5].title}</h2>
     <p>${data.results[5].abstract}</p>
     </div>
     
     </div>


     <div id="onscrool">
     
    <div id="onscrooling">
    
        <div>
     
            <img src="${data.results[0].multimedia[0].url}"/>
            <div class="small_Img">
                <h4>${data.results[0].title}</h4>
                <p>${data.results[0].abstract}</p>
            </div>
        </div>
         <div>
     
            <img src="${data.results[1].multimedia[0].url}"/>
            <div class="small_Img">
                <h4>${data.results[1].title}</h4>
                <p>${data.results[1].abstract}</p>
            </div>
         </div>
         <div>
     
            <img src="${data.results[3].multimedia[0].url}"/>
            <div class="small_Img">
                <h4>${data.results[3].title}</h4>
                <p>${data.results[3].abstract}</p>
            </div>
         </div>
         <div>
     
            <img src="${data.results[4].multimedia[0].url}"/>
            <div class="small_Img">
                <h4>${data.results[4].title}</h4>
                <p>${data.results[4].abstract}</p>
            </div>
         </div>

     
    </div>
     

     </div>

     `


   const a3hedlinec = document.getElementById("a_3hedlineNws");
    a3hedlinec.innerHTML = `<div class="a3headline">
    
    <div class="twoline">
        <div class="rightSideLine">
                <h3>${data.results[4].title}</h3>
                <p>${data.results[4].abstract}</p>
        </div>
        <div>
                <h3>${data.results[4].title}</h3>
                <p>${data.results[4].abstract}</p>
        </div>
    </div>
    
    <div class="imageWithTwo_title">
        <div>

            <div class="UnderLine">
                <h3>${data.results[7].title}</h3>
                <p>${data.results[7].abstract}</p>
            </div>
            <div>
                <h3>${data.results[5].title}</h3>
                <p>${data.results[5].abstract}</p>
            </div>

        </div>
        <div class="img_grpher">
            <img src="${data.results[7].multimedia[0].url}"/>
            <p>${data.results[7].multimedia[0].copyright}</p>
        </div>
    </div>

    <div class="imageWithTwo_title ">
        <div>

            <div class="UnderLine">
                <h3>${data.results[2].title}</h3>
                <p>${data.results[2].abstract}</p>
            </div>
            <div>
                <h3>${data.results[4].title}</h3>
                <p>${data.results[4].abstract}</p>
            </div>

        </div>
        <div class="img_grpher">
            <img src="${data.results[2].multimedia[0].url}"/>
            <p>${data.results[2].multimedia[0].copyright}</p>
        </div>
    </div>
   
    <div id="corona">
        <div class="covid_Status">
        <a href="https://"><h5>World <i class="fas fa-angle-right"></i></h5></a>
        <table class="corona_Table">
        <tr>
        <td><td>
        <td class="Small_font">Avg. on Oct. 31</td>
        <td class="Small_font" colspan="2">14-Day Changes</td>
        </tr>
        <tr>
        <td>New cases<td>
        <td class="red">432,146</td>
        <td class="red">+7%</td>
        <td><img src="https://static01.nyt.com/newsgraphics/2021/coronavirus-tracking/images/svg/timeseries/NYT-World/NYT-World-cases-two-weeks.svg"/></td>
        </tr>
        <tr>
        <td>New Deaths<td>
        <td class="green">7,285</td>
        <td class="green">+10%</td>
        <td><img src="https://static01.nyt.com/newsgraphics/2021/coronavirus-tracking/images/svg/timeseries/NYT-World/NYT-World-deaths-two-weeks.svg"/></td>
        </tr>
        </table>
        
        </div>
        <div class="coronaMap">
            <div class="F-map">
                <h5>Global hot Spots<i class="fas fa-angle-right"></i></h5>
                <img src="https://static01.nyt.com/newsgraphics/2021/coronavirus-tracking/images/maps/NYT-World/hotspots.png"/>
            </div>
            <div class="F-map">
                <h5>Global Vactination<i class="fas fa-angle-right"></i></h5>
                <img src="https://static01.nyt.com/newsgraphics/2021/01/19/world-vaccinations-tracker/assets/promo-thumbnail_v2.png"/>
            </div>
        </div>
        <div class="us_coronaMap">
            <h5>U.S. hots Spots<i class="fas fa-angle-right"></i></h5>
            <img src="https://static01.nyt.com/newsgraphics/2021/coronavirus-tracking/images/maps/USA/hotspots-state.png"/>       
        </div>

    </div>

    
    <div class="imageWithTwo_title">
        <div>

            <div class="UnderLine">
                <h3>BIPOC or POC? Equity or Equality? The Debate Over Language on the Left.</h3>
                <p>For those pushing for changes in society on race and other issues, words matter. They can also muddle.</p>
            </div>
           

        </div>
        <div class="img_grpher">
            <div id="vdo_tag">
            <a href="http://"><video autoplay muted loop id="myVideo">
            <source src="https://vp.nyt.com/video/2021/07/12/94694_1_00language-promo_wg_720p.mp4" type="video/mp4"> 
            </video></a>
            
            </div>
        </div>
    </div>

    
    <div class="imageWithTwo_title noborderBotom">
        <div>

            <div class="UnderLine">
                <h3>${data.results[1].title}</h3>
                <p>${data.results[1].abstract}</p>
            </div>
            <div>
                <h3>${data.results[0].title}</h3>
                <p>${data.results[0].abstract}</p>
            </div>

        </div>
        <div class="img_grpher">
            <img src="${data.results[1].multimedia[0].url}"/>
            <p>${data.results[1].multimedia[0].copyright}</p>
        </div>
    </div>

    
    
    
    </div>`
}



loadHome();


// weather Section

const loadWeather = async () => {
    try {

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=new york&appid=028d18456ae0e60fde3b536ff2c456b0`)
        const data = await res.json();
        console.log(data);
        getWeather(data);
        
    }
    catch (err) {
        
    }
}

function getWeather(data){

    const weather = document.getElementById("weather");
    weather.innerHTML = `<i class="fas fa-cloud-sun-rain"></i><strong>${Math.ceil(data.main.temp-273.15)} °C</strong>&#160
    <span>33° 19°</span>
    `

}

loadWeather();

var dataofdata = ["S&P 500 +0.19%","Dow  +0.25%","Nasdaq +0.33%"];
var slideIndex = 0;
function showSlides() {
    var i;
    let data = document.getElementById("data")
    
    for (i = 0; i < slideIndex; i++) {
        data.innerHTML = `${dataofdata[i]}<span><i class="fas fa-arrow-up"></i></span>`; 
    }
    slideIndex++;
    if (slideIndex > dataofdata.length) {slideIndex = 1}    
    
    setTimeout(showSlides, 3000); // Change image every 2 seconds
  }
  showSlides();


//   const elemento = document.querySelector("#onscrooling");
  
// elemento.addEventListener('wheel', (event) => {
//     event.preventDefault();
  
//     elemento.scrollBy({
//       left: event.deltaY < 0 ? -30 : 30,
      
//     });
//   });

function scrolbehaviour() {
    const ScrolBehav = document.getElementById("overFlow-x");
    ScrolBehav.innerHTML=`
        <div class="Xderection" id="first">
            <div class="ScrolhedTitel">
                <h3>Listen to Standout Articles From The Times</h3>
                <p>Five articles from around The Times, narrated just for you.</p>
            </div>
            <div class="AuthorImg">
            <img src="https://static01.nyt.com/images/2021/10/24/fashion/29narrated-1-alt/merlin_196321368_0e25fb80-de48-4ac6-a0be-504a3313b7a9-jumbo.jpg?quality=75&auto=webp"/>
            </div>
        </div>
        <div class="Xderection">
            <div class="ScrolhedTitel">
                <h3>Listen to ‘The Daily’</h3>
                <p>The U.S. is dealing with substantial price rises for the first time in decades.</p>
            </div>
            <div class="AuthorImg">
            <img src="https://static01.nyt.com/images/2021/11/03/world/02daily-1/merlin_196262748_9be5b89d-fedd-4077-90f2-7eee609165ee-jumbo.jpg?quality=75&auto=webp"/>
            </div>
        </div>
        <div class="Xderection">
            <div class="ScrolhedTitel">
                <h3>Sign Up for Peter Coy’s Newsletter</h3>
                <p>A veteran business columnist unpacks the headlines in this subscriber-only newsletter.</p>
            </div>
            <div class="AuthorImg">
            <img src="https://static.nytimes.com/email-images/Sub_Only_Icons/SO-PeterCoy-1000.png"/>
            </div>
        </div>
        <div class="Xderection Borderclear id="last">
            <div class="ScrolhedTitel">
                <h3>Attend the DealBook Online Summit</h3>
                <p>Andrew Ross Sorkin welcomes Tim Cook, Antony Blinken and more on Nov. 9-10.</p>
            </div>
            <div class="AuthorImg">
            <img src="https://assets.swoogo.com/uploads/medium/1423391-616ef54393aae.jpg"/>
            </div>
        </div>
    `
    // Sscroll with Img

       const ScrolWithImg = document.getElementById("ScroolWith_img");
       ScrolWithImg.innerHTML=`
       <div class="MoreNews">
       <div class="morSub">
         <div class="imgATitle">
           <div class="imgASubTitle">
             <div id="imgAT">
               <div class="ParaTitle">
                 <h3>
                   Long Walk From Freedom: Indebted Gazan Goes to Jail at
                   Least 17 Times
                 </h3>
                 <p>
                   Like many men in Gaza, Wasfi al-Garosha regularly returns
                   to prison for failing to repay a wedding loan.
                 </p>
               </div>
               <div class="MoeImgDiv">
                 <img
                   src="https://static01.nyt.com/images/2021/11/01/world/01Gaza-debt1/merlin_195581430_1e59c8cc-36ce-49b5-8c76-ba54d4e234a3-threeByTwoMediumAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"
                 />
                 <p>Hosam Salem for The New York Times</p>
               </div>
             </div>
             <div id="rightSide">
               <h3>Opioid Makers Win Major Victory in California Trial</h3>
               <p>
                 A judge flatly rejected an argument being employed in
                 thousands of cases against the pharmaceutical industry over
                 its role in an epidemic of abuse.
               </p>
             </div>
           </div>

           <div class="MoreTwotitle">
             <div class="MoreTwotitleSecondTItle">
               <h3>
                 Derrick Henry May Return, but Not His Shot at These Records
               </h3>
               <p>
                 The Titans running back was poised to have one of the best
                 rushing seasons ever. But a foot injury may thwart his
                 chances, our N.F.L. reporter writes.
               </p>
             </div>
             <div class="MoreTwotitleSecondTItle newSecond">
               <h3>
                 The Places in New York City Where Republicans Still Stand a
                 Chance
               </h3>
               <p>
                 In some New York City Council races, supporting former
                 President Trump is seen as a positive by voters.
               </p>
             </div>
           </div>
         </div>
         <div class="OnlyTitle">
           <div>
             <h3>Dozens Killed in Attack on Military Hospital in Kabul</h3>
           </div>
           <div>
             <h3>Rittenhouse Trial Updates: Opening Statements Begin</h3>
           </div>
           <div>
             <h3>
               Former FIFA Officials Face Fraud Charges Over Secret Payment
             </h3>
           </div>
           <div>
             <h3>
               Attack Left Flight Attendant With Concussion, Authorities Say
             </h3>
           </div>
           <div>
             <h3>
               Death Row Prisoner Should Not Be Retried, Judge in Texas Says
             </h3>
           </div>
           <div>
             <h3>
               Mets Fire Their Interim G.M. Two Months After His Arrest
             </h3>
           </div>
         </div>
       </div>
     </div>
       `

       const ScrolBehaV = document.getElementById("overFlow-X");
       ScrolBehaV.innerHTML=`
           <div class="Xderection-i">
           <div class="AAuthorImg">
               <img src="https://static01.nyt.com/images/2021/11/02/well/02WELL-HOLIDAYS-VACCINE/02WELL-HOLIDAYS-VACCINE-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"/>
               <p>Getty Images</p>
               <h3>Listen to Standout Articles From The Times</h3>
               </div>
            </div>          
            <div class="Xderection-i">
            <div class="AAuthorImg">
                <img src="https://static01.nyt.com/images/2019/09/30/multimedia/parenting-generosity/parenting-generosity-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"/>
                <p>Getty Images</p>
                <h3>Listen to Standout Articles From The Times</h3>
                </div>
             </div> 
             <div class="Xderection-i">
             <div class="AAuthorImg">
                 <img src="https://static01.nyt.com/images/2021/01/19/multimedia/19-pandemic-baby-names/19-pandemic-baby-names-threeByTwoSmallAt2X-v3.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"/>
                 <p>Getty Images</p>
                 <h3>Listen to Standout Articles From The Times</h3>
                 </div>
              </div> 
              <div class="Xderection-i">
              <div class="AAuthorImg">
                  <img src="https://static01.nyt.com/images/2021/03/24/well/24parenting-time-capsule/24parenting-time-capsule-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"/>
                  <p>Getty Images</p>
                  <h3>Listen to Standout Articles From The Times</h3>
                  </div>
               </div> 
               <div class="Xderection-i" id="first">
               <div class="AAuthorImg">
                   <img src="https://static01.nyt.com/images/2019/11/25/multimedia/25-Parenting-growth-charts/25-Parenting-growth-charts-threeByTwoSmallAt2X.jpg?format=pjpg&quality=75&auto=webp&disable=upscale"/>
                   <p>Getty Images</p>
                   <h3>Listen to Standout Articles From The Times</h3>
                   </div>
                </div> 
       `

}
scrolbehaviour()

// Most popular

const loadMostPopular = async () => {
  try {

      const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=BJfrjqbfWdZvD9ALPlGGqTwjoKISrWmD`)
      const data = await res.json();
      console.log(data);
      mostpopular(data)
  }
  catch (err) {
      
  }
}

function mostpopular(data) {
  const mostPopular = document.getElementById("mostPopular");
  mostPopular.innerHTML = data.results.map((pop)=>{
    return `
    <div class="PopularInr">
      <div class="popularImg">
        <h3>${pop.section}<h3>
        <img style= "height: 200px" id="popuImg" src="${pop.multimedia[0].url}">
      </div>
      <div class="popHed_title">
        <h3 class="DisplayNon">${pop.title}</h3>
        <p>${pop.title}${pop.abstract}</p>
      </div>
    </div>
    `
  })
}
loadMostPopular();

//Openion 

const LoadOpenion = async () => {
  try {

      const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=opinion&api-key=BI80rnnh0QqGJfTAmrjBIKiUQ3DLqadm`)
      const data = await res.json();
      console.log(data);
      OPenionhandle(data)
  }
  catch (err) {
      
  }
}

function OPenionhandle(data) {
  const openionDiv = document.getElementById("openionDiv");
  openionDiv.innerHTML = data.response.docs.map((pop)=>{
    return `
    <div class="opni">
      
    
        <img " id="opnionImg"  src="https://www.nytimes.com/${pop.multimedia[1].url}"/>
      
      <div class="opnion_title">
        <p>${pop.abstract}</p>
      </div>
    </div>
    `
  })
}

LoadOpenion();

//Arts


const ArtsSearch = async () => {
  try {

      const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=BJfrjqbfWdZvD9ALPlGGqTwjoKISrWmD`)
      const data = await res.json();
      console.log(data);
      Artshandle(data)
  }
  catch (err) {
      
  }
}

function Artshandle(data) {
  const ArtsDiv = document.getElementById("ArtsDiv");
  ArtsDiv.innerHTML = data.results.map((pop)=>{
    return `
    <div class="opni">
      
        <h4>Arts ${pop.subsection}</h4>
        <img " id="opnionImg"  src="${pop.multimedia[3].url}"/>
      
      <div class="opnion_title">
        <p>${pop.abstract}</p>
      </div>
    </div>
    `
  })
}

ArtsSearch();

// Living


// const lIVINGSearch = async () => {
//   try {

//       const res = await fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=living&api-key=vrjq2ves30Nhxfmbt6136M9T0S2ghf4z`)
//       const data = await res.json();
//       console.log(data);
//       LIVINGhandle(data)
//   }
//   catch (err) {
      
//   }
// }

// function LIVINGhandle(data) {
//   const LivingDiv = document.getElementById("LivingDiv");
//   LivingDiv.innerHTML = data.results.map((pop)=>{
//     return `
//     <div class="opni">
      
//         <h4>Arts ${pop.display_title}</h4>
        
      
//       <div class="opnion_title">
//         <p>${pop.headline}, ${pop.summary_short}</p>
//       </div>
//     </div>
//     `
//   })
// }
// lIVINGSearch();