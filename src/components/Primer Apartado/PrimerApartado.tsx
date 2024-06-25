import "./PrimerApartado.css";

const PrimerApartado = ({
  imgSrc = "/src/img/01 principal.jpg",
  imgAlt = "Imagen Principal",
  title = "Elevate Your Ride with Our Premium Car Detailing",
  description = "Experience the ultimate in car care with our expert detailing services. Restore your vehicle's shine and protect its value.",
  quoteLink = "#",
  quoteText = "Get a Quote",
  appointmentLink = "#",
  appointmentText = "Schedule Appointment"
}) => {
  return (
    <section id="PrimerApartado">
      <div id="ContenidoPrincipal">
        <div id="ImgPrincipal">
          <img src={imgSrc} alt={imgAlt} />
        </div>
        <div id="TextoPrincipal">
          <h1>{title}</h1>
          <p>{description}</p>
          <a href={quoteLink} className="boton-1">
            {quoteText}
          </a>
          <a href={appointmentLink} className="boton-2">
            {appointmentText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PrimerApartado;

