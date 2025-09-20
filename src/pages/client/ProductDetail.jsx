import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faStar,
  faBagShopping,
  faHeart,
  faArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductDetail() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      {/* Breadcrumb Begin */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="/">
                  <FontAwesomeIcon icon={faHome} /> Home
                </a>
                <a href="#">Women’s</a>
                <span>Essential structured blazer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}

      {/* Product Details Section Begin */}
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            {/* Left Images */}
            <div className="col-lg-6">
              <div className="product__details__pic">
                <Swiper spaceBetween={10} slidesPerView={1}>
                  {[1, 2, 3, 4].map((i) => (
                    <SwiperSlide key={i}>
                      <img
                        src={`img/product/details/product-${i}.jpg`}
                        alt={`product-${i}`}
                        className="product__big__img"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="product__details__pic__left d-flex mt-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src={`img/product/details/thumb-${i}.jpg`}
                      alt={`thumb-${i}`}
                      style={{
                        width: "80px",
                        height: "80px",
                        marginRight: "8px",
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="col-lg-6">
              <div className="product__details__text">
                <h3>
                  Essential structured blazer{" "}
                  <span>Brand: SKMEIMore Men Watches from SKMEI</span>
                </h3>
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} />
                  ))}
                  <span>(138 reviews)</span>
                </div>
                <div className="product__details__price">
                  $ 75.0 <span>$ 83.0</span>
                </div>
                <p>
                  Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret
                  fugit, sed quia consequuntur magni lores eos qui ratione
                  voluptatem sequi nesciunt.
                </p>
                <div className="product__details__button">
                  <div className="quantity">
                    <span>Quantity:</span>
                    <div className="pro-qty">
                      <input type="number" defaultValue={1} />
                    </div>
                  </div>
                  <button className="cart-btn">
                    <FontAwesomeIcon icon={faBagShopping} /> Add to cart
                  </button>
                  <ul>
                    <li>
                      <button>
                        <FontAwesomeIcon icon={faHeart} />
                      </button>
                    </li>
                    <li>
                      <button>
                        <FontAwesomeIcon icon={faArrowsAlt} />
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Widget */}
                <div className="product__details__widget">
                  <ul>
                    <li>
                      <span>Availability:</span>
                      <div className="stock__checkbox">
                        <label htmlFor="stockin">
                          In Stock
                          <input type="checkbox" id="stockin" defaultChecked />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                    </li>
                    <li>
                      <span>Available color:</span>
                      <div className="color__checkbox">
                        {["red", "black", "grey"].map((c, i) => (
                          <label key={c} htmlFor={c}>
                            <input
                              type="radio"
                              name="color__radio"
                              id={c}
                              defaultChecked={i === 0}
                            />
                            <span className={`checkmark ${c}-bg`}></span>
                          </label>
                        ))}
                      </div>
                    </li>
                    <li>
                      <span>Available size:</span>
                      <div className="size__btn">
                        {["xs", "s", "m", "l"].map((s, i) => (
                          <label
                            key={s}
                            htmlFor={`${s}-btn`}
                            className={i === 0 ? "active" : ""}
                          >
                            <input type="radio" id={`${s}-btn`} name="size" />
                            {s}
                          </label>
                        ))}
                      </div>
                    </li>
                    <li>
                      <span>Promotions:</span>
                      <p>Free shipping</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  {["Description", "Specification", "Reviews (2)"].map(
                    (tab, i) => (
                      <li className="nav-item" key={i}>
                        <button
                          className={`nav-link ${
                            activeTab === i + 1 ? "active" : ""
                          }`}
                          onClick={() => setActiveTab(i + 1)}
                        >
                          {tab}
                        </button>
                      </li>
                    )
                  )}
                </ul>
                <div className="tab-content">
                  {activeTab === 1 && (
                    <div className="tab-pane active">
                      <h6>Description</h6>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut loret fugit...
                      </p>
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div className="tab-pane active">
                      <h6>Specification</h6>
                      <p>Some product specifications here...</p>
                    </div>
                  )}
                  {activeTab === 3 && (
                    <div className="tab-pane active">
                      <h6>Reviews (2)</h6>
                      <p>Customer reviews will be displayed here...</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Related products */}
          <div className="row mt-5">
            <div className="col-lg-12 text-center">
              <div className="related__title">
                <h5>RELATED PRODUCTS</h5>
              </div>
            </div>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="col-lg-3 col-md-4 col-sm-6">
                <div className="product__item">
                  <div
                    className="product__item__pic"
                    style={{
                      backgroundImage: `url(img/product/related/rp-${i}.jpg)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      height: "250px",
                    }}
                  >
                    {i === 1 && <div className="label new">New</div>}
                    {i === 3 && <div className="label stockout">Out of stock</div>}
                    <ul className="product__hover">
                      <li>
                        <a href={`img/product/related/rp-${i}.jpg`}>
                          <FontAwesomeIcon icon={faArrowsAlt} />
                        </a>
                      </li>
                      <li>
                        <button>
                          <FontAwesomeIcon icon={faHeart} />
                        </button>
                      </li>
                      <li>
                        <button>
                          <FontAwesomeIcon icon={faBagShopping} />
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <h6>
                      <a href="#">Product {i}</a>
                    </h6>
                    <div className="rating">
                      {[...Array(5)].map((_, j) => (
                        <FontAwesomeIcon key={j} icon={faStar} />
                      ))}
                    </div>
                    <div className="product__price">
                      $ {(49 + i * 10).toFixed(1)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Product Details Section End */}
    </>
  );
}

export default ProductDetail;
