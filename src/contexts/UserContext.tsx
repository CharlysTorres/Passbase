import React, { createContext, ReactNode } from 'react';

interface UserContextType {
  id: string;
  name: string;
  email: string;
  accounts: Accounts[];
}

interface Accounts {
  id: string;
  name: string;
  img: string;
  login: string;
  password: string;
}

interface UserContextProvider {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export function UserProvider({ children, ...rest }: UserContextProvider) {}