const food = document.getElementById("food");
const infoFood = [
    {id: 'one', image: './images/M_Pandemuerto-1.jpg' , title: 'Pan de muerto', description: 'Pan de muerto is a special type of bread prepared in Mexico. It is associated with the celebration of the Day of the Dead, a festival that takes place in the month of November.The bread consists of a small sphere in the center of the upper part that represents a skull and four arms of bones that are called quills that represent bones. This form symbolizes the four directions of the universe. In Mexico City and the center of the country, bakeries use simple bread with essence of orange or anise and sprinkled with sugar.'},
    {id: 'two', image: './images/M_PaletaIcePan-1.png', title: 'Paleta helada de pan de muerto con chocolate', description: 'It is a combination of the delicious pan de muerto, but this time mixed with traditional chocolate, which is a chocolate that we often consume in its version of hot chocolate drink. It is an excellent frozen proposal to taste.'},
    {id: 'three', image: './images/M_ChileRellPizza-3.jpg', title: 'Stuffed chile pizza', description: 'Stuffed chiles are a traditional Mexican dish that consists of whole pieces of chili, roasted directly in the fire or using a comal, they are usually filled with ground meat, wrapped in a layer of beaten egg and fried. They are usually served with a tomato and onion sauce seasoned with oregano. It is customary to pair them with white or Mexican rice. This time we have the crazy and extreme combination of stuffed chile pizza. Crunchy, creamy and with the distinctive flavors of poblano chiles, cheese and tomato.'},
    {id: 'four', image: './images/machete_grill__1_.jpg', title: 'Giant Quesadillas', description:'Quesadillas are eaten by almost every single Mexican, in almost every house and street corners, everyone love them. An authentic quesadilla,  is made of corn tortilla, Oaxacan cheese and mushrooms, potatoes with chorizo, zucchini flower, huitlacoche or “picadillo” (ground pork). In Mexico City you can not only find good quesadillas, but they are also long quesadillas that can measure almost 23 inches.'},
    {id: 'five', image: './images/Jicaleta_color.jpg', title: 'Jicaletas', description:'Jicaletas are traditional Mexican street food. Usually, jicama is cut into thick slices and then skewered with a lolly stick. It’s sprinkled with lime juice and rolled in flavorings. It can be something simple like chili, chamoy, orange, grape or strawberry flavored powder. Jicama is a globe-shaped root vegetable with papery, golden-brown skin and a starchy white interior. Its flesh is juicy and crunchy, with a slightly ￼sweet and nutty flavor.'},
    {id: 'six', image: './images/maguey.jpg', title: 'Maguey worm', description: 'The maguey worm is not really a worm, but a caterpillar, and make their home in the agave plants. There are two kind of worms, white and red, both among the most prestigious insects consumed in Mexico. The red and white worms are two different species that both begin their lives as larvae on the agave plant. Once a vital source of protein for the Aztecs, today the worms are crispy fried snacks or succulent taco fillings, but chefs use also the maguey worms’ taste to add flavor to mole, texture to rice soup, and a savory pop to tacos served in warm tortillas.'},
    {id: 'seven', image: './images/chap.jpg', title: 'Chapulines', description: 'Grasshoppers, more popularly known as chapulines in Mexico, are one of the most popular snack foods enjoyed by residents. Although they are available year-round, chapulines are best eaten when they are in season during the summer and autumn months when crops and grasses are tall as a result of the rains, thus providing ample nourishment for the insect. After being thoroughly cleaned and washed, they are toasted on a comal (broad flat cookware) with garlic, lime juice and salt containing extract of agave worms, lending a sour-spicy-salty taste to the finished product.'},
    {id: 'eight', image: './images/manzanasLocas.jpg', title: 'Crazy apples', description: 'Apples + carrots + cucumbers + jicamas && the crazy ingredient'},
    {id: 'nine', image: './images/dorilocos.jpg', title: 'Dorilocos', description: 'Doritos, yes Doritos :o + carrots + cucumbers + jicamas && the crazy ingredient'},
    {id: 'ten', image: './images/cucumber-cups.jpg', title: 'Crazy cucumber cups', description: 'Stuffed cucumber + carrots + jicamas + peanuts && the crazy ingredient'},
    {id: 'eleven', image: './images/Mangonada.jpg', title: 'Mangonada', description: 'Crushed ice + mango + the crazy ingredient'}
]

const printingCards = (element) => {
    let card= 
`
      <div id= ${element.id} class="card">
        <div class="card-image">
          <img src=${element.image}>
          <span class="card-title">${element.title}</span>
        </div>
        <div class="card-content">
          <p>${element.description}</p>
        </div>
      </div>
        `
    food.insertAdjacentHTML("beforeend", card);
}


function showCards () {
    infoFood.forEach(element => {
      printingCards(element);
    });
  };

 showCards(infoFood);

