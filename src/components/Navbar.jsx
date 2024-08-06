 

const Navbar = () => {
  return (
    <div className='flex px-14 py-3 justify-between'>
      <div className="Logo  font-semibold text-4xl tracking-normal font-Neue_Montreal">
        <h3>ochi</h3>
      </div>
      <div className="Links md:flex hidden gap-9 ">
        {["Service", "Our Work", "About Us", "Insights", "Contact us"].map((item, index)=>(
          <div className="relative group" key={index}>
            <a href='#' className={`my-3 font-Neue_Montreal  text-xl capitalize  ${index ==4 && "ml-48"}`} >{item}</a>
            <div className={`absolute bottom-0 left-0 w-0 h-[2px] bg-black transition-all  duration-300 group-hover:w-full`}></div>


          </div>
        ))}
      </div>

      
    </div>
  )
}

export default Navbar