import { create } from "zustand";
import type { Citizen } from "../types/citizen";
import { citizensData } from "../data/citizens";

interface CitizensState {
  citizens: Citizen[];
  updateCitizen: (updatedCitizen: Citizen) => void;
}

export const useCitizensStore = create<CitizensState>((set) => ({
  citizens: citizensData,

  updateCitizen: (updatedCitizen) =>
    set((state) => ({
      citizens: state.citizens.map((citizen) =>
        citizen.id === updatedCitizen.id ? updatedCitizen : citizen,
      ),
    })),
}));
