import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Minus, MoveLeft, Plus, Trash2 } from 'lucide-react';

import { useProducts } from '../contexts/ProductsContext';
import { useCart } from '../contexts/CartContext';
import Button from '../components/ui/Button';

const Cart = () => {
  const { currency, categories, products } = useProducts();
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

  const getCategoryText = (categoryPath) => {
    return categories.find((cat) => cat.path === categoryPath).text;
  };

  useEffect(() => {
    if (products.length > 0 && cart) getCartProducts();
  }, [products, cart]);

  if (cartProducts.length === 0) {
    return (
      <div className="min-h-[77vh] flex flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-2xl">В корзине пока пусто</h3>
        <p className="text-sm">
          Начните с главной страницы — нужный товар можно найти через поиск или заглянуть в подборки
        </p>
        <Link
          to={'/'}
          className="flex items-center justify-center gap-2 text-primary font-medium cursor-pointer"
        >
          <Button size="md">На главную</Button>
        </Link>
      </div>
    );
  }

  return products.length > 0 && cart ? (
    <div className="mt-10 min-h-[73vh]">
      <h1 className="text-xl lg:text-2xl font-medium mb-6">Корзина, {getCartTotalCount()} шт</h1>

      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8">
        {/* Левая часть — товары */}
        <div className="p-3 flex-1 min-w-0 w-full border border-border rounded-md">
          <div className="pb-1 grid grid-cols-[2.5fr_0.8fr_0.8fr_0.7fr] sm:grid-cols-[2fr_1fr_1fr_1fr] gap-1 lg:grid-cols-[2.5fr_0.8fr_0.8fr_0.7fr] text-muted-foreground text-xs  sm:text-sm md:text-base font-medium">
            <p className="text-left">Продукт</p>
            <p className="text-center">Количество</p>
            <p className="text-center">Сумма</p>
            <p className="text-center">Удалить</p>
          </div>

          {cartProducts.map((product, index) => (
            <div
              key={index}
              className="grid grid-cols-[2.5fr_0.8fr_0.8fr_0.7fr] sm:grid-cols-[2fr_1fr_1fr_1fr] lg:grid-cols-[2.5fr_0.8fr_0.8fr_0.7fr] gap-1 border-b border-border text-muted-foreground items-center text-xs sm:text-sm md:text-base font-medium py-2"
            >
              <Link
                to={`/product/${product.name}-${product._id}`}
                className="flex items-center md:gap-6 gap-3"
              >
                <div className="cursor-pointer min-w-24 w-24 h-24 flex items-center justify-center rounded-md overflow-hidden bg-secondary">
                  <img className="w-full object-cover" src={product.image[0]} alt={product.name} />
                </div>
                <div className="space-y-1">
                  <p className="font-semibold">{product.name}</p>
                  <div className=" font-normal">
                    <p>
                      Категория:{' '}
                      <span className="text-foreground">{getCategoryText(product.category)}</span>
                    </p>
                  </div>
                </div>
              </Link>
              <div className="flex items-center justify-center">
                <div className="mt-1 px-1 flex items-center justify-center gap-2 md:w-22 w-16 h-[28px] bg-secondary rounded">
                  <button
                    onClick={() => removeFromCart(product._id)}
                    className="cursor-pointer text-sm px-0.5 h-full"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-7 text-center">{cart[product._id]}</span>
                  <button
                    onClick={() => addToCart(product._id)}
                    className="cursor-pointer text-sm px-0.5 h-full"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
              <p className="text-center">
                {(product.offerPrice * product.quantity).toLocaleString()} {currency}
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
                {getCartTotalAmount().toLocaleString()} {currency}
              </span>
            </p>
            <p className="flex justify-between">
              <span>Доставка</span>
              <span>Бесплатно</span>
            </p>

            <p className="mt-3 flex justify-between font-medium text-foreground">
              <span>Итого:</span>
              <span>
                {getCartTotalAmount().toLocaleString()} {currency}
              </span>
            </p>
          </div>

          <button className="mt-6 py-2 w-full bg-primary/80 text-white font-medium hover:bg-primary rounded-md cursor-pointer">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  ) : null;
};

export default Cart;
