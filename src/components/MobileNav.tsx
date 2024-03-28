const MobileNav = () => {
  return (
    <nav className="fixed -bottom-0.5 z-50 w-full px-2 py-3 rounded-t-md bg-[#a1a1a1f6] md:hidden">
      <ul
        className='grid grid-cols-5 *:w-full *:bg-[#fff] *:font-semibold *:flex *:rounded-sm *:items-center *:justify-center *:py-2.5 *:px-1 *:text-[.9rem] gap-x-1.5 *:box-shadow'
      >
          <a href="#">Home</a>
          <a href="#">Courses</a>
          <a href="#" className=" text-secondary-800 outline outline-2 outline-secondary-500">About</a>
          <a href="#">Contact</a>
          <a href="#">Join Us</a>
      </ul>
    </nav>
  );
};

export default MobileNav;
