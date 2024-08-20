export default function Home() {
  return (
    <div
      style={{
        backgroundImage: "url('/background-3.jpg')",
        backgroundPosition: "75% 25%"
      }}
      className="h-80 pt-32 flex-1 bg-cover"
    >
      <h1 className="md:pl-20 pt-20 pl-8 font-extrabold text-5xl sm:text-7xl md:text-8xl text-white">
        Burger & grill
      </h1>
      <h2 className="text-white text-base sm:text-xl md:text-3xl md:pl-20 pl-8 pt-4">
        Donde cada bocado es una experiencia
      </h2>
    </div>
  );
}
