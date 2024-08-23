import Navbar from '../../components/navbar';
import HeroPage from '../../Pages/HomePage/HeroPage';
import ClientsPage from './clientsPage';

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <HeroPage />
        <ClientsPage />
    </div>
  )
}

export default HomePage;