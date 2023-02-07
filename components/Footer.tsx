import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800">
        <h4 className="font-bold">ABOUT</h4>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h4 className="font-bold">SKILLS - BACKEND</h4>
        <p>NEXTJS</p>
        <p>JavaScript</p>
        <p>NODEJS</p>
        <p>EXPRESS</p>
        <p>Express not used in this build.</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h4 className="font-bold">Created</h4>
        <p>Pratik karki</p>
        <p>Present</p>
        <p>Fullstack</p>
        <p>MERN stack</p>
        <p>Tryin to learn more:;</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <h4 className="font-bold">SUPPORT</h4>
        <p>Help Center</p>
        <p>Trust & Saftey</p>
        <p>Say Hi YouTube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>
    </div>
  );
};

export default Footer;
