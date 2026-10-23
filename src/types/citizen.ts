export interface Citizen {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string | null;
  birthDate: string;
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
  institution: string;
  specialty: string;
  graduationYear: number;
}

export interface Employment {
  organization: string;
  position: string;
  startDate: string;
}
