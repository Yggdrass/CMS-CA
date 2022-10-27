const url = "https://yggdrasildev.com/gamehub/wp-json/wc/store/products/";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const gamesContainer = document.querySelector('.games_list');
const gameImageBackground = document.querySelector('.gameImage');

async function makeApiCall() {
    try {
        const response = await fetch(corsFix);
        const results = await response.json();

        console.log(results);

        for (let i = 0; i < results.length; i++) {

            console.log(results[i]);    
        
            gamesContainer.innerHTML += `<a href="../pages/game.html?id=${results[i].id}">
                                            <div class="gameThumbnail">
                                                <h1 class="thumbnailTitle">${results[i].name}</h1>
                                                
                                                <img src="${results[i].images[0].src}" alt="${results[i]}" class="thumbnailImage"></img>
                                                <p class="thumbnailSubTitle">Category: ${results[i].categories[0].name}</p>
                                                <p class="thumbnailSubTitle">Age Limit: ${results[i].attributes[0].terms[0].name}</p>
                                                <p class="thumbnailSubTitle">Condition: ${results[i].attributes[1].terms[0].name}</p>
                                            </div>
                                        </a>`
        };

        

    }
    catch(error){
        console.log(error);
    }
}; 

makeApiCall();

/*<div class="thumbnailImage" alt="${results[i]._embedded["wp:featuredmedia"][0].alt_text}">${results[i]._embedded["wp:featuredmedia"][0].source_url}</div>*/       