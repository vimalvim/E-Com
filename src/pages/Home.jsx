import React, { useEffect } from 'react'
import { Categories, productdata } from '../assets/mockData';
import HeroImage from '../assets/Images/hero-page.png';
import InfoSection from '../components/InfoSection';
import Category from '../components/Category';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux'; //useSelector is used to display the data (only read) && useDispatch is used to display the actions (read & write).
import ProductCard from '../components/ProductCard';
import Shop from './Shop';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state=>state.product)
  useEffect(()=>{
    dispatch(setProducts(productdata))
  }, []);
  return (
    <div>
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24 '>
      {/* this code is used to maintain the design based on the screen size flex-xol: for desktop flex-row: for mobile in row*/}
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
        
          {/* to display the Categories */}
          <div className='w-full md:w-3/12'>
            <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>
              SHOP BY CATEGORIES
            </div>
            <ul className='space-y-4 bg-gray-100 p-3 border'>
            {Categories.map((category,index)=>(
              <li key={index} className='flex items-center text-sm font-medium'>
                <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                {category}
              </li>
            ))}
          </ul>
          </div>
          

          <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
            <img src={HeroImage} alt='' className='h-full w-full'/>
            <div className='absolute top-16 left-8'>
              <p className='test-gray-600 mb-4'>Enjoy Your Shopping</p>
              <h2 className='text-3xl font-bold'>Welcome to Shop Here</h2>
              <p className='text-xl mt-2.5 font-bold text-gray-800'>Million+ Products</p>
              <button className='bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700
               transform transition-transform duration-300 hover:scale-105'> Shop Now</button>
              </div>
          </div>
      </div>
      <InfoSection />
      <Category />

      <div className='container mx-auto py-12'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer'>
          {products.products.slice(0,5).map(((product,index)=>(
            <div key={index}> 
              <ProductCard  product={product}/>
              </div>
          )))}
        </div>
      </div>
     
    </div>
     <Shop />
     </div>
  )
}

export default Home