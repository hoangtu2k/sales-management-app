import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Slider,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ProductList() {
  const [price, setPrice] = React.useState([20, 100]);

  const handlePriceChange = (_, newValue) => {
    setPrice(newValue);
  };

  const categories = ["Women", "Men", "Kids", "Accessories", "Cosmetic"];
  const sizes = ["xxs", "xs", "xs-s", "s", "m", "m-l", "l", "xl"];
  const colors = [
    "Blacks",
    "Whites",
    "Reds",
    "Greys",
    "Blues",
    "Beige Tones",
    "Greens",
    "Yellows",
  ];

  const products = [
    { img: "shop-1.jpg", name: "Furry hooded parka", price: 59, label: "New" },
    { img: "shop-2.jpg", name: "Flowy striped skirt", price: 49 },
    { img: "shop-3.jpg", name: "Croc-effect bag", price: 59 },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-option">
        <div className="container">
          <div className="breadcrumb__links">
            <a href="/">
              <i className="fa fa-home"></i> Home
            </a>
            <span>Shop</span>
          </div>
        </div>
      </div>

      {/* Shop Section */}
      <section className="shop spad">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-lg-3 col-md-3">
              <div className="shop__sidebar">
                {/* Categories */}
                <div className="sidebar__categories">
                  <div className="section-title">
                    <h4>Categories</h4>
                  </div>
                  {categories.map((cat, idx) => (
                    <Accordion key={idx} defaultExpanded={idx === 0}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{cat}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <ul>
                          {["Coats", "Jackets", "Dresses", "Shirts", "T-shirts", "Jeans"].map(
                            (item, i) => (
                              <li key={i}>
                                <a href="#">{item}</a>
                              </li>
                            )
                          )}
                        </ul>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </div>

                {/* Price Filter */}
                <div className="sidebar__filter mt-4">
                  <div className="section-title">
                    <h4>Shop by price</h4>
                  </div>
                  <Box px={2}>
                    <Slider
                      value={price}
                      onChange={handlePriceChange}
                      valueLabelDisplay="auto"
                      min={0}
                      max={200}
                    />
                    <Typography variant="body2">
                      Price: ${price[0]} - ${price[1]}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      sx={{ mt: 1 }}
                      fullWidth
                    >
                      Filter
                    </Button>
                  </Box>
                </div>

                {/* Sizes */}
                <div className="sidebar__sizes mt-4">
                  <div className="section-title">
                    <h4>Shop by size</h4>
                  </div>
                  <FormGroup>
                    {sizes.map((size) => (
                      <FormControlLabel
                        key={size}
                        control={<Checkbox size="small" />}
                        label={size.toUpperCase()}
                      />
                    ))}
                  </FormGroup>
                </div>

                {/* Colors */}
                <div className="sidebar__color mt-4">
                  <div className="section-title">
                    <h4>Shop by color</h4>
                  </div>
                  <FormGroup>
                    {colors.map((color) => (
                      <FormControlLabel
                        key={color}
                        control={<Checkbox size="small" />}
                        label={color}
                      />
                    ))}
                  </FormGroup>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="col-lg-9 col-md-9">
              <div className="row">
                {products.map((p, i) => (
                  <div key={i} className="col-lg-4 col-md-6 mb-4">
                    <div className={`product__item ${p.label === "Sale" ? "sale" : ""}`}>
                      <div
                        className="product__item__pic set-bg"
                        style={{ backgroundImage: `url('img/shop/${p.img}')` }}
                      >
                        {p.label && (
                          <div
                            className={`label ${
                              p.label === "Out Of Stock"
                                ? "stockout stockblue"
                                : p.label.toLowerCase()
                            }`}
                          >
                            {p.label}
                          </div>
                        )}
                        <ul className="product__hover">
                          <li>
                            <a href={`img/shop/${p.img}`} className="image-popup">
                              <span className="arrow_expand"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="icon_heart_alt"></span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span className="icon_bag_alt"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="product__item__text">
                        <h6>
                          <a href="#">{p.name}</a>
                        </h6>
                        <div className="rating">
                          {[...Array(5)].map((_, idx) => (
                            <i key={idx} className="fa fa-star"></i>
                          ))}
                        </div>
                        <div className="product__price">
                          ${p.price}.0{" "}
                          {p.oldPrice && <span>${p.oldPrice}.0</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Pagination */}
                <div className="col-lg-12 text-center">
                  <div className="pagination__option">
                    <a href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
