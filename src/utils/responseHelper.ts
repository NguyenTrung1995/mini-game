export const parseResponse = (res: any) => {
  return {
    data: res?.data,
  };
};

export const parseError = (err: any) => {
  return {
    error: err?.response?.data || 'Invalid Unknown Errors'
  };
};
