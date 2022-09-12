import { useParams } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();

  return "프로덕트";
}

export default ProductPage;
