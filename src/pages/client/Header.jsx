import { Link } from "react-router-dom";

// Import MUI icons
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <>
      {/* Offcanvas Menu Begin */}
      <div className="offcanvas-menu-overlay"></div>
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__close">+</div>
        <ul className="offcanvas__widget">
          <li><SearchIcon /></li>
          <li>
            <Link to="/wishlist">
              <FavoriteBorderIcon />
              <div className="tip">2</div>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <ShoppingBagIcon />
              <div className="tip">2</div>
            </Link>
          </li>
        </ul>
        <div className="offcanvas__logo">
          <Link to="/">
            <img src="/img/logo.png" alt="logo" />
          </Link>
        </div>
        <div id="mobile-menu-wrap"></div>
        <div className="offcanvas__auth">
          <Link to="/account/login">Login</Link>
          <Link to="/account/register">Register</Link>
        </div>
      </div>
      {/* Offcanvas Menu End */}

      {/* Header Section Begin */}
      <header className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3 col-lg-2">
              <div className="header__logo">
                <Link to="/">
                  <img src="/img/logo.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7">
              <nav className="header__menu">
                <ul>
                  <li className="active"><Link to="/">Home</Link></li>
                  <li><Link to="/products?category=women">Women’s</Link></li>
                  <li><Link to="/products?category=men">Men’s</Link></li>
                  <li><Link to="/products">Shop</Link></li>
                  <li>
                    <span>Pages</span>
                    <ul className="dropdown">
                      <li><Link to="/blog/1">Blog Details</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </nav>
            </div>
            <div className="col-lg-3">
              <div className="header__right">
                <div className="header__right__auth">
                  <Link to="/account/login">Login</Link>
                  <Link to="/account/register">Register</Link>
                </div>
                <ul className="header__right__widget">
                  <li><SearchIcon /></li>
                  <li>
                    <Link to="/wishlist">
                      <FavoriteBorderIcon />
                      <div className="tip">2</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <ShoppingBagIcon />
                      <div className="tip">2</div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <MenuIcon />
          </div>
        </div>
      </header>
      {/* Header Section End */}
    </>
  );
}
