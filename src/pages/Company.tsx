import { useEffect, useState } from "react";
import { CompanyContainer, Filters, Loading } from "../components";
import jsonData from "../utils/data.json";
import { useAppContext } from "../context/AppContext";

const Company = () => {
  const { addCompanies, companies } = useAppContext();
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      addCompanies(jsonData);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (companies?.length) {
    return (
      <>
        <Filters />
        <CompanyContainer />
      </>
    );
  }

  // FOR HANDLING ERRORS
  // if (error?.length) {
  //   return <h2>{error}</h2>;
  // }
};

export default Company;
