import React from 'react';

const Title = ({ title = 'Заголовок', className = 'text-3xl' }) => {
  return <h1 className={`font-semibold ${className}`}>{title}</h1>;
};

export default Title;
