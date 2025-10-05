import React from "react";
import { useAppContext } from "../context/AppContext";
import type { Company } from "../utils/interface";

const CompanyList: React.FC = () => {
  const tableHeaders: string[] = [
    "Id",
    "Name",
    "Location",
    "Email",
    "Website",
    "Slogan",
  ];
  const { page, filteredCompanies, limit } = useAppContext();
  const dataToShow: Company[] | undefined = [];
  const startCompany = (page - 1) * limit + 1;
  const handleLastPage =
    filteredCompanies?.length % 10 == 0
      ? 9
      : (filteredCompanies?.length % 10) - 1;
  const lastCompany = Math.min(startCompany + 9, startCompany + handleLastPage);

  for (let idx = startCompany - 1; idx <= lastCompany - 1; idx++) {
    dataToShow.push(filteredCompanies[idx]);
  }

  return (
    <div className="mt-12">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              {tableHeaders?.map((item) => {
                return <th>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {dataToShow?.map((item) => {
              const { id, name, location, email, website, slogan } = item;

              return (
                <tr>
                  <th className="max-w-12 truncate">{id}</th>
                  <td className="max-w-12 truncate relative">
                    <span
                      className="tooltip tooltip-right z-50"
                      data-tip="Click to view details"
                    >
                      {name}
                    </span>
                  </td>
                  <td className="max-w-12 truncate">
                    <span
                      className="tooltip tooltip-right z-50"
                      data-tip="Click to view details"
                    >
                      {location}
                    </span>
                  </td>
                  <td className="max-w-12 truncate">
                    <span
                      className="tooltip tooltip-right z-50"
                      data-tip="Click to view details"
                    >
                      {email}
                    </span>
                  </td>
                  <td className="max-w-12 truncate">
                    <span
                      className="tooltip tooltip-right z-50"
                      data-tip="Click to view details"
                    >
                      {website}
                    </span>
                  </td>
                  <td className="max-w-12 truncate">
                    <span
                      className="tooltip tooltip-right z-50"
                      data-tip="Click to view details"
                    >
                      {slogan}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompanyList;
