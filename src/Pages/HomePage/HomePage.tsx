import Navbar from '../../components/navbar';
import HeroPage from '../../Pages/HomePage/HeroPage';
import ClientsPage from './clientsPage';
import FaqPage from './FaqPage';
import Footer from '../../components/footer';

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HeroPage />
        <ClientsPage />
        <FaqPage />
        <Footer />
    </div>
  )
}

export default HomePage;