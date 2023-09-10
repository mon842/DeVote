import { useEffect, useState, React } from 'react'
import './Header.css';
import logo from '../logo.png';
import PurpleHead from '../Ui/PurpleHead';

const Header = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    setAct('');
    return () => {
      setAct('');
    }
  }, [windowSize > 768])


  const [act, setAct] = useState('');
  const [navblur, setNavBlur] = useState('bg-opacity-60 bg-transparent backdrop-blur-xl');
  const [blur, setBlur] = useState('');

  const handleClick = () => {
    if (act === '')
      setAct('active');
    else
      setAct('');
  }

  useEffect(() => {
    if (act === '') {
      setNavBlur('bg-opacity-60 bg-transparent backdrop-blur-xl');
      setBlur('')
    }
    else {
      setNavBlur('');
      setBlur('bg-opacity-60 bg-transparent backdrop-blur-xl');
    }

  }, [act]);

  return (
    <nav className={`z-10 fixed top-0 left-0 right-0  h-24 flex justify-between items-center py-[24px] md:px-6 lg:px-6 bg-[#141420] ${navblur}`}>
      <div className='flex gap-2'>
        <img className='h-20' src={logo} alt="ar" srcset="" />
        <h1 className="flex items-center text-white font-bold text-3xl">De <PurpleHead text={'Vote'} /> </h1>
      </div>


      <ul className={`rounded-xl sm:mt-3 flex px-3 justify-between items-center space-x-10 nav-menu sm:bg-opacity-0 text-white ${blur} bg-[#141420] ${act} `}>
        <li className='nav-item'>
          <a href='\' className="ml-10 hover:text-purple-500 hover:border-b border-purple-500">Home</a>
        </li>
        <li className='nav-item'>
          <a href='\About' className="nav-link hover:text-purple-500 hover:border-b border-purple-500">About</a>
        </li>
        <li className='nav-item'>
          <a href='contact' className="nav-link hover:text-purple-500 hover:border-b border-purple-500">Contact</a>
        </li>
        <li className='mb-8 md:mb-0 '>

          <a href='https://github.com/mon842/DeVote' className="relative group">
            <div className=" absolute inset-1 bg-[#000000] rounded-lg blur hover:blur-2xl opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <button className="flex gap-1 hover:outline-none hover:ring hover:ring-fuchsia-600 transition duration-200 ease-in transform   hover:scale-105  px-7 py-4 rounded-3xl font-bold text-gray-400 hover:text-white bg-[#262636] hover:bg-gradient-to-r from-[#ff05c9] via-[#c905ff] to-[#8402cf]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              Star Us on GitHub
            </button>
          </a>
        </li>
      </ul>

      <div className={`hamburger hidden cursor-pointer ${act}`} onClick={handleClick}>
        <span className='bar block h-1 w-8 rounded-lg my-1 mx-2 '></span>
        <span className='bar block h-1 w-8 rounded-lg my-1 mx-2 '></span>
        <span className='bar block h-1 w-8 rounded-lg my-1 mx-2 '></span>
      </div>
    </nav>
  )
}

export default Header