import footerIllustration from '../../Assets/catcomputer.png'
function Footer() {
  return (
    <div className="flex flex-col items-center p-10 h-auto bg-white">
      <h3 className="uppercase mb-4">Pawered by</h3>
      <div className="flex items-center p-2">
        <a
          href="https://thecatapi.com/"
          className="mx-3 font-medium  uppercase hover:text-pink-600"
        >
          Cat API
        </a>
        <a
          href="https://alexwohlbruck.github.io/cat-facts/"
          className="mx-3 font-medium uppercase hover:text-pink-600"
        >
          Cat Facts
        </a>
      </div>

      <img src={footerIllustration} alt="cat with computer" className="h-52" />
    </div>
  )
}

export default Footer
