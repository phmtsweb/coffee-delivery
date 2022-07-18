import { createContext, ReactNode } from 'react';
import { toast, ToastContainer } from 'react-toastify';

interface ToastContextData {
  toast: (element: ReactNode) => void;
}

interface ToastContextProviderProps {
  children: ReactNode | ReactNode[];
}

export const ToastContext = createContext({} as ToastContextData);

export function ToastContextProvider({ children }: ToastContextProviderProps) {
  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <ToastContainer
        draggable
        position="top-right"
        autoClose={2500}
        closeOnClick
        pauseOnHover
      />
    </ToastContext.Provider>
  );
}
