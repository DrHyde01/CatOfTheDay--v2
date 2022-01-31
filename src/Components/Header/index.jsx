import { Link } from 'react-router-dom'
import headerIllustration from '../../Assets/catpaw.png'
import DarkMode from '../../Hooks/DarkMode'

function Header() {
  const [colorTheme, setTheme] = DarkMode()
  return (
    <nav className="relative flex flex-wrap justify-center md:justify-between items-center w-full h-52 md:h-32 py-5 px-10 2xl:px-32 bg-white dark:bg-slate-900 z-50">
      <Link to="/" className="flex items-center">
        <img
          src={headerIllustration}
          alt="patte de chat"
          className="h-20 ease-in-out duration-500 hover:rotate-12"
        />
        <p className="font-twinkle dark:text-white text-3xl mx-5">
          Cat of the day
        </p>
      </Link>

      <div className="flex w-64 justify-between md:w-auto">
        <Link
          to="/facts"
          className="mx-5 font-medium dark:text-white uppercase hover:text-pink-500"
        >
          Facts
        </Link>
        <Link
          to="/about"
          className="mx-5 font-medium dark:text-white uppercase hover:text-pink-500"
        >
          About
        </Link>

        <span onClick={() => setTheme(colorTheme)} className="text-xl">
          🌛
        </span>
      </div>
    </nav>
  )
}

export default Header
