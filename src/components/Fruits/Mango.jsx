import React from 'react';
import '../../styles/FruitDetails.css'; // Ensure this path is correct

const Mango = () => {

  const fruit = {
    name: 'Mango',
    price: 10.00,
    description: 'Mangoes are often hailed as the "king of fruits" due to their deliciously sweet flavor and rich nutritional profile. They are an excellent source of vitamins A and C, both of which are crucial for maintaining healthy skin, vision, and immune function. Mangoes are also packed with antioxidants such as beta-carotene, which can help protect the body from oxidative stress and inflammation. Their high fiber content supports digestive health and aids in maintaining a healthy weight. Beyond their nutritional benefits, mangoes are incredibly versatile and can be enjoyed in a variety of ways, from fresh slices and smoothies to salsas and desserts. Their juicy, tropical taste brings a touch of paradise to any meal.',
    imageSrc: '/mango.jpg' 
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

export default Mango;
