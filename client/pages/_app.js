import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, {rootSaga} from "../reducers";
import Footer from "../components/Footer";
import "../styles/globals.css";
import PropTypes from "prop-types";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);
function App({ Component }) {
  return (
    <>
      <Provider store={store}>
        <Component />
      </Provider>
      <Footer />
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
/*
페이지에 공통인 레이아웃을 작성합니다.
페이지 전환시 레이아웃을 유지할 수 있습니다.,
페이지 전환시 상태값을 유지할 수 있습니다.
componentDidCatch를 이용해서 커스텀 에러 핸들링을 할 수 있습니다.
추가적인 데이터를 페이지로 주입시켜 주는게 가능합니다.
글로벌 CSS를 이곳에 선언합니다.
*/
