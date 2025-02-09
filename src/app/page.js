import React from 'react';

const HomePage = async () => {

  const res = await fetch('http://localhost:5000/products')
  const products = await res.json()
  console.log(products)
  return (
    <div>Home page

    </div>
  );
};

export default HomePage;
