import './Navbar.css';
import Logo from '../../fiven-logo.svg';

function Navbar() {
  return (
    <div className="Navbar">
      <nav className='fixed  bg-transparent top-0 left-0 right-0'>
        <div className='container flex item-center justify-between py-6 mx-auto'>
          <img src= {Logo} />
            <div className='hidden md:block ml-10 space-x-11 my-auto'>
              <a className='text-gray-200 font-sans' href='#'>Beranda</a>
              <a className='text-gray-200 font-sans' href='#'>Layanan</a>
              <a className='text-gray-200 font-sans' href='#'>Portofolio</a>
            </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;