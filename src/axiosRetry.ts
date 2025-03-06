import axios, { AxiosError } from 'axios';
import axiosRetry from 'axios-retry';
import { updateSpinner } from './ui.js'

axiosRetry(axios, {
  retries: 5,
  retryDelay: (retryCount) => {
    return retryCount * 500; // backoff
  },
  retryCondition: (error) => {
    // Retry on 500 and 429 errors.
    return (
      error.response?.status === 500 ||
      error.response?.status === 429
    );
  },
  onRetry(retryCount, error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        updateSpinner(`Request failed with error ${axiosError.response.status}, retry attempt ${retryCount}`);
      }
    } else {
      updateSpinner(`Request failed with error ${error}, retry attempt ${retryCount}`);
    }
  },
});

export default axios;
