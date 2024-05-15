import { Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';


const Layout = () => {
  return (
    <>
      <div className={"card-header text-light"} style={footerStyle()}>
      <Header></Header>
      </div>
      <div style={bodyStyle()}>
        <Outlet />
      </div>
      <div className={"card-footer text-light"} style={footerStyle()}>
        <Footer></Footer>
      </div>
    </>
  );
};

function bodyStyle() {
  return {
    overflow: "auto",
    padding: "16px",
    flex: "1",
    borderTop: "white 4px solid",
    borderBottom: "white 4px solid",
  };
}

function footerStyle() {
  return { padding: "8px", textAlign: "center", backgroundColor: "#d63232" };
}

export default Layout;
