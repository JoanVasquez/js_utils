export default (type, ...argNames) => {
  return (...values) => {
    let action = { type };
    if (argNames.length === values.length) {
      argNames.forEach((arg, index) => {
        action[argNames[index]] = values[index];
      });
    }
    return action;
  };
};
