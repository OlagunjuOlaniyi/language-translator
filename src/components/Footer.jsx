import React from "react";

const Footer = () => {
  const getDate = new Date().getFullYear();
  return (
    <div className="text-center border-top mt-2 p-2">
      Copyright @Olaniyi {getDate}
    </div>
  );
};

export default Footer;
