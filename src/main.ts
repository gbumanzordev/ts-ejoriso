import "./style.css";

// Basic Types

const str: string = "Something";
const num: number = 123;
const bool: boolean = false;
const arr: string[] = ["str1", "str2"];
const obj: Person = {
  age: 26,
  name: "Jose",
  lastName: "Soto",
};

// INTERFACES
interface Person {
  name: string;
  lastName: string;
  age: number;
  company?: Company;
}

interface Company {
  name: string;
  address: string;
  role: string;
}

const person1: Person = {
  age: 123,
  lastName: "Doe",
  name: "John",
  company: {
    address: "San Salvador",
    name: "Applaudo Studios",
    role: "Frontend Developer",
  },
};

// Types
type ImageSizes = "xs" | "sm" | "md" | "lg" | "xl";

let imageSize: ImageSizes = "sm";
imageSize = "lg";
imageSize = "lg";

type Employee = {
  role: string;
  salario: string;
  tenure: number;
};

const me: Employee = {
  role: "Frontend Dev",
  salario: "$400",
  tenure: 1.5,
};

// Union Types
type PersonEmployee = Person & Employee;
const erick: PersonEmployee = {
  name: "Erick",
  lastName: "Rivera",
  age: 25,
  role: "Frontend Dev",
  salario: "$450",
  tenure: 2,
  company: {
    address: "San Miguel",
    name: "UGB",
    role: "Admin",
  },
};

type PrefixedPersonEmployee = PersonEmployee & { prefix: string };
const prefixedErick: PrefixedPersonEmployee = {
  name: "Erick",
  lastName: "Rivera",
  age: 25,
  role: "Frontend Dev",
  salario: "$450",
  tenure: 2,
  company: {
    address: "San Miguel",
    name: "UGB",
    role: "Admin",
  },
  prefix: "Sr.",
};

console.log(`${prefixedErick.prefix} ${prefixedErick.name}`);

// ENUMs

enum Arrows {
  Up = "Up",
  Down = "Down",
  Left = "Left",
  Right = "Right",
}

enum Roles {
  Regular = 1,
  Admin = 2,
  SuperAdmin = 3,
  Manager = 4,
}

let myArrow: Arrows = Arrows.Down;
myArrow = Arrows.Up;

function getPermissions(role: Roles): number[] {
  switch (role) {
    case Roles.Admin: {
      return [1, 2, 3, 4];
    }
    case Roles.Manager: {
      return [3, 4, 5, 6];
    }
    default: {
      return [];
    }
  }
}

// Generics

interface Pagination {
  currentPage: number;
  lastPage: number;
  from: number;
  to: number;
  totalPages: number;
  totalRecors: number;
}

interface ApiResponsePerson {
  pagination: Pagination;
  data: Person[];
}

interface ApiResponseCompanies {
  pagination: Pagination;
  data: Company[];
}

interface ApiResponse<T> {
  pagination: Pagination;
  data: T;
}

const people: ApiResponse<PrefixedPersonEmployee[]> = {
  pagination: {
    currentPage: 1,
    from: 1,
    lastPage: 5,
    to: 25,
    totalPages: 5,
    totalRecors: 125,
  },
  data: [],
};

function getKeyValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const eName = getKeyValue(person1, "company");
console.log(eName);

/*
interface Person {
  name: string;
  lastName: string;
  age: number;
  company?: Company
}
*/

// Utility Types.

// Partial
const partialPerson: Partial<Person> = {
  age: 24,
};

// Pick
const pickedPerson: Pick<Person, "lastName" | "name"> = {
  lastName: "Soto",
  name: "Erick",
};

// Omit
const omittedPerson: Omit<Person, "lastName" | "company"> = {
  name: "Erick",
  age: 31,
};

// Backticks -o- String Literals
const me2 = "Gerson";
const you = "Erick y edad es " + omittedPerson.age + " y su apellido es Rivera";
const bt = `${omittedPerson.name} es un ${
  omittedPerson.age > 30 ? "veterano" : "jovenazo"
} 😂`;
console.log(bt);
