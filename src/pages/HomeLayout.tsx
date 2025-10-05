import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <section className="align-element py-20 px-10">
        <Outlet />
      </section>
    </div>
  );
};

export default HomeLayout;
