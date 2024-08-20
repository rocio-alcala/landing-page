import { GrInstagram } from "react-icons/gr";
import { ImFacebook2 } from "react-icons/im";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex animate-fadeIn flex-wrap items-start justify-center sm:justify-between gap-5 bg-black p-2 font-manrope text-[#FFF5D6]">
      <p className="p-3" aria-label="Desarrollado por Rocio Alcala">
        Copyright 2024{" "}
        <span className="underline">
          <Link
            aria-label="github Rocio Alcala"
            to={"https://github.com/rocio-alcala"}
          >
            @rocio-alcala
          </Link>
        </span>
      </p>

      <div className="flex gap-8 p-3">
        <Link aria-label="Facebook page of burger & grill" to={""}>
          <ImFacebook2 size={25} />
        </Link>
        <Link aria-label="Instagram page of burger & grill" to={""}>
          <GrInstagram size={25} />
        </Link>
      </div>
    </footer>
  );
}
