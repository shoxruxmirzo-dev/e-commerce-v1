import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Minus, MoveLeft, Plus, Trash2 } from 'lucide-react';

import { useProducts } from '../contexts/ProductsContext';
import { useCart } from '../contexts/CartContext';
import { dummyAddress } from '../assets/assets';

const Cart = () => {
  const { currency, products } = useProducts();
  const { cart, addToCart, removeFromCart, deleteFromCart, getCartTotalCount, getCartTotalAmount } =
    useCart();
  const [cartProducts, setCartProducts] = useState([]);

  const getCartProducts = () => {
    let tempArray = [];
    for (const key in cart) {
      const product = products.find((item) => item._id === key);
      product.quantity = cart[key];
      tempArray.push(product);
    }
    setCartProducts(tempArray);
  };

  useEffect(() => {
    if (products.length > 0 && cart) getCartProducts();
  }, [products, cart]);

  return products.length > 0 && cart ? (
    <div className="mt-10">
      <h1 className="text-xl lg:text-2xl font-medium mb-6">
        Корзина,{' '}
        <span className="text-primary">
          {getCartTotalCount()} {getCartTotalCount() > 1 ? 'товара' : 'товар'}
        </span>
      </h1>

      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8">
        {/* Левая часть — товары */}
        <div className="p-3 flex-1 min-w-0 w-full border border-border rounded-md">
          <div className="pb-1 grid grid-cols-[2fr_1fr_1fr] text-muted-foreground text-sm md:text-base font-medium">
            <p className="text-left">Продукт</p>
            <p className="text-center">Сумма</p>
            <p className="text-center">Удалить</p>
          </div>

          {cartProducts.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-[2fr_1fr_1fr] border-b border-border text-muted-foreground items-center text-sm md:text-base font-medium py-2"
            >
              <Link
                to={`/product/${product.name}-${product._id}`}
                className="flex items-center md:gap-6 gap-3"
              >
                <div className="cursor-pointer min-w-24 w-24 h-24 flex items-center justify-center border border-border rounded overflow-hidden">
                  <img className="w-full object-cover" src={product.image[0]} alt={product.name} />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">{product.name}</p>
                  <div className=" font-normal">
                    <p>
                      Категория: <span className="text-foreground">{product.category}</span>
                    </p>

                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                      className="mt-1 px-1 flex items-center justify-center gap-2 md:w-22 w-16 h-[28px] bg-secondary rounded select-none"
                    >
                      <button
                        onClick={() => removeFromCart(product._id)}
                        className="cursor-pointer text-md px-0.5 h-full"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-7 text-center">{cart[product._id]}</span>
                      <button
                        onClick={() => addToCart(product._id)}
                        className="cursor-pointer text-md px-0.5 h-full"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
              <p className="text-center">
                {product.offerPrice * product.quantity} {currency}
              </p>
              <button
                onClick={() => deleteFromCart(product._id)}
                className="cursor-pointer mx-auto"
              >
                <Trash2 size={20} className="hover:text-foreground" />
              </button>
            </div>
          ))}
        </div>

        {/* Кнопка, которая должна быть на новой строке */}
        <Link
          to={'/'}
          className="mt-8 lg:basis-full lg:order-3 group cursor-pointer flex items-center justify-center gap-2 text-primary font-medium"
        >
          <MoveLeft />
          Продолжить покупки
        </Link>

        {/* Правая часть — заказ */}
        <div className="sticky top-2 p-3 w-full lg:w-[360px] lg:h-max border border-border rounded-md">
          <h2 className="pb-2 text-xl md:text-xl font-medium">Ваш заказ</h2>

          <hr className="border-gray-300" />

          <div className="mt-4 space-y-2 text-muted-foreground text-sm md:text-base">
            <p className="flex justify-between">
              <span>Цена</span>
              <span>
                {getCartTotalAmount()} {currency}
              </span>
            </p>
            <p className="flex justify-between">
              <span>Доставка</span>
              <span className="text-green-600">Бесплатно</span>
            </p>

            <p className="mt-3 flex justify-between font-medium text-base text-foreground">
              <span>Итого:</span>
              <span>
                {getCartTotalAmount()} {currency}
              </span>
            </p>
          </div>

          <button className="mt-6 py-3 w-full bg-primary/80 text-white font-medium hover:bg-primary rounded-md cursor-pointer">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Cart;
