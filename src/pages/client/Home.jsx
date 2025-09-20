import Categories from "@pages/client/components/Categories";
import ProductList from "@pages/client/components/ProductList";
import Banner from "@pages/client/components/Banner";
import Trend from "@pages/client/components/Trend";
import Discount from "@pages/client/components/Discount";
import Services from "@pages/client/components/Services";

function Home() {
  return (
    <>
      <Categories />
      <ProductList />
      <Banner />
      <Trend />
      <Discount />
      <Services />
    </>
  );
}

export default Home;
