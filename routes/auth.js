const express = require("express");

const router = express.Router();

 // middlewares
const { requireSignin, isAdmin } = require("../middlewares/auth.js");

// controllers
const { register,login , secret, updateProfile} = require("../controllers/auth.js");
const { insert, product } = require("../controllers/product.js");

router.get("/products", product);
router.post("/productInsert", insert);

router.post("/register", register);
router.post("/login", login);



router.get("/auth-check", requireSignin, (req, res) => {
    res.json({ ok: true , user: req.user });
});

router.get("/admin-check", requireSignin, isAdmin, (req, res) => {
    res.json({ ok: true });
});


// testing
router.get("/secret", requireSignin, isAdmin, secret);

router.put("/profile", requireSignin, updateProfile);



//localhost:8000/api/v1/register


module.exports = router;