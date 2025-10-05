import React, { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import CompanyGrid from "./CompanyGrid";
import CompanyList from "./CompanyList";
import PaginationGrid from "./PaginationGrid";
import { useAppContext } from "../context/AppContext";

const CompanyContainer: React.FC = () => {
  const [layout, setLayout] = useState("grid");
  const { filteredCompanies } = useAppContext();

  const totalCompanies = filteredCompanies?.length;

  const setActiveStyles = (pattern: string) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "btn-primary text-primary-content"
        : "btn-ghost text-based-content"
    }`;
  };

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalCompanies} product{totalCompanies > 1 && "s"}
        </h4>
        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalCompanies === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <CompanyGrid />
        ) : (
          <CompanyList />
        )}
      </div>

      <div className="mt-5">
        <PaginationGrid />
      </div>
    </>
  );
};

export default CompanyContainer;
