import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(function () {
    axios
      .get(
        `https://4c062318-df93-4cef-bc2e-8ae8f3970fe1.mock.pstmn.io/products/${id}`
      )
      .then((result) => {
        setProduct(result.data);
      })
      .catch((err) => {
        console.error("에러발생: ", err);
      });
  }, []);

  if (product === null) {
    return <h1>상품 정보를 받고 있습니다...</h1>;
  }

  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}원</div>
        <div id="createdAt">2022년 9월 13일</div>
        <div id="description">{product.description} </div>
      </div>
    </div>
  );
}

export default ProductPage;
