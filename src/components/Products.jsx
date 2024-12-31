import { useEffect, useState } from 'react'
import '../App.css'
import Card from "./Card"
import { addProduct } from "../app/shopSlice"
import { useDispatch } from 'react-redux'

function App() {
  const [product, setProduct] = useState([])
  const dispatch = useDispatch();

  const addToCart = (product) => {
    dispatch(addProduct(product.id));
    console.log(`${product.title} added to cart!`);
  };


  const getProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image
    }));
  }


  useEffect(() => {
    const loadProducts = async () => {
      if(localStorage.getItem("products") && localStorage.getItem("products").length > 0) {
        const products = JSON.parse(localStorage.getItem("products"));
        setProduct(products);
        // products.forEach((product) => dispatch(addProduct(product))); 
      } else {
      const products = await getProducts();
      setProduct(products);
      localStorage.setItem("products", JSON.stringify(products));
    //   products.forEach((product) => dispatch(addProduct(product))); 
    }
  };
    loadProducts();
}, [])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((product) => (
          <Card key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}

export default App
