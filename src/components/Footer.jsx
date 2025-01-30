import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 px-4 text-white py-8 flex flex-col items-center md:flex-row flex-wrap justify-between md:px-12">
      <div>
        <img src="./footerImage.webp" alt="" className="h-[80px]" />
        <p className="my-4">Email us: support@example.com</p>
      </div>
      <div>
        <h2 className="font-bold text-xl mt-4">PW Skills</h2>
        <div className="h-1 w-32 border-b-2 border-yellow-400 rounded-2xl"></div>
        <div>
          <p>About Us</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-xl mt-4">Products</h2>
        <div className="h-1 w-32 border-b-2 border-yellow-400 rounded-2xl"></div>
        <div>
          <p>PW Skills Lab</p>
          <p>Job Portal</p>
          <p>Experience Portal</p>
          <p>Become an affiliate</p>
          <p>Hall of Fame</p>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-xl mt-4">Links</h2>
        <div className="h-1 w-32 border-b-2 border-yellow-400 rounded-2xl"></div>
        <div>
          <p>Discord Channel</p>
          <p>PW Youtube</p>
          <p>Careers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
