




// import React, { useState } from "react";
// import ProductCard from '../../component/productCard/ProductCard';
// import { getDataProucts } from '../../api/FetchApi';
// import Category from '../../component/cattegory/Category';

// export default function Products() {
//   const { data } = getDataProucts();
//   const [selectedCategory, setSelectedCategory] = useState("all"); // حالة لتحديد التصنيف

//   // تصفية المنتجات بناءً على التصنيف المحدد
//   const filteredProducts = selectedCategory === "all"
//     ? data?.data?.slice(0, 10) // عرض عدد محدد فقط إذا لم يتم اختيار تصنيف معين
//     : data?.data?.filter(product => product.title === selectedCategory);

//   // دالة لتغيير التصنيف عند الضغط على عنصر في الكاتوجري
//   const handleCategoryClick = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <>
//       <header className="product-header">
//         <div className="product-header-bg"> </div>
//         <div className="product-header-title px">
//           <h1>PRODUCTS</h1>
//         </div>
//         <div className="product-header-overlay"></div>
//       </header>

//       {/* تمرير دالة تغيير التصنيف إلى الكاتوجري */}
//       <Category onCategoryClick={handleCategoryClick} />

//       <section className='product_section px py'>
//         {filteredProducts?.map((product) => (
//           <ProductCard
//             key={product.id}
//             id={product.id}
//             image={product.image}
//             title={product.title}
//             name={product.name}
//             price={product.price}
//           />
//         ))}
//       </section>
//     </>
//   );
// }



import React, { useState } from "react";
import ProductCard from "../../component/productCard/ProductCard";
import { getDataProucts } from "../../api/FetchApi";
import Category from '../../component/cattegory/Category';

export default function Products() {
  const { data } = getDataProucts();
  const [filteredCategory, setFilteredCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setFilteredCategory(category);
  };

  const filteredProducts = filteredCategory
    ? data?.data?.filter((product) => product.title === filteredCategory)
    : data?.data;

  return (
    <>
      <header className="product-header">
        <div className="product-header-bg"></div>
        <div className="product-header-title px">
          <h1>PRODUCTS</h1>
        </div>
        <div className="product-header-overlay"></div>
      </header>


     <main className="product-main px py">
     <Category products={data?.data} onCategoryClick={handleCategoryClick} />
      <section className="product_section">
        {filteredProducts?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            name={product.name}
            price={product.price}
          />
        ))}
      </section>
     </main>
    </>
  );
}



