import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-10 py-4 container-wrapper">
      <div className="flex flex-col md:flex-row gap-3 items-center justify-around w-full text-xs sm:text-sm text-muted-foreground">
        <p>© 2025 E-Commerce. Все права защищены</p>
        <div className="mt-auto flex items-center gap-2 sm:gap-4 text-center">
          <a href="#" className="hover:text-foreground">
            Связаться с нами
          </a>
          <div className="h-8 w-px bg-white/20"></div>
          <a href="#" className="hover:text-foreground">
            Соглашение о конфиденциальности
          </a>
          <div className="h-8 w-px bg-white/20"></div>
          <a href="#" className="hover:text-foreground">
            Пользовательское соглашение
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
