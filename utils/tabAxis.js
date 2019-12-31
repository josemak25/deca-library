export default tabTitle => {
  return `xTab${tabTitle.charAt(0).toUpperCase() +
    tabTitle.substr(1, tabTitle.length)}`;
};
