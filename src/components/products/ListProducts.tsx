import React from 'react';
import Product from './Product';

interface ProductData {
  id: number;
  title: string;
  url: string;
}

const ListProducts = () => {
  const [products,setProducts]=React.useState<ProductData[]>([]);
  React.useEffect(()=>{
    const fetchProducts = async ()=>{
      try {
        const r = await fetch('https://jsonplaceholder.typicode.com/photos');
        if(!r.ok){throw new Error("Error on fecthing products")}
        const data = await r.json();
        setProducts(data.slice(0,6));
      } catch (error) {
        console.error(error);
      }
    }
    fetchProducts();
  },[])
  return (
    <div className='products'>
      {products.map((product)=>(
        <Product key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default ListProducts