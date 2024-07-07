export interface IEmployee {
  id: number;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
  image: string;
}

export type EmployeeContextType = {
  employees: IEmployee[];
};
