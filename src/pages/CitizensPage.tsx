import { useNavigate } from "react-router";
import { useCitizensStore } from "../store/citizensStore";
import { useCitizenFilters } from "../hooks/useCitizenFilters";
import { useFilteredCitizens } from "../hooks/useFilteredCitizens";
import CitizensFilters from "../components/CitizensPageComponents/CitizensFilters";
import CitizensTable from "../components/CitizensPageComponents/CitizensTable";

const CitizensPage = () => {
  const navigate = useNavigate();
  const citizens = useCitizensStore((state) => state.citizens);
  const filters = useCitizenFilters();
  const { filteredCitizens, cityOptions } = useFilteredCitizens(citizens, filters);

  return (
    <div className="w-full">
      <CitizensFilters
        searchInput={filters.searchInput}
        gender={filters.gender}
        city={filters.city}
        dateFrom={filters.dateFrom}
        dateTo={filters.dateTo}
        cityOptions={cityOptions}
        filteredCount={filteredCitizens.length}
        totalCount={citizens.length}
        onSearchChange={filters.setSearchInput}
        onGenderChange={(gender) => filters.updateParams({ gender })}
        onCityChange={(city) => filters.updateParams({ city })}
        onBirthRangeChange={(dateFrom, dateTo) =>
          filters.updateParams({ dateFrom, dateTo })
        }
        onReset={filters.resetFilters}
      />
      <CitizensTable
        citizens={filteredCitizens}
        currentPage={filters.currentPage}
        pageSize={filters.pageSize}
        onPageChange={filters.changePage}
        onOpenCitizen={(id) => navigate(`/citizens/${id}`)}
      />
    </div>
  );
};

export default CitizensPage;
