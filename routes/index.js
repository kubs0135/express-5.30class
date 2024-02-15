const router = require("express").Router();
const blogRouter = require("../modules/blogs/blog.route");
const userRoute = require("../modules/users/user.route");
const categoryRoute = require("../modules/categories/category.route");
router.use("/api/v1/blogs", blogRouter);
router.use("/api/v1/users", userRoute);
router.use("/api/v1/categories", categoryRoute);

module.exports = router;
