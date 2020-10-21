export const addBizz = (bizzes) => {
  return {
    type: "ADD_BIZZ",
    value: bizzes,
  };
};

export const removeBizz = (index) => {
  return {
    type: "REMOVE_BIZZ",
    value: index,
  };
};

export const login = (bool) => {
  return {
    type: "LOGIN",
    value: bool,
  };
};
