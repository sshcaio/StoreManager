const nameValidation = (request, response, next) => {
  const { name } = request.body;
  if (!name) {
    return response.status(400).json({
      message: '"name" is required',
    });
  }

  const NAME_MIN_LENGTH = 5;
  if (name.length < NAME_MIN_LENGTH) {
    return response.status(422).json({
      message: '"name" length must be at least 5 characters long',
    });
  }

  next();
};

module.exports = nameValidation;