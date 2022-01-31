import { Link } from 'react-router-dom'
import headerIllustration from '../../Assets/catpaw.png'

function Header() {
  return (
    <nav className="relative flex flex-wrap justify-center md:justify-between items-center w-full h-52 md:h-32 py-5 px-10 2xl:px-32 bg-white z-50">
      <Link to="/" className="flex items-center">
        <img
          src={headerIllustration}
          alt="patte de chat"
          className="h-20 ease-in-out duration-500 hover:rotate-12"
        />
        <p className="font-twinkle text-3xl mx-5">Cat of the day</p>
      </Link>

      <div className="flex w-64 justify-between md:w-auto">
        <Link
          to="/facts"
          className="mx-5 font-medium uppercase hover:text-pink-500"
        >
          Facts
        </Link>
        <Link
          to="/about"
          className="mx-5 font-medium uppercase hover:text-pink-500"
        >
          About
        </Link>
      </div>
    </nav>
  )
}

export default Header
