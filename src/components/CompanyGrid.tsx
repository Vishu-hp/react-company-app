import React from "react";
import { useAppContext } from "../context/AppContext";
import type { Company } from "../utils/interface";

const CompanyGrid: React.FC = () => {
  const { page, filteredCompanies, limit } = useAppContext();
  const dataToShow: Company[] | undefined = [];
  const startCompany = (page - 1) * limit + 1;
  const handleLastPage =
    filteredCompanies?.length % 10 == 0
      ? 9
      : (filteredCompanies?.length % 10) - 1;
  const lastCompany = Math.min(startCompany + 9, startCompany + handleLastPage);

  if (filteredCompanies?.length) {
    for (let idx = startCompany - 1; idx <= lastCompany - 1; idx++) {
      dataToShow.push(filteredCompanies[idx]);
    }
  }

  console.log("filtered", dataToShow);

  if (!dataToShow?.length) {
    return <h2>Sorry no companies available....</h2>;
  }

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {dataToShow?.map((item) => {
        const { id, name, location, email, website, slogan } = item;
        return (
          <div
            key={id}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <div className="card-body items-center text-center">
              <p className="w-full text-base-content text-lg truncate">
                <span className="font-normal">Name</span>:{" "}
                <span className="font-medium" data-tip={name}>
                  {name}
                </span>
              </p>
              <p className="w-full text-base-content text-base truncate">
                <span className="font-normal">Location</span>:{" "}
                <span className="font-medium" data-tip={location}>
                  {location}
                </span>
              </p>
              <p className="w-full text-base-content text-base truncate">
                <span className="font-normal">Email</span>:{" "}
                <span className="font-medium" data-tip={email}>
                  {email}
                </span>
              </p>
              <p className="w-full text-base-content text-base truncate">
                <span className="font-normal">Website</span>:{" "}
                <span className="font-medium" data-tip={website}>
                  {website}
                </span>
              </p>
              <p className="w-full text-base-content text-base truncate">
                <span className="font-normal">Slogan</span>:{" "}
                <span className="font-medium" data-tip={slogan}>
                  {slogan}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompanyGrid;
