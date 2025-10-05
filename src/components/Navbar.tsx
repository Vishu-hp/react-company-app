import { useEffect, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const Navbar = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  const handleTheme = () => {
    setTheme(!theme);

    document.documentElement.setAttribute(
      "data-theme",
      theme ? "light" : "dracula"
    );
  };

  return (
    <>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Company</a>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost">
            <label className="swap swap-rotate">
              <input type="checkbox" checked={theme} onChange={handleTheme} />
              <BsSunFill className="swap-on h-4 w-4" />
              <BsMoonFill className="swap-off h-4 w-4" />
            </label>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
