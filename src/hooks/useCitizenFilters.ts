import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export const useCitizenFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get("search") ?? "";
  const [searchInput, setSearchInput] = useState(searchText);
  const [previousSearchText, setPreviousSearchText] = useState(searchText);

  if (previousSearchText !== searchText) {
    setPreviousSearchText(searchText);
    setSearchInput(searchText);
  }

  useEffect(() => {
    if (searchInput === searchText) return;

    const timeoutId = window.setTimeout(() => {
      setSearchParams(
        (previous) => {
          const next = new URLSearchParams(previous);

          if (searchInput.trim()) {
            next.set("search", searchInput);
          } else {
            next.delete("search");
          }

          next.delete("page");
          return next;
        },
        { replace: true },
      );
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [searchInput, searchText, setSearchParams]);

  const city = searchParams.get("city") || undefined;

  const genderParam = searchParams.get("gender");
  const gender =
    genderParam === "male" || genderParam === "female"
      ? genderParam
      : undefined;

  const dateFrom = searchParams.get("dateFrom") ?? "";
  const dateTo = searchParams.get("dateTo") ?? "";

  const pageParam = Number(searchParams.get("page") ?? "1");
  const currentPage =
    Number.isSafeInteger(pageParam) && pageParam > 0 ? pageParam : 1;

  const sizeParam = Number(searchParams.get("pageSize") ?? "10");
  const pageSize = [10, 20, 50, 100].includes(sizeParam) ? sizeParam : 10;

  const updateParams = (
    changes: Record<string, string | undefined>,
    resetPage = true,
  ) => {
    setSearchParams(
      (previous) => {
        const next = new URLSearchParams(previous);

        for (const [key, value] of Object.entries(changes)) {
          if (value === undefined || value === "") {
            next.delete(key);
          } else {
            next.set(key, value);
          }
        }

        if (resetPage) {
          next.delete("page");
        }

        return next;
      },
      { replace: true },
    );
  };

  const resetFilters = () => {
    setSearchInput("");

    updateParams({
      search: undefined,
      gender: undefined,
      city: undefined,
      dateFrom: undefined,
      dateTo: undefined,
    });
  };

  const changePage = (page: number, newPageSize: number) => {
    updateParams({
      page: String(newPageSize !== pageSize ? 1 : page),
      pageSize: String(newPageSize),
    }, false);
  };
  return {
    searchText, searchInput, setSearchInput, gender, city, dateFrom, dateTo,
    currentPage, pageSize, updateParams, resetFilters, changePage,
  } as const;
};
