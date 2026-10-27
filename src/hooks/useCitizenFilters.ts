import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

const PAGE_SIZES = [10, 20, 50, 100];

export const useCitizenFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchText = searchParams.get("search") ?? "";
  const [searchInput, setSearchInput] = useState(searchText);

  useEffect(() => {
    setSearchInput(searchText);
  }, [searchText]);

  const updateParams = (
    changes: Record<string, string | undefined>,
    resetPage = true,
  ) => {
    setSearchParams(
      (previous) => {
        const next = new URLSearchParams(previous);

        Object.entries(changes).forEach(([key, value]) => {
          if (value === undefined || value === "") {
            next.delete(key);
          } else {
            next.set(key, value);
          }
        });

        if (resetPage) next.delete("page");

        return next;
      },
      { replace: true },
    );
  };

  useEffect(() => {
    if (searchInput === searchText) return;

    const timeoutId = window.setTimeout(() => {
      updateParams({ search: searchInput.trim() || undefined });
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [searchInput, searchText]);

  const city = searchParams.get("city") || undefined;

  const genderParam = searchParams.get("gender");
  const gender =
    genderParam === "male" || genderParam === "female"
      ? genderParam
      : undefined;

  const dateFrom = searchParams.get("dateFrom") ?? "";
  const dateTo = searchParams.get("dateTo") ?? "";

  const page = Number(searchParams.get("page") ?? 1);
  const currentPage = Number.isSafeInteger(page) && page > 0 ? page : 1;

  const size = Number(searchParams.get("pageSize") ?? 10);
  const pageSize = PAGE_SIZES.includes(size) ? size : 10;

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
    updateParams(
      {
        page: String(newPageSize !== pageSize ? 1 : page),
        pageSize: String(newPageSize),
      },
      false,
    );
  };

  return {
    searchText,
    searchInput,
    setSearchInput,
    gender,
    city,
    dateFrom,
    dateTo,
    currentPage,
    pageSize,
    updateParams,
    resetFilters,
    changePage,
  } as const;
};
