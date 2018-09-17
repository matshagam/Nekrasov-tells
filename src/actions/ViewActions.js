export const TOGGLE_VIEW = 'TOGGLE_VIEW'; // положили строку в константу

export const toggleView = listView => {
  return {
    type: TOGGLE_VIEW,
    payload: listView
  };
};
