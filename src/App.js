// import logo from './logo.svg';
import './App.css';
import './assets/css/styles.css';
import About from './components/about-us/About';
import Banner from './components/banner/Banner';
import FeaturedTour from './components/featured-tour/FeaturedTour';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Services from './components/services/Services';

function App() {
  return (
    <div className="App">
     <Header />
     <Banner />
     <About  />
     <Services />
     <FeaturedTour />
     <Footer />
    </div>
  );
}

export default App;
