import React, { useState } from 'react';

const WebList=  ({ category }) => {

    //const [currentSite, setCurrentSite ] = useState();

    const [sites] = useState([
        {
            name: 'Movie Ranker',
            category: 'site',
            description: 'Web App that connects to IMDB and Wikipedia API to show reviews, poster, etc.',
            link: 'https://jcsryan.github.io/movie-ranker/'
        },
        {
            name: 'StackDeck',
            category: 'site',
            description: 'MERN-based flash card app that allows users to create decks of flash cards and save them to the web or as a PWA.',
            link: 'https://github.com/jcsryan/StackStudy'
        },
        {
            name: 'Run Buddy',
            category: 'site',
            description: 'A basic HTML website that offers fitness training services, and the first project we worked on in the UT Austin Coding Boot Camp.',
            link: 'https://silvam2017.github.io/run-buddy/'

        },
    ]);
    const currentSites = sites.filter((site) => site.category === category);

    return(
        <div>
        <div className="flex-row">
          {currentSites.map((image, i) => (
            <a
            target="_blank" 
            rel="noopener noreferrer"
            href={image.link}
            key={image.name}
            >
            <p>
                {image.name}
            </p>
            <img
            src={require(`../../assets/small/${category}/${i}.png`)}
            alt={image.name}
            className="img-thumbnail mx-1"
          />
          <p>{image.description}
              </p>
              </a>
          ))}
        </div>
      </div>
    )
}

export default WebList;