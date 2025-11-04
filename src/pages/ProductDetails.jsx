import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router';

import { useProducts } from '../contexts/ProductsContext';
import { useCart } from '../contexts/CartContext';
import Button from '../components/ui/Button';
import { Minus, Plus, ShoppingCart } from 'lucide-react';

const ProductDetails = () => {
  const { currency, categories, products, setSelectedCategory } = useProducts();
  const { cart, addToCart, removeFromCart } = useCart();
  const [thumbnail, setThumbnail] = useState(null);

  const { product_name_id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item._id === product_name_id.split('-')[1]);

  const getProductCategory = (categoryPath) => {
    return categories.find((cat) => cat.path === categoryPath);
  };

  useEffect(() => {
    setThumbnail(product?.image[0] ? product.image[0] : null);
  }, [product]);

  return (
    product && (
      <div className="max-w-6xl w-full min-h-[77vh]">
        <p className="text-muted-foreground">
          <Link to="/">
            <Button variant="link" size="xs">
              Главная
            </Button>
          </Link>
          /
          <Link to="/category/allcategories-001">
            <Button onClick={() => setSelectedCategory(null)} variant="link" size="xs">
              Все категории
            </Button>
          </Link>
          /
          <Link
            to={`/category/${getProductCategory(product.category).path}-${
              getProductCategory(product.category)._id
            }`}
          >
            <Button variant="link" size="xs">
              {getProductCategory(product.category).text}
            </Button>
          </Link>
        </p>

        <h1 className="mt-4 text-xl sm:text-3xl font-medium">{product.name}</h1>

        <div className="flex flex-col md:flex-row gap-16 mt-4">
          <div className="flex gap-3">
            <div className="flex flex-col gap-3">
              {product.image.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setThumbnail(image)}
                  className="max-w-24 bg-secondary rounded overflow-hidden cursor-pointer"
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>

            <div className="max-w-100 bg-secondary rounded overflow-hidden">
              <img src={thumbnail} alt="Selected product" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="w-1/2 sm:w-2/5 lg:w-1/2 ">
            <div>
              <p className="text-muted-foreground line-through">
                Старая цена: {product.price.toLocaleString()} {currency}
              </p>
              <p className="text-xl font-medium">
                Цена: {product.offerPrice.toLocaleString()} {currency}
              </p>
            </div>

            <p className="text-base font-medium mt-6">Информация о продукте</p>
            <ul className="list-disc ml-4 text-muted-foreground">
              {product.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>

            <div className="min-w-[370px] max-w-md w-full flex items-center justify-normal mt-10 gap-4 text-base px-2">
              <div onClick={(e) => e.stopPropagation()} className=" text-primary w-1/3 lg:w-1/2">
                {!cart[product._id] ? (
                  <button
                    onClick={() => addToCart(product._id)}
                    className="w-full py-3 cursor-pointer font-medium bg-accent text-muted-foreground rounded-md flex items-center justify-center gap-1"
                  >
                    Добавить <ShoppingCart size={20} />
                  </button>
                ) : (
                  <div className="flex items-center justify-center gap-4 w-full py-3 px-1 bg-primary/25 rounded-md select-none">
                    <button
                      onClick={() => removeFromCart(product._id)}
                      className="cursor-pointer text-md px-1"
                    >
                      <Minus />
                    </button>
                    <span className="max-w-10 w-full font-semibold text-center">
                      {cart[product._id]}
                    </span>
                    <button
                      onClick={() => addToCart(product._id)}
                      className="cursor-pointer text-md px-1"
                    >
                      <Plus />
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={() => {
                  addToCart(product._id);
                  navigate('/cart');
                }}
                className="w-1/3 lg:w-1/2 py-3 cursor-pointer font-medium bg-primary/80 text-white hover:bg-primary/95 rounded-md flex items-center justify-center gap-1"
              >
                Перейти <ShoppingCart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductDetails;
