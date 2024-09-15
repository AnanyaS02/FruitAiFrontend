import React from 'react';
import '../../styles/FruitDetails.css'; // Ensure this path is correct

const Banana = () => {

  const fruit = {
    name: 'Banana',
    price: 5.00,
    description: 'Bananas are a highly nutritious fruit that offers a multitude of health benefits. They are rich in essential vitamins and minerals, including vitamin B6, vitamin C, and potassium, which are important for maintaining cardiovascular health, regulating blood pressure, and supporting energy levels. Bananas also contain dietary fiber, which aids in digestion and helps maintain a healthy gut. Their natural sugars provide a quick source of energy, making them an ideal snack for athletes and active individuals. With their naturally sweet flavor and creamy texture, bananas are a versatile ingredient in smoothies, baking, and even savory dishes. They are also easy to carry and enjoy on the go, making them a convenient and healthful choice for busy lifestyles.',
    imageSrc: '/banana.jpg' 
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

export default Banana;
