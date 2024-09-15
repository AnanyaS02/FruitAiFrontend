import React from 'react';
import '../../styles/FruitDetails.css';

const Apple = () => {

  const fruit = {
    name: 'Apple',
    price: 7.00,
    description: 'Apples are one of the most popular and widely consumed fruits around the world, known for their crisp texture and sweet-tart flavor. They are a great source of dietary fiber, particularly soluble fiber known as pectin, which can help regulate blood sugar levels and support heart health. Apples are also rich in antioxidants, such as quercetin, which can combat free radicals and reduce inflammation. The diverse range of apple varieties, from tart Granny Smiths to sweet Fuji apples, allows for numerous culinary uses, including snacking, baking, and cooking. Regular consumption of apples can contribute to overall health by aiding digestion, supporting weight management, and boosting immune function.',
    imageSrc: '/apple.jpg' 
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

export default Apple;
