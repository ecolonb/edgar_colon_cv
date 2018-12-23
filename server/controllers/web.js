const home = (req, res) => {
  return res.sendFile('../../public/index.html');
};

module.exports = {
  home
};
