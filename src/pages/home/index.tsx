import { Divider, SimpleCard, TestimonyCard } from "../../components";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import {
  MdOutlineEmail,
  MdWhatsapp,
  MdOutlineLocationOn,
} from "react-icons/md";

import { Map, Marker } from "@vis.gl/react-google-maps";

import arrow from "../../assets/down.png";
import logoweb from "../../assets/logo.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { CONTACTS } from "../../utils";
import { Banner } from "../../components";
import { ServicePage } from "../services";
import { useRef } from "react";

export const HomePage = () => {
  const position = { lat: -34.4723, lng: -58.5144 };

  // const handleClick = () => {
  //   ref.current?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };

  const customRef = useRef(null);

  const handleScroll = () =>
    customRef?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div style={{ width: "100%" }}>
      <div className="section-banner">
        <Banner>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img
              style={{
                padding: "0 0 20px 0",
                alignSelf: "center",
                margin: "auto",
                opacity: 0.5,
              }}
              src={logoweb}
              width={50}
              alt="creatif logo"
            />
          </div>
          <h1 className="slide-right-1">Construimos marcas </h1>
          <h1 className="slide-right-2"> Creamos conexiones </h1>
          <h1 className="slide-right-3"> Impulsamos resultados</h1>
          <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <img
              style={{
                alignSelf: "center",
                margin: "auto",
                cursor: "pointer",
                position: "absolute",
                bottom: 50,
                zIndex: 999,
              }}
              src={arrow}
              width={50}
              alt="creatif logo"
              onClick={handleScroll}
            />
          </div>
        </Banner>
        {/* <div className="card-fixed slide-right">
          
        </div> */}
        {/* <GoDownButton onClick={handleClick} /> */}
      </div>

      {/* <div className="section middle">
        <h1 style={{ textTransform: "uppercase", fontWeight: 700 }}>
          <span style={{ color: "black" }}>impulsa</span> tu negocio
        </h1>
      </div>

      <div className="section horizontal">
        <div className="ad-wrapper zoomtext home-card text-left">
          <h3>Descubre el potencial digital hoy</h3>
          <span>
            Explora tu futuro digital ahora mismo. ¡Descubre nuevas
            oportunidades y desbloquea tu potencial en el mundo digital de hoy!
          </span>
        </div>

        <div className="ad-wrapper zoomtext home-card text-left">
          <h3>Eleva tu presencia web ahora</h3>
          <span>
            Potencia tu presencia en línea hoy mismo. ¡Eleva tu marca y destaca
            en el mundo digital con nuestra ayuda experta!
          </span>
        </div>
      </div>
      <div className="section horizontal">
        <div className="ad-wrapper zoomtext home-card text-left">
          <h3>Marca la diferencia con material impreso</h3>
          <span>
            Diferénciate con impacto visual. Descubre cómo nuestro material
            impreso puede destacar tu marca y dejar una huella duradera.
          </span>
        </div>

        <div className="ad-wrapper zoomtext home-card text-left">
          <h3>Descubre nuestro toque creativo</h3>
          <span>
            Explora nuestra creatividad sin límites. Descubre cómo nuestro toque
            único puede llevar tus proyectos a un nivel superior.
          </span>
        </div>
      </div> */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="content">
          <ServicePage customRef={customRef} simple />

          <Divider />

          <div className="section">
            <div className="cardGroup">
              <SimpleCard>
                <div className="cardTitle">+1000</div>
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
          <div className="section swiper" style={{ marginTop: "50px" }}>
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
                        "Recomendaría a Creatif a cualquiera que busque
                        servicios de diseño web de alta calidad!"
                      </p>
                      <span className="title left purple">
                        - Antonella Endrizzi
                      </span>
                    </TestimonyCard>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={isActive ? "section" : "disable"}>
                    <TestimonyCard>
                      <p>
                        "Hermosos trabajos, siempre dispuestos a todo! Me
                        encanto la agenda pixar!"
                      </p>
                      <span className="title left purple">
                        - Antonella Tello
                      </span>
                    </TestimonyCard>
                  </div>
                )}
              </SwiperSlide>
              <SwiperSlide>
                {({ isActive }) => (
                  <div className={isActive ? "section" : "disable"}>
                    <TestimonyCard>
                      <p>
                        "Increíble calidad y servicio! Creatif superó mis
                        expectativas. Muy recomendado."
                      </p>
                      <span className="title left purple">
                        - Bruno Alexander Tobar León
                      </span>
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
      </div>
    </div>
  );
};
