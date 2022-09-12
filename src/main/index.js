//export를 안해놔도 from없이 파일import가능
import "./index.css";
// npm i axios를 하면 packages.json에 axios가 있는것을 볼수있음
import axios from "axios";
import React from "react";

function MainPage() {
  const [products, setProducts] = React.useState([]);
  //postman으로 만든가상 서버의 값을 가져와서 사용
  //한번만 실행, 두번째인자의 값이 변할때 첫번재인자가 호출되는데
  //비어있기때문에 한번만 실행
  React.useEffect(() => {
    axios
      .get(
        "https://4c062318-df93-4cef-bc2e-8ae8f3970fe1.mock.pstmn.io/products"
      )
      .then((res) => {
        console.log(res);
        const products = res.data.products;
        setProducts(products);
      })
      .catch((err) => {
        console.error("에러발생: ", err);
      });
  }, []);

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="images/icons/logo.png" />
        </div>
      </div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" />
        </div>
        <h1>판매되는 상품들</h1>
        <div id="product-list">
          {products.map((product, index) => {
            return (
              <div className="product-card">
                <div>
                  <img className="product-img" src={product.imageUrl} />
                </div>
                {/* 상품들을 네트워크 통신을 이용해서 받아옴 axios사용*/}
                <div className="product-contents">
                  <span className="product-name">{product.name}</span>
                  <span className="product-price">{product.price}원</span>
                  <div className="product-seller">
                    <img
                      className="product-avatar"
                      src="images/icons/avatar.png"
                    />
                    <span>{product.seller}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default MainPage;
