import { Button } from "@mui/material";

export default function ProductList() {
  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <ul className="filter__controls">
              <li className="active">Best Sellers</li>
              <li>New Arrivals</li>
              <li>Hot Sales</li>
            </ul>
          </div>
        </div>
        <div className="row product__filter">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage: `url('img/product/product-${num}.jpg')`,
                  }}
                >
                  <span className="label">New</span>
                  <ul className="product__hover">
                    <li>
                      <a href="#">
                        <img src="img/icon/heart.png" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/compare.png" alt="" />{" "}
                        <span>Compare</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="img/icon/search.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>Product {num}</h6>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    fullWidth
                    sx={{ mt: 1 }}
                  >
                    + Add To Cart
                  </Button>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fa fa-star"></i>
                    ))}
                  </div>
                  <h5>$ {50 + num * 10}.00</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
