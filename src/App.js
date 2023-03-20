import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import ImageSlider from "./Component/ImageSlider";
import Navbar from "./Component/Navbar";
import Offers from "./Component/Offers";
import Plan from "./Component/Plan";
import Rooms from "./Component/Rooms";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
