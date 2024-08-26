import { cn } from "../assets/helpers";
import ContactSection from "../components/ContactSection";
import MapSection from "../components/MapSection";

export default function Contact() {
  return (
    <div
      style={{
        backgroundImage: "url('/background-2.jpg')",
        backgroundPosition: "75% 25%"
      }}
      className={cn(
        "flex-1 flex flex-col md:flex-row p-6 sm:p-10 md:p-15 bg-cover animate-fade-in gap-10",
        "pt-28 sm:pt-28 md:pt-32"
      )}
    >
      <MapSection />
      <ContactSection />
    </div>
  );
}
