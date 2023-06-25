import { Link } from "react-router-dom";
import Image from "../../nillkin-case.webp";

function FeatureProduct({ product }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="240"
          alt=""
          src={Image}
        />
        <div className="card-body">
          <h5 className="card-title text-center">{product?.name}</h5>
          <p className="card-text text-center text-muted">{product.price} $</p>
          <div className="d-grid gap-2 mb-2">
            <a href={'/products/'+product.id} className="btn btn-outline-dark" replace>
              Detail
            </a>
          </div>
          <div className="row g-3">
            <div className="col">
              <button className="btn btn-outline-dark py-2 w-100">
                Add to cart
              </button>
            </div>
            <div className="col">
              <button className="btn btn-dark py-2 w-100">Buy now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;
