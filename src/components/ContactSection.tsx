import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="rounded-3xl bg-[#0e100f] p-6 text-center text-2xl text-[#FFF5D6] shadow-md">
      <div className="flex flex-col items-center justify-center pb-10">
        <h2 className="p-5 text-center font-vidaloka font-bold tracking-wide text-[#FFF5D6] text-2xl md:text-3xl">
          Podes consultarnos lo que quieras
        </h2>
        <p>Dejanos tu duda</p>
      </div>
      <ContactForm />
    </section>
  );
}
