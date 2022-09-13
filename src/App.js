import "antd/dist/antd.css";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import "./App.css";
import MainPageComponent from "./main";
import UploadPage from "./upload/index";
import ProductPage from "./product/index";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

//실행시켰을 때 화면에 보이는 컴포넌트
//index.js에서 보여줘서
function App() {
  const history = useHistory();

  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={() => {
              history.push("/upload");
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/product/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
