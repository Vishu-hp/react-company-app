import { Form, Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { useState } from "react";

const Filters = () => {
  const { handleSearch, handleReset } = useAppContext();
  const [searchBy, setSearchBy] = useState("Select Filter");
  const [searchTerm, setSearchTerm] = useState("");
  const searchByList: string[] = [
    "Select Filter",
    "Name",
    "Location",
    "Email",
    "Website",
    "Slogan",
  ];

  const resetFilters = () => {
    setSearchBy("Select Filter");
    setSearchTerm("");
    handleReset();
  };

  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4  gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <div className="form-control">
        <label htmlFor="order" className="label">
          <span className="label-text capitalize">Search by</span>
        </label>
        <select
          name="order"
          id="order"
          className="select select-bordered select-sm"
          defaultValue="Name"
          value={searchBy}
          onChange={(e) => setSearchBy(e.target.value)}
        >
          {searchByList.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-control">
        <label htmlFor="search" className="label">
          <span className="label-text capitalize">search company</span>
        </label>
        <input
          type="search"
          name="search"
          value={searchTerm}
          className="input input-bordered input-sm"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="h-full flex items-end">
        <button
          type="button"
          className="w-full btn btn-primary btn-sm"
          disabled={searchBy == "Select Filter" || !searchTerm?.length}
          onClick={() => handleSearch({ searchBy, searchTerm })}
        >
          search
        </button>
      </div>
      <div className="h-full flex items-end">
        <Link
          to="/"
          className="w-full btn btn-accent btn-sm"
          onClick={resetFilters}
        >
          reset
        </Link>
      </div>
    </Form>
  );
};
export default Filters;
