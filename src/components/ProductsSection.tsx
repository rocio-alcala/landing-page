import { useEffect, useState } from "react";
import { getProducts, Product } from "../services/getProducts";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";

export default function ProductsSection() {
  const [products, setProducts] = useState<[] | Product[]>([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  if (products.length === 0) return <Spinner />;
  return (
    <div className="flex flex-row flex-wrap animate-fade-in justify-center items-stretch">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
}
