import { createContext, useContext, useState } from "react";
import type { Company } from "../utils/interface";

type SearchType = {
  searchBy: string;
  searchTerm: string;
};

interface AppContextType {
  companies: Company[];
  filteredCompanies: Company[];
  page: number;
  totalPages: number;
  limit: number;

  pageChange(page: number): void;
  calculateTotalPages(page: number): void;
  addCompanies(companies: Company[]): void;
  handleSearch(search: SearchType): void;
  handleReset(): void;
}

const AppContextValue = createContext<AppContextType | undefined>(undefined);

const AppContext = ({ children }: { children: any }) => {
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);

  const limit = 10;

  const pageChange = (page: number) => {
    setPage(page);
  };

  const calculateTotalPages = (total: number) => {
    setTotalPages(Math.ceil(total / 10));
  };

  const addCompanies = (companies: Company[]) => {
    calculateTotalPages(companies?.length || 0);
    setCompanies(companies);
    setFilteredCompanies(companies);
  };

  const handleSearch = (search: SearchType) => {
    setFilteredCompanies(() => {
      const afterFiltering: Company[] = companies?.filter((item: Company) => {
        const searchBy: string = search.searchBy;
        const key = item[searchBy.toLowerCase() as keyof Company]
          ?.toString()
          .toLowerCase();
        const value = search.searchTerm?.toLowerCase();
        return key == value;
      });
      calculateTotalPages(afterFiltering?.length || 0);
      return afterFiltering;
    });
  };

  const handleReset = () => {
    setFilteredCompanies(companies);
    calculateTotalPages(companies?.length || 0);
  };

  return (
    <AppContextValue.Provider
      value={{
        page,
        totalPages,
        companies,
        limit,
        filteredCompanies,

        handleSearch,
        handleReset,
        pageChange,
        calculateTotalPages,
        addCompanies,
      }}
    >
      {children}
    </AppContextValue.Provider>
  );
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContextValue);
  if (!context) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};

export default AppContext;
