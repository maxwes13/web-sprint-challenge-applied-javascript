// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(function(response) {
        

    const bsArray = response.data.articles.bootstrap;
    console.log(bsArray);
    bsArray.forEach(function(item)  {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.appendChild(cardMake(item));
    });

    const jsArray = response.data.articles.javascript;
    console.log(jsArray);
    jsArray.forEach(function(item) {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.appendChild(cardMake(item));
    })

    const techArray = response.data.articles.technology;
    console.log(techArray);
    techArray.forEach(function(item) {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.appendChild(cardMake(item));
    })

    const jqArray = response.data.articles.jquery;
    console.log(jqArray);
    jqArray.forEach(function(item) {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.appendChild(cardMake(item));
    })

    const nodesArray = response.data.articles.node;
    console.log(nodesArray);
    nodesArray.forEach(function(item) {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.appendChild(cardMake(item));
    })
  
  })
  
  .catch(function(error) {
    console.log("error!", error);
    })


function cardMake(object) {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('span');


    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');


    image.src = object.authorPhoto;
    headline.textContent = object.headline;
    name.textContent = `By ${object.authorName}`


    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);
    author.appendChild(name);


    card.addEventListener('click', function() {
        console.log(object.headline)
    })

    return card
}


