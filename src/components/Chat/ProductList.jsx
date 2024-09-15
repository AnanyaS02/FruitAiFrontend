import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ProductList.css'; 

const ProductList = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Orange',
      price: 8.00, 
      quantity: 10,
      imageSrc: './orange.jpg',
    },
    {
      id: 2,
      name: 'Mango',
      price: 10.00,
      quantity: 4,
      imageSrc: './mango.jpg',
    },
    {
      id: 3,
      name: 'Apple',
      price: 7.00,
      quantity: 7,
      imageSrc: './apple.jpg',
    },
    {
      id: 4,
      name: 'Banana',
      price: 5.00,
      quantity: 14,
      imageSrc: './banana.jpg',
    },
  ];

  const handleProductClick = (name) => {
    navigate(`/fruit/${name}`);
  }
  return (
    <div className="flex flex-col">
      <h1 className='text-white'>Fruit.Ai Cart</h1>
      {products.map((product) => (
        <div key={product.id} className="p-6" onClick={() => handleProductClick(product.name)}>
          <figure className="md:flex max-w-5xl bg-slate-100 rounded-full px-8 dark:bg-slate-800">
            <div className="w-32 h-32 ps-4 pt-4 pb-4">
              <img className="rounded-xl mx-auto object-cover" src={product.imageSrc} alt={product.name} width="100" height="100" />
            </div>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
              <blockquote>
                <div className="flex justify-between gap-10">
                  <div className="flex flex-col">
                    <p className="text-lg font-bold text-red-500">{product.name}</p>
                    <p className='font-bold text-red-500'>${product.price.toFixed(2)}</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-4">
                      <p className='text-red-500'>-</p>
                      <p className='font-bold text-red-500'>{product.quantity}</p>
                      <p className='text-red-500'>+</p>
                    </div>
                    <p className='font-bold text-red-500'>${(product.price * product.quantity).toFixed(2)}</p> {/* Calculate total price */}
                  </div>
                </div>
              </blockquote>
            </div>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default ProductList;