// index.js
window.onload = () => {
  const body = document.querySelector('body');
  const GuestArtistContainer = document.querySelector('.guest-artists-cards-container');
  const seeMoreButton = document.querySelector('.see-more-button');
  const collapseButton = document.querySelector('.collapse-button');
  const headlineSection = document.querySelector('.headline-section');
  const aboutHeadlineSection = document.querySelector('.about-headline-section');
  const modalSection = document.querySelector('.modal-section');
  const openMenuButton = document.getElementById('openMenuIcon');
  const closeMenuButton = document.getElementById('closeMenuIcon');

  let artistCard = '';
  let objectsToShow = 2;
  let startIndex = 0;

  const hideElement = (args) => {
    args.forEach((element) => {
      element.style.display = 'none';
    });
  };

  const showElement = (args, direction) => {
    args.forEach((element) => {
      if (direction === 'block') {
        element.style.display = 'block';
      } else {
        element.style.display = 'flex';
      }
    });
  };

  const showArtists = () => {
    const artistsArray = [
      {
        artistName: 'Boss Maej',
        artistLabel: 'Home of creativity',
        artistSummary: 'The artist\'s real name is Muhammad Sesay from Sierra Leone.',
        artistImage: {
          url: './public/images/artists/maej.jpg',
          alt: 'boss maej\'s photo',
        },
      },
      {
        artistName: 'DReal',
        artistLabel: 'Home of creativity',
        artistSummary: 'The artist\'s real name is Houdi Kawulay from Sierra Leone.',
        artistImage: {
          url: './public/images/artists/dreal.jpg',
          alt: 'DReal\'s photo',
        },
      },
      {
        artistName: 'Burna Boy',
        artistLabel: 'Home of creativity',
        artistSummary: 'The artist\'s real name is Damini Ebunoluwa Ogulu from Sierra Leone',
        artistImage: {
          url: './public/images/artists/burna-boy.jpeg',
          alt: 'Burna boy photo',
        },
      },
      {
        artistName: 'Oxlade',
        artistLabel: 'Knostra Music',
        artistSummary: 'The artist\'s real name is Ikuforiji Olaitan Abdulrahman from Nigeria.',
        artistImage: {
          url: './public/images/artists/oxlade.jpg',
          alt: 'Oxlade\'s photo',
        },
      },
      {
        artistName: 'Stormzy',
        artistLabel: 'Merky - Warner',
        artistSummary: 'The artist\'s real name is Michael Ebenezer Kwadjo Omari Jr. from UK',
        artistImage: {
          url: './public/images/artists/stormzy.jpg',
          alt: 'Stormzy\'s photo',
        },
      },
      {
        artistName: 'Dave Santan',
        artistLabel: 'Warner Chappell Music',
        artistSummary: 'The artist\'s real name is David Orobosa Omoregie',
        artistImage: {
          url: './public/images/artists/dave.jpg',
          alt: 'Dave\'s photo',
        },
      },
    ];

    for (let i = startIndex; i < artistsArray.length; i += 1) {
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

    if (GuestArtistContainer !== null) {
      GuestArtistContainer.innerHTML = artistCard;
    }
  };

  showArtists();

  if (seeMoreButton !== null) {
    seeMoreButton.addEventListener('click', () => {
      objectsToShow += 2; // increment the objects to show per click
      startIndex += 2; // increment the starting point
      showArtists(); // show the artists
    
      if (objectsToShow >= artistsArray.length) {
        hideElement([seeMoreButton]);
      } else {
        showElement([seeMoreButton]);
      }
    });
  }

  if (collapseButton !== null) {
    collapseButton.addEventListener('click', () => {
      showArtists(); // show the artists
      objectsToShow = 2; // reset to show 2 items only
    });
  }

  if (openMenuButton !== null) {
    openMenuButton.addEventListener('click', () => {
      showElement([modalSection, closeMenuButton], 'block');
      body.style.overflow = 'hidden';
      if (headlineSection !== null) {
        headlineSection.style.filter = 'blur(3px)';
      } else if (aboutHeadlineSection !== null) {
        aboutHeadlineSection.style.filter = 'blur(3px)';
      }
    });
  }

  if (closeMenuButton !== null) {
    closeMenuButton.addEventListener('click', () => {
      hideElement([modalSection, closeMenuButton]);
      headlineSection.style.filter = 'blur(0px)';
      body.style.overflow = 'scroll';
    });
  }
};
