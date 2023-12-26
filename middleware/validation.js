const validate = ({schema, dto}) => async (req, res, next) => {
  try {
    await schema.validate({
      body: req.body,
      query: req.query,
      params: req.params,
    });
    return next();
  } catch (err) {
    const message = err.message?.replaceAll("body.", "");
    return res.status(400).json({ type: err.name, message });
  }
};

exports.validate = validate;
