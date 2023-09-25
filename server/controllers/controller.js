exports.Home = (req, res) => {
  const user = req.token;

  res.status(200).json({ message: `Home` });
};
