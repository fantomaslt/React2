export const updatedObjetct = (
  oldObject: Object,
  updatedProperties: Object
) => {
  return {
    ...oldObject,
    ...updatedProperties,
  };
};
