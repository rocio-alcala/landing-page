export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/background-3.jpg')",
          backgroundPosition: "75% 25%"
        }}
        className="h-80 py-32 flex items-center gap-3 justify-center flex-col bg-cover animate-fade-in min-h-svh"
      >
        <h1 className="font-extrabold text-5xl sm:text-7xl md:text-8xl text-[#ffffff]">
          Burger & grill
        </h1>
        <h2 className="text-[#ffffff] text-base sm:text-xl md:text-3xl font-bold">
          Donde cada bocado es una experiencia.
        </h2>
      </div>
      <div className="text-[#ffffff] sm:p-28 md:p-40 p-10 text-xl md:text-3xl line-clamp-5 leading-loose flex flex-col gap-12 sm:gap-32">
        <p className="leading-relaxed md:leading-loose">
          <span className="text-[#c2983e] ">Burger & Grill</span> es más que un
          simple restaurante de hamburguesas; es una experiencia culinaria
          diseñada para aquellos que buscan calidad, sabor y autenticidad en
          cada bocado. Nuestra pasión por la parrilla y los ingredientes frescos
          se refleja en cada una de nuestras creaciones, desde la clásica
          hamburguesa hasta nuestras opciones gourmet.
        </p>
        <p className="leading-relaxed md:leading-loose">
          En Burger & Grill, cada hamburguesa es preparada al momento con carne
          100% de
          <span className="text-[#c2983e]"> primera calidad</span>, acompañada
          de{" "}
          <span className="text-[#c2983e]">
            ingredientes frescos y pan artesanal
          </span>
          , todo asado a la perfección en nuestra parrilla. Además, ofrecemos
          una variedad de acompañamientos y bebidas que complementan
          perfectamente nuestros platos.
        </p>
      </div>
    </>
  );
}
