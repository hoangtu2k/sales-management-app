import "@styles/client.css";
import { Link } from "react-router-dom";

// Material UI Icons
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  return (
    <>
      {/* Instagram Begin */}
      <div className="instagram">
        <div className="container-fluid">
          <div className="row">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="col-lg-2 col-md-4 col-sm-4 p-0">
                <div
                  className="instagram__item set-bg"
                  style={{
                    backgroundImage: `url(/img/instagram/insta-${num}.jpg)`,
                  }}
                >
                  <div className="instagram__text">
                    <InstagramIcon />
                    <a href="https://www.instagram.com/ashion_shop" target="_blank" rel="noreferrer">
                      @ashion_shop
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Instagram End */}

      {/* Footer Section Begin */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            {/* Logo + About */}
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="footer__about">
                <div className="footer__logo">
                  <Link to="/">
                    <img src="/img/logo.png" alt="logo" />
                  </Link>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt cilisis.
                </p>
                <div className="footer__payment">
                  {[1, 2, 3, 4, 5].map((num) => (
                    <a key={num} href="#">
                      <img
                        src={`/img/payment/payment-${num}.png`}
                        alt={`payment-${num}`}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-3 col-sm-5">
              <div className="footer__widget">
                <h6>Quick links</h6>
                <ul>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/blogs">Blogs</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                </ul>
              </div>
            </div>

            {/* Account */}
            <div className="col-lg-2 col-md-3 col-sm-4">
              <div className="footer__widget">
                <h6>Account</h6>
                <ul>
                  <li><Link to="/account">My Account</Link></li>
                  <li><Link to="/orders">Orders Tracking</Link></li>
                  <li><Link to="/checkout">Checkout</Link></li>
                  <li><Link to="/wishlist">Wishlist</Link></li>
                </ul>
              </div>
            </div>

            {/* Newsletter */}
            <div className="col-lg-4 col-md-8 col-sm-8">
              <div className="footer__newslatter">
                <h6>NEWSLETTER</h6>
                <form action="#">
                  <input type="text" placeholder="Email" />
                  <button type="submit" className="site-btn">
                    Subscribe
                  </button>
                </form>
                <div className="footer__social">
                  <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <FacebookIcon />
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer">
                    <TwitterIcon />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <YouTubeIcon />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <InstagramIcon />
                  </a>
                  <a href="https://pinterest.com" target="_blank" rel="noreferrer">
                    <PinterestIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__copyright__text">
                <p>
                  Copyright &copy; {new Date().getFullYear()} All rights reserved
                  | Made with <FavoriteIcon fontSize="small" color="error" /> by{" "}
                  <a href="https://colorlib.com" target="_blank" rel="noreferrer">
                    Colorlib
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer Section End */}
    </>
  );
}
