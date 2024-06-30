import { IEmployee } from "../@types/employees";

const api = 'http://localhost:3000/employees';

const getEmployees = async (): Promise<IEmployee[]> => {
	const response = await fetch(api);
  return await response.json();
}

export default getEmployees;
