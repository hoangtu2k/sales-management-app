import { Box, Typography } from "@mui/material";

export default function Trend() {
  const sections = [
    {
      title: "Hot Trend",
      products: [
        { id: 1, name: "T-Shirt Basic", price: 29.0, img: "/img/trend/bs-1.jpg" },
        { id: 2, name: "Denim Jacket", price: 79.0, img: "/img/trend/bs-2.jpg" },
        { id: 3, name: "Sneakers White", price: 59.0, img: "/img/trend/bs-3.jpg" },
      ],
    },
    {
      title: "Best Seller",
      products: [
        { id: 4, name: "Leather Bag", price: 120.0, img: "/img/trend/f-1.jpg" },
        { id: 5, name: "Classic Watch", price: 199.0, img: "/img/trend/f-2.jpg" },
        { id: 6, name: "Formal Shirt", price: 49.0, img: "/img/trend/f-3.jpg" },
      ],
    },
    {
      title: "Feature",
      products: [
        { id: 7, name: "Hoodie Grey", price: 39.0, img: "/img/trend/ht-1.jpg" },
        { id: 8, name: "Backpack Black", price: 89.0, img: "/img/trend/ht-2.jpg" },
        { id: 9, name: "Running Shoes", price: 99.0, img: "/img/trend/ht-3.jpg" },
      ],
    },
  ];

  return (
    <section className="trend spad">
      <div className="container">
        <div className="row">
          {sections.map((section, idx) => (
            <div key={idx} className="col-lg-4 col-md-4 col-sm-6">
              <div className="trend__content">
                <div className="section-title">
                  <h4>{section.title}</h4>
                </div>

                {section.products.map((product) => (
                  <Box
                    key={product.id}
                    className="trend__item"
                    display="flex"
                    alignItems="center"
                    mb={2}
                  >
                    <div
                      className="trend__item__pic"
                      style={{
                        backgroundImage: `url(${product.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100px",
                        height: "100px",
                        borderRadius: "8px",
                        flexShrink: 0,
                      }}
                    ></div>

                    <Box className="trend__item__text" ml={2}>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {product.name}
                      </Typography>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa fa-star"></i>
                        ))}
                      </div>
                      <Typography variant="body2" color="text.secondary">
                        $ {product.price.toFixed(2)}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
