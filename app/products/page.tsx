import ProductsContainer from '@/components/products/ProductsContainer';
import React, { Suspense } from 'react'

function ProductsPage({searchParams}:{searchParams:{layout?:string, search?:string}}) {

  const layout = searchParams.layout || 'grid' ;
  const search = searchParams.search || '';
   
   return (
     <Suspense>
       <ProductsContainer layout={layout} search={search} />
     </Suspense>
   );
}

export default ProductsPage;
