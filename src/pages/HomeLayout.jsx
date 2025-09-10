import { Outlet } from "react-router-dom";
import Header from "../Components/Header";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
export default HomeLayout;
