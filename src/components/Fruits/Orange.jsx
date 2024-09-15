import React from 'react';
import '../../styles/FruitDetails.css';

const Orange = () => {

  const fruit = {
    name: 'Orange',
    price: 8.00,
    description: 'Oranges are a superb source of vitamin C, an essential nutrient that plays a crucial role in maintaining a healthy immune system and skin. Rich in antioxidants, oranges also offer a variety of other vital nutrients including fiber, folate, and potassium. Beyond their health benefits, oranges are celebrated for their delightful, refreshing taste which can add a burst of citrus flavor to a wide range of dishes. Consuming oranges regularly can help support cardiovascular health, aid in digestion, and even enhance overall hydration due to their high water content. This versatile fruit is not only a delicious snack but also a key ingredient in many culinary traditions worldwide, from fresh juices to savory dishes and desserts.',
    imageSrc: '/orange.jpg' 
  };

  return (
    <div className="fruit-detail-container">
      <div className="fruit-image-container">
        <img src={fruit.imageSrc} alt={fruit.name} className="fruit-image" />
      </div>
      <div className="fruit-description">
        <h1 className="fruit-name">{fruit.name}</h1>
        <p className="fruit-price">${fruit.price.toFixed(2)}</p>
        <p className="fruit-description-text">{fruit.description}</p>
      </div>
    </div>
  );
};

export default Orange;
