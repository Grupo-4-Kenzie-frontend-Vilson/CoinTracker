import { MainRoutes } from "./Routes";
import { GlobalStyles } from "./Styles";
import { Modal } from "./Styles/modal";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <MainRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <GlobalStyles />
      <ToastContainer />
      <Modal />
    </>
  );
}
export default App;
