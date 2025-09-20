import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faStar, faTimes, faSync } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "@styles/client.css";

function Cart() {
  const cartItems = [
    {
      img: "/img/shop-cart/cp-1.jpg",
      name: "Chain bucket bag",
      price: 150,
      total: 300,
    },
    {
      img: "/img/shop-cart/cp-2.jpg",
      name: "Zip-pockets pebbled tote briefcase",
      price: 170,
      total: 170,
    },
    {
      img: "/img/shop-cart/cp-3.jpg",
      name: "Black jean",
      price: 85,
      total: 170,
    },
    {
      img: "/img/shop-cart/cp-4.jpg",
      name: "Cotton Shirt",
      price: 55,
      total: 110,
    },
  ];

  return (
    <>
      {/* Breadcrumb Begin */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <Link to="/">
                  <FontAwesomeIcon icon={faHome} /> Home
                </Link>
                <span>Shopping cart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Shop Cart Section Begin */}
      <section className="shop-cart spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="shop__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, idx) => (
                      <tr key={idx}>
                        <td className="cart__product__item">
                          <img src={item.img} alt={item.name} />
                          <div className="cart__product__item__title">
                            <h6>{item.name}</h6>
                            <div className="rating">
                              {[...Array(5)].map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} />
                              ))}
                            </div>
                          </div>
                        </td>
                        <td className="cart__price">$ {item.price.toFixed(1)}</td>
                        <td className="cart__quantity">
                          <div className="pro-qty">
                            <input type="number" defaultValue="1" />
                          </div>
                        </td>
                        <td className="cart__total">$ {item.total.toFixed(1)}</td>
                        <td className="cart__close">
                          <FontAwesomeIcon icon={faTimes} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="cart__btn">
                <Link to="/products">Continue Shopping</Link>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="cart__btn update__btn">
                <button type="button">
                  <FontAwesomeIcon icon={faSync} /> Update cart
                </button>
              </div>
            </div>
          </div>

          {/* Discount & Total */}
          <div className="row">
            <div className="col-lg-6">
              <div className="discount__content">
                <h6>Discount codes</h6>
                <form>
                  <input type="text" placeholder="Enter your coupon code" />
                  <button type="submit" className="site-btn">
                    Apply
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-2">
              <div className="cart__total__procced">
                <h6>Cart total</h6>
                <ul>
                  <li>
                    Subtotal <span>$ 750.0</span>
                  </li>
                  <li>
                    Total <span>$ 750.0</span>
                  </li>
                </ul>
                <Link to="/checkout" className="primary-btn">
                  Proceed to checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Shop Cart Section End */}
    </>
  );
}

export default Cart;
