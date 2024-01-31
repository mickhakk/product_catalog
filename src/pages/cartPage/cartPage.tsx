import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import styles from './cartPage.module.scss';
import { CartItem } from '../../components/CartItem/CartItem';
import { BackLink } from '../../components/BackLink/BackLink';
import { ProductsContext } from '../../context/ProductsContext';
// import { Product } from '../../types/Product';

// const productsFromServer = [
//   {
//     id: 1,
//     name: 'Apple iPhone 14 Pro 128GB Silver (MQ023)',
//     price: 999,
//     quantity: 1,
//     image: 'https://dummyimage.com/66x66/000/fff&text=PRODUCT',
//   },
//   {
//     id: 2,
//     name: 'Apple iPhone 14 Plus 128GB PRODUCT Red (MQ513)',
//     price: 859,
//     quantity: 2,
//     image: 'https://dummyimage.com/66x66/000/fff&text=PRODUCT',
//   },
//   {
//     id: 3,
//     name: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
//     price: 799,
//     quantity: 1,
//     image: 'https://dummyimage.com/66x66/000/fff&text=PRODUCT',
//   },
// ];

export const CartPage: React.FC = () => {
  const { cartProducts, removeCartProduct } = useContext(ProductsContext);

  const productsWithQuantity = cartProducts.map(product => ({
    ...product,
    quantity: 1,
  }));

  const [products, setProducts] = useState(productsWithQuantity);
  const navigate = useNavigate();
  // console.log(cartProducts);
  // let isCheckoutLoading = false;
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  const totalPrice = products.reduce((acc, product) => acc
    + product.price
    * product.quantity, 0);

  const totalProducts = products.reduce((acc, product) => acc
    + product.quantity, 0);

  const deleteProduct = (id: number) => {
    removeCartProduct(id);

    setProducts(prevProducts => prevProducts
      .filter(product => product.id !== id));
  };

  const increaseQuantity = (id: number) => {
    const indexOfProduct = products.findIndex(product => product.id === id);

    setProducts(prevProducts => {
      const newProducts = [...prevProducts];

      newProducts[indexOfProduct].quantity += 1;

      return newProducts;
    });
  };

  const decreaseQuantity = (id: number) => {
    const indexOfProduct = products.findIndex(product => product.id === id);

    setProducts(prevProducts => {
      const newProducts = [...prevProducts];

      newProducts[indexOfProduct].quantity -= 1;

      return newProducts;
    });
  };

  const goCheckout = () => {
    if (cartProducts.length) {
      setIsCheckoutLoading(true);

      setTimeout(() => {
        setIsCheckoutLoading(false);
        navigate('/checkout');
      }, 1000);
    }
  };

  return (
    <>
      <BackLink link=".." />
      <h1 className={styles.title}>Cart</h1>
      <div className={styles.wrapper}>
        <div
          className={styles.cartItemList}
        >
          {
            !products.length
              ? <h2 className={styles.emptyTitle}>Cart is empty</h2>
              : products.map(({
                id,
                name,
                price,
                quantity,
                image,
                category,
                itemId,
              }) => (
                <CartItem
                  key={id}
                  id={id}
                  name={name}
                  price={price}
                  quantity={quantity}
                  image={image}
                  deleteProduct={deleteProduct}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  category={category}
                  itemId={itemId}
                />
              ))
          }
        </div>

        <div className={styles.totalPrice}>
          {isCheckoutLoading
            && (
              <div className={styles.loader}>
                <img src="img/loading-spinner.gif" alt="Product is loading" />
              </div>
            )}
          <div className={styles.totalPriceTextWrapper}>
            <p className={styles.totalPriceTextWrapperValue}>
              {`$${totalPrice}`}
            </p>

            <p className={styles.totalPriceTextWrapperInfo}>
              {`Total for ${totalProducts} items`}
            </p>
          </div>
          <button
            className={styles.totalPriceButton}
            type="button"
            disabled={products.length === 0}
            onClick={goCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
