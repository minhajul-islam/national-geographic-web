import React from "react";

const Header = () => {
  const logo = 'https://www.nationalgeographic.com/allure-of-China/natgeo_logo.443ac93b.svg';
  const partnerLogo = 'https://www.nationalgeographic.com/allure-of-China/cgtn_logo.1b969ab3.svg';
  return (
    <div className="bg-black grid items-center">
      <div className="col-start-1 max-w-6xl mx-auto p-4">
        <img src={logo}/>
      </div>
      <div className="col-end-12 max-w-6xl flex flex-row items-center mx-auto">
        <p className="text-right text-white text-base mr-4 sm-hidden ">Partner content for</p>
        <div className='flex flex-col mr-2'>
          <p className="text-center text-white text-base sm:text-xs md-hidden lg-hidden">Partner content for</p>
          <img className='self-center w-16 py-2' src={partnerLogo}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
