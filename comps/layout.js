import NavBar from "../comps/navbar";
import Futer from "../comps/footer";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Futer />
    </div>
  );
};

export default Layout;
