import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { MoveLeft, Trash2 } from 'lucide-react';

import { useProducts } from '../contexts/ProductsContext';
import { useCart } from '../contexts/CartContext';
import { dummyAddress } from '../assets/assets';

const Cart = () => {
  const { products } = useProducts();
  const { cart, addToCart, removeFromCart, deleteFromCart, getCartTotalCount, getCartTotalAmount } =
    useCart();
  const [cartProducts, setCartProducts] = useState([]);
  const [showAddress, setShowAddress] = useState(false);
  const [addresses, setAddresses] = useState(dummyAddress);
  const [selectedAddress, setSelectedAddress] = useState(dummyAddress[0]);
  const [paymentOption, setPaymentOption] = useState('COD');

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
    <div className="flex flex-col lg:flex-row max-lg:justify-center max-lg:items-center mt-10 gap-4">
      <div className="flex-1 max-w-4xl">
        <h1 className="text-2xl font-medium mb-6">
          Ваша корзина,{' '}
          <span className="text-primary">
            {getCartTotalCount()} {getCartTotalCount() > 1 ? 'товара' : 'товар'}
          </span>
        </h1>

        <div className="grid grid-cols-[2fr_1fr_1fr] text-gray-500 text-base font-medium pb-3">
          <p className="text-left">Product Details</p>
          <p className="text-center">Subtotal</p>
          <p className="text-center">Action</p>
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
                  <div className="flex items-center">
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                      }}
                      className="px-3 flex items-center justify-center gap-2 md:w-22 w-16 h-[30px] bg-secondary rounded select-none"
                    >
                      <button
                        onClick={() => removeFromCart(product._id)}
                        className="cursor-pointer text-md px-2 h-full"
                      >
                        -
                      </button>
                      <span className="w-7 text-center">{cart[product._id]}</span>
                      <button
                        onClick={() => addToCart(product._id)}
                        className="cursor-pointer text-md px-2 h-full"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
            <p className="text-center">${product.offerPrice * product.quantity}</p>
            <button onClick={() => deleteFromCart(product._id)} className="cursor-pointer mx-auto">
              <Trash2 size={20} className="hover:text-foreground" />
            </button>
          </div>
        ))}

        <Link
          to={'/'}
          className="group cursor-pointer flex items-center mt-8 gap-2 text-primary font-medium"
        >
          <MoveLeft />
          Продолжить покупки
        </Link>
      </div>

      <div className="max-w-[360px] w-full bg-gray-100/40 p-5 max-md:mt-16 border border-gray-300/70 mt-6">
        <h2 className="text-xl md:text-xl font-medium">Сумма заказа</h2>
        <hr className="border-gray-300 my-5" />

        <div className="mb-6">
          <p className="text-sm font-medium uppercase">Аддресс доставки</p>
          <div className="relative flex justify-between items-start mt-2">
            <p className="text-gray-500">
              {selectedAddress
                ? `${selectedAddress.street}, ${selectedAddress.city}, ${selectedAddress.state}, `
                : 'Аддресс не найден'}
            </p>
            <button
              onClick={() => setShowAddress(!showAddress)}
              className="text-primary hover:underline cursor-pointer"
            >
              Изменить
            </button>
            {showAddress && (
              <div className="absolute top-12 py-1 bg-white border border-gray-300 text-sm w-full">
                {addresses.map((address, index) => (
                  <p
                    onClick={() => {
                      setSelectedAddress(address);
                      setShowAddress(false);
                    }}
                    className="text-gray-500 p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {address.street}, {address.city}, {address.state},
                  </p>
                ))}
                <p
                  onClick={() => setShowAddress(false)}
                  className="text-primary text-center cursor-pointer p-2 hover:bg-primary/10"
                >
                  Добавить аддресс
                </p>
              </div>
            )}
          </div>

          <p className="text-sm font-medium uppercase mt-6">Способ оплаты</p>

          <select
            onChange={(e) => setPaymentOption(e.target.value)}
            value={paymentOption}
            className="w-full border border-gray-300 bg-white px-3 py-2 mt-2 outline-none"
          >
            <option value="COD">Оплата при получении</option>
            <option value="Online">Онлайн</option>
          </select>
        </div>

        <hr className="border-gray-300" />

        <div className="text-gray-500 mt-4 space-y-2">
          <p className="flex justify-between">
            <span>Цена</span>
            <span>${getCartTotalAmount()}</span>
          </p>
          <p className="flex justify-between">
            <span>Доставка</span>
            <span className="text-green-600">Бесплатно</span>
          </p>
          <p className="flex justify-between">
            <span>Налог (12%)</span>
            <span>${(getCartTotalAmount() * 12) / 100}</span>
          </p>
          <p className="flex justify-between text-lg font-medium mt-3">
            <span>Итого:</span>
            <span>${getCartTotalAmount() + (getCartTotalAmount() * 12) / 100}</span>
          </p>
        </div>

        <button className="w-full py-3 mt-6 cursor-pointer bg-primary/80 text-white font-medium hover:bg-primary transition rounded-md">
          Оформить заказ
        </button>
      </div>
    </div>
  ) : null;
};

export default Cart;
