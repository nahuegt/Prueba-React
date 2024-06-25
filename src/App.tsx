import "./App.css";
import Header from "./components/Header/Index";
import PrimerApartado from "./components/Primer Apartado/PrimerApartado";
import SegundoApartado from "./components/Segundo Apartado/SegundoApartado";
import TercerApartado from "./components/Tercer Apartado/TercerApartado";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
      <PrimerApartado
        imgSrc="src/img/01 principal.jpg"
        imgAlt="Imagen principal"
        title="Enhance Your Driving Experience"
        description="Discover the best car detailing services in town."
        quoteLink="/quote"
        quoteText="Request a Quote"
        appointmentLink="/appointment"
        appointmentText="Book Now"
      />
    </div>
      <SegundoApartado />
      <TercerApartado />
    </div>
  );
}

export default App;
