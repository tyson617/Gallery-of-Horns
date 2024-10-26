// import React from 'react'
import HornedBeast from './HornedBeast'
import unicornImage from '../assets/unicorn.jpg'
import minotaurImage from '../assets/minotaur.jpg'
import rhinoImage from '../assets/rhinoImage.jpg'

const Gallery = () => {
    const beasts = [
        {   
            title: 'Unicorn',
            imageUrl: unicornImage,
            description: 'A magical creature with a horn.',
            
        },
        {
            title: 'Minotaur',
            imageUrl: minotaurImage,
            description: 'A creature with the body of a man and the head of a bull.',
        },
        {
            title: 'Rhino',
            imageUrl: rhinoImage,
            description: 'Parent rhino with two babies.',
            
        },
    ];
  
  
    return (
        <div>
            {beasts.map((beast, index) => (
                <HornedBeast 
                    key={index}
                    title={beast.title}
                    imageUrl={beast.imageUrl}
                    description={beast.description}
                    
                />
            ))}
        </div>
    );
};

export default Gallery;