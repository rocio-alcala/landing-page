import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function MapSection() {
  return (
    <div className="md:w-[60%] flex flex-col justify-center items-center">
      <iframe
        className="rounded-xl mb-4"
        width="100%"
        height="500"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Av.%20Fuerza%20Aerea%20Argentina%202759,%20X5011AXD%20X5011AXD,%20C%C3%B3rdoba+(Burger%20and%20grill)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.gps.ie/">gps systems</a>
      </iframe>
      <span className="font-bold text-xl flex flex-wrap items-center justify-center gap-5 p-4">
        <FaMapMarkerAlt /> Av. Fuerza Aerea Argentina 2759, Córdoba
      </span>
      <span className="font-bold text-xl flex flex-wrap items-center justify-center gap-5 p-4">
        <FaPhoneAlt /> +54 03515918265
      </span>
      <span className="font-bold text-xl flex flex-wrap items-center justify-center gap-5 p-4">
        <IoMail /> contacto@burgerandgrill.com
      </span>
    </div>
  );
}
