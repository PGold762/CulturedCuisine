const router = require("express").Router();
const { Recipe, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const recipeData = await Recipe.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    // Serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render("homepage", {
      recipes,
      signed_in: req.session.signed_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/project/:id", async (req, res) => {
  try {
    const projectData = await Project.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const project = projectData.get({ plain: true });

    res.render("project", {
      ...project,
      signed_in: req.session.signed_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get("/profile", withAuth, async (req, res) => {
  try {
    // Find the signed in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      signed_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/signin", (req, res) => {
  // If the user is already signed in, redirect the request to another route
  if (req.session.signed_in) {
    res.redirect("/profile");
    return;
  }

  res.render("signin");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});


// Path for individual recipe
router.get("/recipe/:id", (req, res) => {
  try {
    res.render("id", {
      //   recipes,
      //   signed_in: req.session.signed_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Path for region // cusines
router.get("/cuisines/:cuisine", async (req, res) => {
  try {
    let recipeData = await Recipe.findAll({
      where: {
        title: req.params.cuisine,
      },
    });
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    console.log("Hello John")
    console.log(recipes);
    res.render("cuisinepage", {
      recipes,
      //   logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Path for individual recipe
router.get("/recipe/:id", (req, res) => {
  try {
    res.render("id", {
      //   recipes,
      //   logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
