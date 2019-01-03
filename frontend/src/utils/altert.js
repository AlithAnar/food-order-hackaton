import { toast } from 'react-toastify';

const options = {
  position: 'top-center',
}

export const error = (message) => toast.error(message, options)
export const success = (message) => toast.success(message, options)
export const warn = (message) => toast.warn(message, options)
export const info = (message) => toast.info(message, options)
