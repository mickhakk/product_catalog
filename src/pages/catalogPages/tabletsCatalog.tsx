import { Pagination } from "../../components/Pagination/Pagination";
import { useContextProvider } from "../../context/ProductsContext";

export const TabletsCatalog = () => {
  const { products } = useContextProvider()
  console.log(products.length)
  return (
  <>
    <h1>Tablets Catalog Page</h1>
    <Pagination totalCount={50} pageSize={16} siblingCount={1} currentPage={1}/>
  </>
)};
