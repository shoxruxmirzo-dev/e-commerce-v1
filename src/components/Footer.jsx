import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-10 flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm bg-secondary text-muted-foreground">
      <p>Copyright © 2025 E-Commerce. All rights reservered.</p>
      <div className="mt-auto flex items-center gap-4">
        <a href="#" className="hover:text-foreground transition-all">
          Contact Us
        </a>
        <div className="h-8 w-px bg-white/20"></div>
        <a href="#" className="hover:text-foreground transition-all">
          Privacy Policy
        </a>
        <div className="h-8 w-px bg-white/20"></div>
        <a href="#" className="hover:text-foreground transition-all">
          Trademark Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
