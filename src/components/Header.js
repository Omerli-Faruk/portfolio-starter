import React from 'react';

const Header = () => {
  return <header className='py-8' id='home'>
    <div className="container mx-auto">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a href="">
          <h1 className='text-3xl font-bold text-bg-sm'>Ömerli Faruk</h1>
        </a>
        {/* Button */}
        <button className="btn btn-sm">Benimle Çalış</button>
      </div>
    </div>
  </header>;
};

export default Header;
