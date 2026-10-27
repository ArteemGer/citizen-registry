import { useMemo } from "react";
import type { Citizen } from "../types/citizen";

interface CitizenFilterValues {
  searchText: string;
  gender?: Citizen["gender"];
  city?: string;
  dateFrom: string;
  dateTo: string;
}

export const useFilteredCitizens = (
  citizensData: Citizen[],
  { searchText, gender, city, dateFrom, dateTo }: CitizenFilterValues,
) => {
  const searchableCitizens = useMemo(
    () =>
      citizensData.map((citizen) => ({
        citizen,
        searchText: [
          citizen.lastName,
          citizen.firstName,
          citizen.middleName ?? "",
          citizen.address.city,
        ]
          .join(" ")
          .toLocaleLowerCase("ru"),
      })),
    [citizensData],
  );

  const cityOptions = useMemo(() => Array.from(
    new Set(citizensData.map((citizen) => citizen.address.city)),
  )
    .sort((a, b) => a.localeCompare(b, "ru"))
    .map((cityName) => ({
      label: cityName,
      value: cityName,
    })), [citizensData]);

  const filteredCitizens = useMemo(() => {
    const words = searchText
      .trim()
      .toLocaleLowerCase("ru")
      .split(/\s+/)
      .filter(Boolean);

    if (!words.length && !gender && !city && !dateFrom && !dateTo) {
      return citizensData;
    }

    return searchableCitizens
      .filter(({ citizen, searchText: text }) => {
        if (gender && citizen.gender !== gender) return false;
        if (city && citizen.address.city !== city) return false;
        if (dateFrom && citizen.birthDate < dateFrom) return false;
        if (dateTo && citizen.birthDate > dateTo) return false;

        return words.every((word) => text.includes(word));
      })
      .map(({ citizen }) => citizen);
  }, [
    citizensData,
    searchableCitizens,
    searchText,
    gender,
    city,
    dateFrom,
    dateTo,
  ]);

  return { filteredCitizens, cityOptions };
};
