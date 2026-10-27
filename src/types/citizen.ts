import type { Dayjs } from "dayjs";

export interface Citizen {
  id: string;
  firstName: string;
  lastName: string;
  middleName?: string | null;
  birthDate: string;
  citizenship?: string | null;
  maritalStatus?: "single" | "married" | "divorced" | "widowed" | null;
  phone?: string | null;
  email?: string | null;
  gender: "male" | "female";
  passport: Passport;
  address: Address;
  family: FamilyMember[];
  education: Education[];
  employment: Employment[];
}

export interface Passport {
  series: string;
  number: string;
  issuedAt: string;
  issuedBy: string;
}

export interface Address {
  region: string;
  city: string;
  street: string;
  house: string;
  apartment?: string;
  postalCode?: string;
}

export interface FamilyMember {
  id: string;
  fullName: string;
  relationship: string;
  birthDate: string;
}

export interface Education {
  id: string;
  institution: string;
  specialty: string;
  graduationYear: number;
}

export interface Employment {
  id: string;
  organization: string;
  position: string;
  startDate: string;
}

export type CitizenFormValues = {
  firstName: string;
  lastName: string;
  middleName?: string | null;
  birthDate: Dayjs;
  gender: "male" | "female";
  citizenship?: string | null;
  maritalStatus?: "single" | "married" | "divorced" | "widowed" | null;
  phone?: string | null;
  email?: string | null;
  passport: {
    series: string;
    number: string;
    issuedBy: string;
    issuedAt: Dayjs;
  };
  address: Address;
  family: {
    id: string;
    fullName: string;
    relationship: string;
    birthDate: Dayjs;
  }[];
  education: Education[];
  employment: {
    id: string;
    organization: string;
    position: string;
    startDate: Dayjs;
  }[];
};
