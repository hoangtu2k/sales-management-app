import Header from '@pages/client/Header';
import Footer from '@pages/client/Footer';
import { Outlet } from 'react-router-dom';
import "@styles/client.css";

export default function HomeLayout() {
  
  return (
    <div className="home-container">
      <Header />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}
