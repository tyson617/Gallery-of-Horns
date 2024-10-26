// import React from 'react'

const HornedBeast = ({title, imageUrl, description}) => {
  return (
    <div>
        <h2>{title}</h2>
        <img 
          src={imageUrl} 
          alt={title} 
          title={title}
          style={{width: '300px', height: 'auto'}}
        />
        <p>{description}</p>
    </div>
  );
};

export default HornedBeast