// index.js
// an array with the object for each artist
const artistsArray = [
  {
    artistName: 'Boss Maej',
    artistLabel: 'Home of creativity',
    artistSummary: 'The artist\'s real name is Muhammad Sesay from Sierra Leone.',
    artistImage: {
      url: './public/images/artists/maej.jpg',
      alt: 'boss maej\'s photo'
    }
  },
  {
    artistName: 'DReal',
    artistLabel: 'Home of creativity',
    artistSummary: 'The artist\'s real name is Houdi Kawulay from Sierra Leone.',
    artistImage: {
      url: './public/images/artists/dreal.jpg',
      alt: 'DReal\'s photo'
    }
  },
  {
    artistName: 'Burna Boy',
    artistLabel: 'Home of creativity',
    artistSummary: 'The artist\'s real name is Damini Ebunoluwa Ogulu from Sierra Leone',
    artistImage: {
      url: './public/images/artists/burna-boy.jpeg',
      alt: 'Burna boy photo'
    }
  },
  {
    artistName: 'Oxlade',
    artistLabel: 'Knostra Music',
    artistSummary: 'The artist\'s real name is Ikuforiji Olaitan Abdulrahman from Nigeria.',
    artistImage: {
      url: './public/images/artists/oxlade.jpg',
      alt: 'Oxlade\'s photo'
    }
  },
  {
    artistName: 'Stormzy',
    artistLabel: 'Merky - Warner',
    artistSummary: 'The artist\'s real name is Michael Ebenezer Kwadjo Omari Jr. from UK',
    artistImage: {
      url: './public/images/artists/stormzy.jpg',
      alt: 'Stormzy\'s photo'
    }
  },
  {
    artistName: 'Dave Santan',
    artistLabel: 'Warner Chappell Music',
    artistSummary: 'The artist\'s real name is David Orobosa Omoregie',
    artistImage: {
      url: './public/images/artists/dave.jpg',
      alt: 'Dave\'s photo'
    }
  }
];

// accessing the dom elements
const GuestArtistContainer = document.querySelector('.guest-artists-cards-container');
const seeMoreButton = document.querySelector('.see-more-button');
const collapseButton = document.querySelector('.collapse-button');

// will hold the card element for each artist that will be rendered into the artist container
let artistCard = '';
let objectsToShow = 2;
let startIndex = 0;

const hideElement = (args) => {
  args.forEach(element => {
    element.style.display = 'none';
  });
};

const showElement = (args) => {
  args.forEach(element => {
    element.style.display = 'flex';
  });
};

// this function shows the artis card
const showArtists = () => {
  // iterate through the artist array and pass dynamic data to card element
  for (let i=startIndex; i < artistsArray.length; i++) {
    
    // check if the current index is lesser than the number of items to show 
    if (i < objectsToShow) {
      artistCard += `
        <div class="artist-card flex items-center m-10">
          <div class="artist-image-container">
            <img class="chess-image" src="./public/images/chess-bg.png" alt="chess background image"/>
            <img class="artist-image" src="${artistsArray[i].artistImage.url}" alt="${artistsArray[i].artistImage.alt}" />
          </div>
          <div class="artist-content-container">
            <h4 class="artist-name primary-text-color text-left">
              ${artistsArray[i].artistName}
            </h4>
            <p class="secondary-text-color artist-record-label">Record Label: ${artistsArray[i].artistLabel}</p>
            <div class="primary-bg-color line line-sm"></div>
            <p class="primary-text-color artist-summary">
              ${artistsArray[i].artistSummary}
            </p>
          </div>
        </div>
      `;
    }
  }
  // set the artist card to the container
  GuestArtistContainer.innerHTML = artistCard;
};

// show the cards
showArtists();

seeMoreButton.addEventListener('click', () => {
  objectsToShow += 2; // increment the objects to show per click
  startIndex += 2; // increment the starting point
  showArtists(); // show the artists

  if (objectsToShow >= artistsArray.length) {
    hideElement([seeMoreButton]);
    showElement([collapseButton]);
  } else {
    hideElement([collapseButton]);
    showElement([seeMoreButton]);
  }
});


collapseButton.addEventListener('click', () => {

  showArtists(); // show the artists
  objectsToShow = 2; // reset to show 2 items only
});
