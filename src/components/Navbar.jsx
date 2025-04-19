// import React, { useState } from 'react'
// import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
// import { useSelector } from 'react-redux';
// import { Link } from 'react-router-dom';
// import Modal from './Modal';
// import Login from './Login';


// const Navbar = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLogin, setIsLogin] = useState(true)
//   const productData = useSelector(state=>state.cart.products);
//   return (
//    <nav className='bg=white shadow-md'>
//     <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
//       <div className='font-lg font-bold'>
//         <Link to="/">Shop Here</Link>
//       </div>
//       <div className='relative flex-1 mx-4'>
//         <form>
//           <input type='text' placeholder='Search Products' className='w-full border px-4 py-2'/>
          
//           {/* imprt this from react icons */}
//           <FaSearch className='absolute top-3 right-3 text-blue-500'></FaSearch>  
//         </form>
//       </div>
//       <div className='flex items-center space-x-4'>
//         <Link to="/cart" className='relative'>
//         <FaShoppingCart className='text-lg'/>
//         {productData.length > 0 && (
//           <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center
//           items-center text-white'>
//             {productData.length}
//           </span>
//         )}
//         </Link>
//         <button className='hidden md:block' onClick={()=>setIsModalOpen(true)}>
//           Login | Register
//         </button>
//         <button className='block md:hidden'>
//           <FaUser />
//         </button>
//       </div>
//       </div>
//       <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
//       <Link to='/' className='hover:underline'>
//       Home
//       </Link>
//       <Link to='/shop' className='hover:underline'>
//       Shop
//       </Link>
//       <Link to='/' className='hover:underline'>
//       Contact
//       </Link>
//       <Link to='/' className='hover:underline'>
//       About
//       </Link>
//       </div>
//     <Modal isModalopen={isModalOpen} setIsModalopen={setIsModalOpen}>
//       {isLogin ? <Login /> : <Register />}
//     </Modal>
//    </nav>
//   )
// }

// export default Navbar;














import React, { useState } from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Modal from './Modal';
import Login from './Login';
import Register from './Register'; // ✅ Make sure Register is imported
import { setSearchTerm } from '../redux/productSlice';


const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const openSignUp = ()=>{
    setIsLogin(false);
    setIsModalOpen(true);
  }

  const openLogin= ()=>{
    setIsLogin(true);
    setIsModalOpen(true);
  }
  const productData = useSelector(state => state.cart.products);

  const handleSearch = (e)=>{
    e.preventDefault()
    dispatch(setSearchTerm(search))
    navigate('/filter-data')
  }

  return (
    <nav className='bg-white shadow-md'> {/* ✅ fixed class name */}
      <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
        <div className='font-lg font-bold'>
          <Link to="/">Shop Here</Link>
        </div>
        <div className='relative flex-1 mx-4'>
          <form onSubmit={handleSearch}>
            <input type='text' placeholder='Search Products' className='w-full border px-4 py-2' onChange={(e)=>setSearch(e.target.value)}/>
            <FaSearch className='absolute top-3 right-3 text-blue-500' />
          </form>
        </div>
        <div className='flex items-center space-x-4'>
          <Link to="/cart" className='relative'>
            <FaShoppingCart className='text-lg' />
            {productData.length > 0 && (
              <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>
                {productData.length}
              </span>
            )}
          </Link>
          <button
            className='hidden md:block'
            onClick={() => {
              // setIsLogin(true); // ✅ ensure it shows Login
              setIsModalOpen(true);
            }}
          >
            Login | Register
          </button>
          <button
            className='block md:hidden'
            onClick={() => {
              setIsLogin(true); // optional: trigger modal on mobile too
              setIsModalOpen(true);
            }}
          >
            <FaUser />
          </button>
        </div>
      </div>

      <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
        <Link to='/' className='hover:underline'>Home</Link>
        <Link to='/shop' className='hover:underline'>Shop</Link>
        <Link to='/' className='hover:underline'>Contact</Link>
        <Link to='/' className='hover:underline'>About</Link>
      </div>

      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? <Login openSignUp={openSignUp}/> : <Register openLogin={openLogin}/>}
      </Modal>
    </nav>
  );
};

export default Navbar;
