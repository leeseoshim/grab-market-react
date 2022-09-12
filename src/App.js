import { Switch, Route } from "react-router-dom";
import "./App.css";
import MainPageComponent from "./main";
import UploadPage from "./upload/index";
import ProductPage from "./product/index";

//실행시켰을 때 화면에 보이는 컴포넌트
//index.js에서 보여줘서
function App() {
  return (
    <div>
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
  );
}

export default App;
