import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-wrap lg:px-36 px-10 py-4 bg-gray-800">
      <div className='lg:w-1/5 w-1/2'>
        <p className='lg:text-left text-center'>
          <a className="font-light text-xs text-white" target="_blank"
             href="https://www.nationalgeographic.com/legal/terms/"> Terms of Use </a>
          <br/>
          <a className="font-light text-xs text-white" target="_blank"
             href="https://www.nationalgeographic.com/legal/terms/"> Privacy Policy </a>
          <br/>
          <a className="font-light text-xs text-white" target="_blank"
             href="https://www.nationalgeographic.com/legal/terms/"> Your California Privacy Rights </a>
          <br/>
          <a className="font-light text-xs text-white" target="_blank"
             href="https://www.nationalgeographic.com/legal/terms/"> Interest-based Ads </a>
          <br/>
        </p>
      </div>
      <div className='lg:w-1/5 w-1/2'>
        <p className='lg:text-left text-center'>
          <a className="font-light text-xs text-white" target="_blank"
             href="https://www.nationalgeographic.com/legal/terms/"> About Nielsen Measurement </a>
          <br/>
          <a className="font-light text-xs text-white" target="_blank"
             href="https://www.nationalgeographic.com/legal/terms/"> Do Not Sell My Personal Information </a>
          <br/>
          <a className="font-light text-xs text-white" target="_blank"
             href="https://www.nationalgeographic.com/legal/terms/"> Children’s Privacy Policy </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
