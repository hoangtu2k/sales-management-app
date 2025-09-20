import { Button } from "@mui/material";

export default function Discount() {
  return (
    <section className="discount">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="discount__pic">
              <img src="img/discount.jpg" alt="discount" />
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="discount__text">
              <div className="discount__text__title">
                <span>Discount</span>
                <h2>Summer 2025</h2>
                <h5>
                  <span>Sale</span> 50%
                </h5>
              </div>
              <Button variant="contained" color="error">
                Shop now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
