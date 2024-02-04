import { Divider, SimpleCard, TestimonyCard } from "../../components";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  MdOutlineEmail,
  MdWhatsapp,
  MdOutlineLocationOn,
} from "react-icons/md";

import { Map, Marker } from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";

import cloud from "../../assets/images/cloud.png";
import growth from "../../assets/images/growth.png";
import web from "../../assets/images/web.png";
import prints from "../../assets/images/prints.png";
import logoweb from "../../assets/images/logoweb.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { CONTACTS } from "../../utils";

export const HomePage = () => {
  const position = { lat: -34.4723, lng: -58.5144 };
  const [count, setCount] = useState(0);

  useEffect(() => {
    let counts = setInterval(updated, 50);
    if (count > 1000) {
      clearInterval(counts);
      setCount(1000);
    }
    function updated() {
      setCount((prev) => prev + 1);
    }
  }, [count]);

  const ref = useRef<any>(null);

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };

  return (
    <div>
      <div className="section">
        <div className="card-fixed slide-right">
          <h1>
            Construimos marcas, creamos conexiones, impulsamos resultados.
          </h1>
        </div>
        {/* <GoDownButton onClick={handleClick} /> */}
      </div>

      <div className="section space" ref={ref}>
        <div className="ad-wrapper right zoomtext">
          <img alt="image home creatif ads" src={growth} />
          <h1>impulsa tu negocio</h1>
        </div>
      </div>
      <div className="section">
        <div className="ad-wrapper zoomtext">
          <h1>Descubre el potencial digital hoy</h1>
          <img alt="image home creatif ads" src={cloud} />
        </div>
      </div>
      <div className="section">
        <div className="ad-wrapper right zoomtext">
          <img alt="image home creatif ads" src={web} />
          <h1>Eleva tu presencia web ahora</h1>
        </div>
      </div>
      <div className="section">
        <div className="ad-wrapper zoomtext">
          <h1>Marca la diferencia con material impreso</h1>
          <img alt="image home creatif ads" src={prints} />
        </div>
      </div>
      <div className="section">
        <div className="ad-wrapper right zoomtext">
          <img alt="image home creatif ads" src={logoweb} />
          <h1>Descubre nuestro toque creativo</h1>
        </div>
      </div>

      <Divider />

      <div className="section">
        <div className="cardGroup">
          <SimpleCard>
            <div className="cardTitle">+{count}</div>
            <span className="title bold">Usuarios</span>
          </SimpleCard>

          <SimpleCard>
            <div className="rate">
              4.5 <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </div>
            <span className="title bold">Reseñas</span>
          </SimpleCard>
          <SimpleCard>
            <div className="cardTitle">+10</div>
            <span className="title bold">Servicios</span>
          </SimpleCard>
        </div>
      </div>
      <div className="section swiper">
        <h1>Testimonios</h1>

        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          effect="fade"
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          loop
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            {({ isActive }) => (
              <div className={isActive ? "section" : "disable"}>
                <TestimonyCard>
                  <p>
                    "Creatif hizo un trabajo excepcional al diseñar nuestro
                    sitio web. Capturaron perfectamente nuestra visión y la
                    convirtieron en una experiencia en línea cautivadora. Su
                    enfoque creativo y atención al detalle realmente marcaron la
                    diferencia. ¡Recomendaría a Creatif a cualquiera que busque
                    servicios de diseño web de alta calidad!"
                  </p>
                  <span className="title left purple">- Candela de Chaga</span>
                </TestimonyCard>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div className={isActive ? "section" : "disable"}>
                <TestimonyCard>
                  <p>
                    "Estamos encantados con los servicios de marketing digital
                    de Creatif. Nos ayudaron a desarrollar una estrategia
                    efectiva que aumentó significativamente nuestra presencia en
                    línea y generó un mayor tráfico a nuestro sitio web. Su
                    equipo experto en marketing realmente comprende las últimas
                    tendencias y sabe cómo destacar en un mercado competitivo.
                    ¡Gracias a Creatif, estamos viendo resultados positivos!"
                  </p>
                  <span className="title left purple">- Candela de Chaga</span>
                </TestimonyCard>
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div className={isActive ? "section" : "disable"}>
                <TestimonyCard>
                  <p>
                    "Creatif ha elevado nuestra presencia visual con sus
                    servicios de impresión de alta calidad. Desde banners
                    vibrantes que capturan la esencia de nuestra marca hasta
                    cuadros y polaroids que han transformado nuestro espacio,
                    Creatif ha demostrado ser un socio excepcional en el ámbito
                    de la impresión. La atención meticulosa al detalle y la
                    entrega puntual de cada proyecto nos han dejado
                    impresionados. Si buscas servicios de impresión que
                    realmente destaquen, Creatif es la elección acertada.
                    Estamos agradecidos por la creatividad y profesionalismo que
                    han aportado a nuestra empresa. Sin duda, recomendamos sus
                    servicios de impresión a cualquier empresa que busque
                    destacar visualmente en el mercado."
                  </p>
                  <span className="title left purple">- Candela de Chaga</span>
                </TestimonyCard>
              </div>
            )}
          </SwiperSlide>
        </Swiper>
      </div>

      <Divider />

      <div className="section">
        <h1>Donde encontrarnos</h1>
        <div className="horizontal wrap">
          <div className="border w-50 h-100">
            <Map center={position} zoom={12}>
              <Marker position={position} />
            </Map>
          </div>
          <ul className="container">
            <div style={{ padding: "20px 0" }}>
              <li
                style={{
                  margin: "5px 0",
                  listStyle: "none",
                }}
              >
                <MdOutlineLocationOn /> Buenos aires, Argentina
              </li>
              <li className="title purple">{CONTACTS.address}</li>
            </div>

            <div style={{ padding: "20px 0" }}>
              <li
                style={{
                  margin: "5px 0",
                  listStyle: "none",
                }}
              >
                <MdOutlineEmail /> Email
              </li>
              <li className="title purple">{CONTACTS.mail}</li>
            </div>

            <div style={{ padding: "20px 0" }}>
              <li
                style={{
                  margin: "5px 0",
                  listStyle: "none",
                }}
              >
                <MdWhatsapp /> Whatsapp
              </li>
              <li className="title purple">{CONTACTS.phone}</li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
