export const generateTypes = (action: string) => {
  action = action.toUpperCase();

  return {
    REQUEST: `${action}_REQUEST`,
    SUCCESS: `${action}_SUCCESS`,
    FAILURE: `${action}_FAILURE`,
  };
};

export const syncData = (key: string, defaultValue: any) => {
  try {
    const resp = localStorage.getItem(key);
    const data = JSON.parse(resp || "gf");
    if (data) {
      return data;
    }

    return [];
  } catch (error) {
    return defaultValue;
  }
};
