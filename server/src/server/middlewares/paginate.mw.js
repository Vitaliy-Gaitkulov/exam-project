module.exports = async (req, res, next) => {
  try {
    const {
      limit, offset
    } = req.body;

    req.pagination = {
      limit: limit >= 10 || limit <= 0 ? 10 : limit,
      offset: offset < 10 ? 0 : offset,
    };
    
    next();
  } catch (err) {
    next(err);
  }
};
