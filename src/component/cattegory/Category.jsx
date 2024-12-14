

// export default function Category({ onCategoryClick }) {
//   return (
//     <>
//       <div className="categoryComponent">
//         <div
//           className="filterCategory--container"
//           onClick={() => onCategoryClick("vegetables")} >
//           <div className="filterCategory-image">
//             <img src="src/assets/images/06e695aeecf7f2a16aa78ab00f6f53e6.jpg" alt="Category 1" />
//           </div>
//           <span>Vegetables</span>
//         </div>

//         <div
//           className="filterCategory--container"
//           onClick={() => onCategoryClick("fruits")} >
//           <div className="filterCategory-image">
//             <img
//               src="src/assets/images/06e695aeecf7f2a16aa78ab00f6f53e6.jpg"
//               alt="Category 2"
//             />
//           </div>
//           <span>Fruits</span>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";

export default function Category({ products, onCategoryClick }) {
  const [activeCategory, setActiveCategory] = useState(null); 

  const uniqueCategories = [
    ...new Set(products?.map((product) => product.title)),
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    onCategoryClick(category);
  };

  return (
    <div className="categoryComponent">
      {uniqueCategories?.map((category) => (
        <div
          key={category}
          className={`filterCategory--container ${
            activeCategory === category ? "active" : ""
          }`}
          onClick={() => handleCategoryClick(category)}
        >
          <div className="filterCategory-image">
            <img
              src={
                products.find((product) => product.title === category).image
              }
              alt={category}
            />
          </div>
          <span
            className={`filterCategory-text ${
              activeCategory === category ? "active-text" : ""
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
        </div>
      ))}
    </div>
  );
}



