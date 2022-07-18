import { useContext } from 'react';
import { ToastContext } from '../contexts/ToastProvider';

export function useToast() {
  const toastContext = useContext(ToastContext);
  return toastContext;
}
