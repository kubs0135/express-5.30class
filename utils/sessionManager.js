const checkRole = (sysRole) => {
  return (req, res, next) => {
    const userRole = req.headers?.role ? req.headers.role.split(",") : [];
    const isValidRole = sysRole.some((role) => userRole.includes(role));
    if (!isValidRole) throw new Error("permission denied!!");
    next();
  };
};

module.exports = { checkRole };
