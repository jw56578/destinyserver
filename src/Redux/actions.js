export const addBizz = (bizz) => {
  return {
    type: "ADD_BIZZ",
    value: bizz,
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
