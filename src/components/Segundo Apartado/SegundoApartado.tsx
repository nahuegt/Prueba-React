import "./SegundoApartado.css";

const services = [
  {
    img: "https://cdn.hugeicons.com/icons/lift-truck-stroke-rounded.svg",
    title: "Exterior Detailing",
    description:
      "Restore the shine and protect your car's exterior with our premium wash and wax services.",
  },
  {
    img: "https://cdn.hugeicons.com/icons/fast-wind-stroke-rounded.svg",
    title: "Interior Detailing",
    description:
      "Refresh and revive your car's interior with our deep cleaning and conditioning services.",
  },
  {
    img: "https://cdn.hugeicons.com/icons/paint-brush-04-stroke-rounded.svg",
    title: "Paint Correction",
    description:
      "Restore your car's paint to its original luster with our expert paint correction services.",
  },
  {
    img: "https://cdn.hugeicons.com/icons/shopping-cart-02-stroke-rounded.svg",
    title: "Pricing",
    description:
      "Explore our transparent pricing options to find the perfect detailing package for your vehicle.",
  },
  {
    img: "https://cdn.hugeicons.com/icons/image-add-02-stroke-rounded.svg",
    title: "Before & After",
    description:
      "See the remarkable transformation of our detailing services with our before and after gallery.",
  },
  {
    img: "https://cdn.hugeicons.com/icons/zoom-in-area-stroke-rounded.svg",
    title: "Our Detailing Services",
    description:
      "Discover the comprehensive range of detailing services we offer to keep your vehicle looking its best.",
  },
];

const SegundoApartado = () => {
  return (
    <section className="SegundoApartado" id="Servicios">
      <div className="ContenidoSecundario">
        {services.map((service, index) => (
          <div className="Columna" key={index}>
            <img src={service.img} alt={service.title} width="35" height="35" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SegundoApartado;
