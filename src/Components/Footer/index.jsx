import footerIllustration from '../../Assets/catcomputer.png'
function Footer() {
  return (
    <div className="relative flex flex-col justify-center items-center p-5 h-auto z-50 bg-white dark:bg-slate-700 transition-all">
      <h3 className="text-sm lg:text-base dark:text-white uppercase mb-4">
        Pawered by
      </h3>
      <div className="flex items-center p-2">
        <a
          href="https://reactjs.org/"
          className="mx-3 text-sm lg:text-base font-medium dark:text-white uppercase hover:text-pink-600"
        >
          React
        </a>
        <a
          href="https://thecatapi.com/"
          className="mx-3 text-sm lg:text-base font-medium dark:text-white uppercase hover:text-pink-600"
        >
          Cat API
        </a>
        <a
          href="https://alexwohlbruck.github.io/cat-facts/"
          className="mx-3 text-sm lg:text-base font-medium dark:text-white uppercase hover:text-pink-600"
        >
          Cat Facts
        </a>
      </div>

      <img
        src={footerIllustration}
        alt="cat with computer"
        className="h-20 lg:h-52"
      />
    </div>
  )
}

export default Footer
