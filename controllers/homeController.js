exports.getHome = (req, res) => {
  res.render("index", { submitted: false });
};

exports.handleForm = (req, res) => {
  const { name, email } = req.body;
  res.render("index", { name, email, submitted: true });
};
