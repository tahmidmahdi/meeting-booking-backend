const responseFilter = <T extends Record<string, string | undefined>>(
  data: T
): Partial<T> => {
  const filteredKeys = ['_id', 'password', '__v'];
  filteredKeys.forEach((key) => {
    if (key in data) {
      data[key as keyof T] = undefined as T[keyof T];
    }
  });
  return data;
};

export default responseFilter;
