import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-10 flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm text-muted-foreground">
      <p>© 2025 E-Commerce. Все права защищены</p>
      <div className="mt-auto flex items-center gap-4">
        <a href="#" className="hover:text-foreground transition-all">
          Связаться с нами
        </a>
        <div className="h-8 w-px bg-white/20"></div>
        <a href="#" className="hover:text-foreground transition-all">
          Соглашение о конфиденциальности
        </a>
        <div className="h-8 w-px bg-white/20"></div>
        <a href="#" className="hover:text-foreground transition-all">
          Пользовательское соглашение
        </a>
      </div>
    </footer>
  );
};

export default Footer;
