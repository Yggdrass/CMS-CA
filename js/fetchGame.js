const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log ("id");


const url = "https://yggdrasildev.com/gamehub/wp-json/wc/store/products/";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFixId = proxy + url + id;

const jsonUrl = "https://yggdrasildev.com/gamehub/wp-json";

const title = document.querySelector('.title');
const main1 = document.querySelector('#main1');
const main2 = document.querySelector('#main2');
const main3 = document.querySelector('#main3');
const gameImageBackground = document.querySelector('.gameImage');

async function fetchGame() {
    try {
        const response = await fetch(corsFixId);
        const results = await response.json();

        console.log(results);

        

        title.innerHTML += `GameHub | Games | ${results.name}`

        gameImageBackground.innerHTML += `<img src="${results.images[0].src}">`

        main1.innerHTML += `<p>Category - ${results.categories[0].name}</p>
                            <p>Age-limit - ${results.attributes[0].terms[0].name}</p>
                            <p>Platform - ${results.attributes[2].terms[0].name}</p>
                            <p>Condition - ${results.attributes[1].terms[0].name}</p>`
        main2.innerHTML += `<p id="descriptionGameTitle">description:</p>
                            <p id="descriptionGame">${results.description}</p>`
        main3.innerHTML += `<a href="../pages/cart.html" id="used_btn">buy ${results.attributes[1].terms[0].name}</a>`


        

    }
    catch(error){
        console.log(error);
    }
}; 

fetchGame();

//routes["/wc/store/products/(?P<id>[\\d]+)"].endpoints[0].args.id                  |                ${game}
