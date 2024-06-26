import { MdOutlineDesignServices } from "react-icons/md";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaMobileAlt } from "react-icons/fa";
import { LuPrinter } from "react-icons/lu";
import { SlSocialInstagram } from "react-icons/sl";
import { FaFigma } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useNotificationService } from "../../hooks";

export const Icon = ({ size, icon }: any) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: "white",
        borderRadius: "100%",
        border: "1px solid #590fb7",
        position: "absolute",
        top: -25,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: size / 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {icon}
      </div>
    </div>
  );
};

export const ServicePage = ({ customRef, simple = false }: any) => {
  const services = [
    {
      name: "Diseño Web/Mobile",
      description:
        "Creación estética y funcionalidad de sitios y aplicaciones para la navegación en línea.",
      icon: <FaMobileAlt />,
    },

    {
      name: "Ilustraciones",
      description:
        "Aquí encontrarás retratos emotivos, escenas vibrantes y adorables dibujos de mascotas. Cada obra es una muestra única de talento y creatividad, diseñada para inspirar y deleitar.",
      icon: <SlSocialInstagram />,
    },

    // {
    //   name: "Community Management",
    //   description:
    //     "Gestión estratégica de la presencia online, interactuando y construyendo relaciones con la audiencia en plataformas sociales.",
    //   icon: <SlSocialInstagram />,
    // },

    {
      name: "Diseño UX/UI",
      description:
        "Mejora de la experiencia del usuario y la interfaz mediante un diseño intuitivo y estéticamente agradable.",
      icon: <FaFigma />,
    },

    {
      name: "Marketing",
      description:
        "Desarrollo y ejecución de estrategias para promocionar productos o servicios y atraer a clientes potenciales.",
      icon: <SiMaterialdesignicons />,
    },

    {
      name: "Diseño gráfico",
      description:
        "Creación visual de contenido atractivo y comunicativo, desde logotipos hasta materiales de marketing.",
      icon: <MdOutlineDesignServices />,
    },

    {
      name: "Armado de CV y Portfolio",
      description:
        "Elaboración efectiva de documentos que destacan habilidades y experiencias, junto con la presentación de trabajos anteriores.",
      icon: <GrDocumentPerformance />,
    },

    {
      name: "Impresiones",
      description:
        "Producción física de materiales gráficos, desde tarjetas de presentación hasta carteles, para promover una marca o evento.",
      icon: <LuPrinter />,
    },
  ];

  const { buyIllustrations } = useNotificationService();

  const navigate = useNavigate();

  const handleClick = (service: string) => {
    switch (service) {
      // case "Impresiones":
      //   return navigate("/prints");
      default:
        return navigate("/contact", { state: { service } });
    }
  };

  return (
    <div>
      {simple ? (
        <div>
          <h1 ref={customRef}>Nuestros servicios</h1>
          <h4>
            Aquí encontrarás variedad de servicios que ofrecemos para imprimir,
            desde tus recuerdos en polaroid hasta las piezas graficas para tu
            negocio.
          </h4>
        </div>
      ) : (
        <div className="card-fixed slide-right">
          <h1>Nuestros servicios</h1>
          <h4>
            Aquí encontrarás variedad de servicios que ofrecemos para imprimir,
            desde tus recuerdos en polaroid hasta las piezas graficas para tu
            negocio.
          </h4>
        </div>
      )}
      <div className="section-fixed wrap-s middle">
        {services.map((service) => (
          <div
            className="service-card"
            key={service.name}
            onClick={
              service.name === "Ilustraciones"
                ? () => buyIllustrations()
                : () => handleClick(service.name)
            }
          >
            <Icon size={50} icon={service.icon} />
            <div className="service-content">
              {service.name}
              <span>{service.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
