import { useForm } from "react-hook-form";
import InputText from "./InputText";
import InputTextArea from "./InputTextArea";
import BaseModal from "./BaseModal";
import { useState } from "react";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const [modal, setModal] = useState({
    isOpen: false,
    message: "",
    success: false
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<ContactForm>();

  function postData() {
    return new Promise((resolve) => setTimeout(() => resolve("success"), 1000));
  }

  async function onSubmit(data: ContactForm) {
    console.log(data);
    try {
      await postData();
      setModal({
        isOpen: true,
        message: "El mensaje fue enviado correctamente",
        success: true
      });
      reset();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      setModal({
        isOpen: true,
        message: e.message || "Error al enviar el formulario",
        success: false
      });
    }
  }

  return (
    <>
      <form
        className="flex flex-col gap-5 items-stretch justify-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputText
          id="name"
          label="Nombre"
          required
          {...register("name", {
            required: "Nombre es requerido",
            maxLength: {
              value: 50,
              message: "50 caracteres como maxima"
            }
          })}
          errors={errors.name?.message}
        />
        <InputText
          id="email"
          label="Email"
          required
          {...register("email", {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Tiene que ser un email valido"
            },
            required: "Email es requerido"
          })}
          errors={errors.email?.message}
        />
        <InputTextArea
          id="message"
          label="Mensaje"
          {...register("message", { required: "Mensaje es requerido" })}
          required
          errors={errors.message?.message}
        />

        <button
          type="submit"
          className={
            "w-full rounded-md hover:bg-[#c2983e] border-2 p-3 text-center text-sm font-semibold leading-4 tracking-widest transition-all duration-500"
          }
          disabled={isSubmitting}
        >
          {isSubmitting ? <p>CARGANDO...</p> : <p>ENVIAR</p>}
        </button>
      </form>
      <BaseModal
        isOpen={modal.isOpen}
        onClose={() => setModal({ isOpen: false, message: "", success: false })}
      >
        <h1 className="mb-4 text-xl font-bold md:text-3xl">{modal.message}</h1>
        <p className="text-base md:text-xl">
          {modal.success
            ? "Responderemos tu consulta cuando antes"
            : "Intenta de nuevo"}
        </p>
      </BaseModal>
    </>
  );
}
