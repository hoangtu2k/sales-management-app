import { Button } from "@mui/material";

export default function Categories() {
  const categories = [
    { img: "img/categories/category-2.jpg", title: "Men’s fashion", items: 358 },
    { img: "img/categories/category-3.jpg", title: "Kid’s fashion", items: 273 },
    { img: "img/categories/category-4.jpg", title: "Cosmetics", items: 159 },
    { img: "img/categories/category-5.jpg", title: "Accessories", items: 792 },
  ];

  return (
    <section className="categories">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div
              className="categories__item categories__large__item"
              style={{ backgroundImage: "url('img/categories/category-1.jpg')" }}
            >
              <div className="categories__text">
                <h1>Women’s fashion</h1>
                <p>
                  Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt labore et dolore magna aliqua.
                </p>
                <Button variant="contained" color="primary">
                  Shop now
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              {categories.map((cat, i) => (
                <div key={i} className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item"
                    style={{ backgroundImage: `url('${cat.img}')` }}
                  >
                    <div className="categories__text">
                      <h4>{cat.title}</h4>
                      <p>{cat.items} items</p>
                      <Button variant="outlined" size="small">
                        Shop now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
