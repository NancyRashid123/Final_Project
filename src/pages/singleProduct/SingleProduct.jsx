// import React from "react";
// import { useParams } from "react-router-dom";
// import { getSingleProduct } from "../../api/FetchApi";
// import Button from "../../component/button/Button";

// export default function SingleProduct() {
//   const {id } = useParams();
//   const { data } = getSingleProduct(id);
//   console.log(data?.data)
//   return (
//     <>
//       <div className='product-card'>
//         <div className='product-card-image'>
//             <img src={data?.data?.image} alt="" />
//         </div>
//         <div className='product-card-content'>
//             <h5>{data?.data?.title}</h5>
//             <h4>{data?.data?.name}</h4>
//             <span>{data?.data?.price}</span>
//         </div>
//         <div className="project_btn_valign">
//         <Button text={"add to cart"} />
//       </div>
//     </div>
//     </>
//   );
// }

import React from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../api/FetchApi";
import Button from "../../component/button/Button";

export default function SingleProduct() {
  const { id } = useParams();
  const { data } = getSingleProduct(id);

  return (
    <>
      <header className="product-header">
        <div className="product-header-bg"> </div>
        <div className="product-header-title px">
          <h1>PRODUCTS</h1>
        </div>
        <div className="product-header-overlay"></div>
      </header>
      <div className="single-product px py">
        <div className="single-product-card">
          <div className="single-product-image">
            <img src={data?.data?.image} alt={data?.data?.name} />
          </div>
         <div className="single-product-content">
          <div className="single-product-title">
            <h5>{data?.data?.title}</h5>
            <h4>{data?.data?.name}</h4>
            <span>Price: {data?.data?.price}</span>
          </div>
          <div className="project_btn_valign">
            <Button text={"Add to cart"} />
          </div>
         </div>
        </div>
      </div>
    </>
  );
}
