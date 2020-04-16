const { Router } = require("express");
const Profile = require("../models").profile;
const auth = require("../auth/middleware");

const router = new Router();

router.post(`/`, auth, async (req, res) => {
  const { interval, notification, totalTime, userId } = req.body;

  console.log("What are my values?", interval, notification, totalTime, userId);

  const postProfile = await Profile.create({
    interval: interval,
    notification: notification,
    totalTime: totalTime,
    userId: userId,
  });

  return res.json({
    postProfile,
  });
});

module.exports = router;
