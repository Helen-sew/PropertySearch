const propertyList = document.getElementById('propertyList');
const search = document.getElementById('search');
const main = document.getElementById('propertyList');
const btn = document.getElementById('all-btn');
const notFound = document.getElementById('notFound');

let properties = [
  {
    id: '1',
    location: 'thomson',
    name: 'Thomson Three',
    address: '41 Bright Hill Drive Thomson',
    price: 'S$1,785,000',
    img: 'images/thomsonThree.jpeg',
  },
  {
    id: '2',
    location: 'thomson',
    name: 'Adana@Thomson',
    address: '8 Old Uppper Thomson Road',
    price: 'S$1,885,000',
    img: 'images/adana@Thomson.jpeg',
  },
  {
    id: '3',
    location: 'bishan',
    name: 'Bishan 8',
    address: '61 Bishan Street 21',
    price: 'S$2,785,000',
    img: 'images/bishan8.jpeg',
  },
  {
    id: '4',
    location: 'tampines',
    name: 'CityLife@Tampines',
    address: 'Tampines Central 7',
    price: 'S$1,685,000',
    img: 'images/citylife.jpeg',
  },

  {
    id: '5',
    location: 'tampines',
    name: 'Treasure@Tampines',
    address: '118 Tampines Street 11',
    price: 'S$1,685,000',
    img: 'images/treasure.jpeg',
  },
  {
    id: '6',
    location: 'orchard',
    name: 'Orchard View',
    address: '29 Angullia Park',
    price: 'S$5,685,000',
    img: 'images/orchardView.jpeg',
  },
];

btn.addEventListener('click', () => {
  window.location.reload();
});

displayProperties(properties);

function displayProperties(propItems) {
  main.innerHTML = '';

  propItems.map((property) => {
    const { name, address, price, img } = property;

    const propertyEl = document.createElement('div');
    propertyEl.classList.add('property');
    propertyEl.innerHTML = `  
                  <h2>${name}</h2>
                  <p>${address}</p>
                  <h5>${price}</h5>
                  <img src="${img}"></img>
              `;
    main.appendChild(propertyEl);
  });
}

search.addEventListener('keyup', (e) => {
  e.preventDefault();

  const searchString = search.value.toLowerCase().trim();
  let results;

  results = properties.filter(
    (property) =>
      property.name.toLowerCase().includes(searchString) ||
      property.address.toLowerCase().includes(searchString)
  );

  if (results.length > 0) {
    displayProperties(results);
  } else {
    displayProperties(
      (notFound.innerHTML = `<h3>Sorry, we couldn't find any result</h3>`)
    );
  }
});
