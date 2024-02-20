import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "sonner";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { useLocation } from "react-router-dom";

type Inputs = {
  user_name: string;
  user_email: string;
  user_service: string;
  message: string;
};

export const ContactPage = () => {
  const { state } = useLocation();

  const [disabled, setDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (
      data.user_name === "" ||
      data.user_email === "" ||
      data.user_service === "" ||
      data.message === ""
    ) {
      toast.error("Completá los campos vacíos");
      return;
    }
    setIsLoading(true);
    setDisabled(true);
    emailjs
      .send("service_f7eppin", "template_vm1115j", data, "pq28DoAmviFtOgiYB")
      .then(() => {
        toast.success("Mensaje enviado");
      })
      .catch(() => {
        toast.error("Error al enviar mensaje");
      })
      .finally(() => {
        setIsLoading(false);
        setDisabled(false);
      });
  };

  const { handleSubmit, register } = useForm<Inputs>();

  return (
    <div>
      <Toaster richColors />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card-fixed slide-right"
      >
        <h1>Únete a nosotros en este viaje creativo</h1>
        <h4>
          Ya sea que estés buscando dar vida a una idea, mejorar tu presencia en
          línea o llevar tu marca al siguiente nivel, en Creatif estamos listos
          para enfrentar cualquier desafío.
        </h4>
        <div className="formGroup">
          <label>Nombre</label>
          <input
            type="text"
            placeholder="Tu nombre.."
            {...register("user_name")}
          />

          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="Tu email.."
            {...register("user_email")}
          />
        </div>

        <div className="formGroup">
          <label>Servicio</label>
          <select
            id="service"
            defaultValue={state?.service ?? ""}
            {...register("user_service")}
          >
            <option value="" disabled>
              Selecciona un servicio...
            </option>
            <option value="Diseño Web/Mobile">Diseño Web/Mobile</option>
            <option value="Community Management">Community Management</option>
            <option value="Diseño UX/UI">Diseño UX/UI</option>
            <option value="Marketing">Marketing</option>
            <option value="Diseño gráfico">Diseño gráfico</option>
            <option value="Armado de CV y Portfolio">
              Armado de CV y Portfolio
            </option>
            <option value="Impresiones">Impresiones</option>
          </select>
        </div>

        <div className="formGroup">
          <label>Descripción</label>
          <textarea {...register("message")} />
        </div>

        {/* <input type="submit" value="Submit" /> */}
        <button disabled={isLoading || disabled} type="submit">
          {isLoading ? <BeatLoader color="#590fb7" /> : "Contactar"}
        </button>
      </form>
    </div>
  );
};
