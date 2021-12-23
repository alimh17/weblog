export const darkModeAction = () => {
  return (dispatch, getState) => {
    return dispatch({ type: "DARK_MODE", payload: !getState().darkMode });
  };
};
