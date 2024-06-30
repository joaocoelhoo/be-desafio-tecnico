import { createContext } from 'react';
import { EmployeeContextType } from '../@types/employees';

const Context = createContext<EmployeeContextType | null>(null);

export default Context;
