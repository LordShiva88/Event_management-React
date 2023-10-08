

import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import CardData from "./CardData";

const Shopping = () => {
  const data = useLoaderData()

  return (
    <div>
    <Helmet>
      <title>Home || Shopping</title>
    </Helmet>
    <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-2 my-10">
      {
        data.map(product =><CardData key={product.id} product={product}></CardData>
        )
      }
    </div>
    
  </div>
  );
};

export default Shopping;