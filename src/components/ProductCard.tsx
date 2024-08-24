import { Product } from "../services/getProducts";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative w-[100%] sm:w-[50%] md:w-[33.3%] border-2 border-[#0e100f] group flex flex-col justify-center">
      <img
        src={`${product.imgPath}`}
        alt={`imagen de ${product.name}`}
        className="object-cover h-full w-full"
      ></img>
      <div className="max-h-0 absolute overflow-hidden  group-hover:max-h-52 bottom-0 w-full backdrop-blur-[16px] backdrop-saturate-[180%] bg-[rgba(17,25,40,0.75)] ">
        <h2 className="font-bold text-xl md:text-2xl p-3">{product.name}</h2>
        <p className="p-3 pt-0">{product.description}</p>
      </div>
    </div>
  );
}
