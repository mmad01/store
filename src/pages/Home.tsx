import { useEffect, useState } from "react";
import { productList } from "../API/Products";
import type { ProductType } from "../types";
import ProductCard from "../components/ProductCard";

function Home() {
  const [product, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await productList();
      setProduct(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <h3>محصولات موجود</h3>
      <div className="row bg-primary d-flex align-middle">
        {product && product.length > 0
          ? product.map((prod) => <ProductCard data={prod} key={prod.id} />)
          : "مشکل در ارتباط با سرور"}
      </div>
    </>
  );
}

export default Home;
