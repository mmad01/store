import type { ProductType } from "../types";

type ProductCardType = {
  data: ProductType;
};

function ProductCard({ data }: ProductCardType) {
  console.log("data:",data);

  return (
    <div className="text-light col-xl-2 col-lg-3 col-md-6 col-12 mt-5">
      <div className="card rounded-3 bg-dark " style={{width: "18rem"}}>
        <img src={data.image} className="card-img-top" alt="..." style={{height: "234px"}} />
        <div className="card-body">
          <h5 className="card-title text-truncate">{data.title}</h5>
          <p className="card-text text-truncate">{data.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-dark text-light">An item</li>
          <li className="list-group-item bg-dark text-light">A second item</li>
          <li className="list-group-item bg-dark text-light">A third item</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">
            Card link
          </a>
          <a href="#" className="card-link">
            Another link
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
