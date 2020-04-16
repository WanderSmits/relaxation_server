const { Router } = require("express");
const Profile = require("../models").profile;
const auth = require("../auth/middleware");

const router = new Router();

router.post(`/`, auth, async (req, res) => {
  const { interval, notification, totalTime, userId, dateSubmit } = req.body;

  console.log(
    "What are my values?",
    interval,
    notification,
    totalTime,
    userId,
    dateSubmit
  );

  //creates new Profile table with the values given from the form
  const postProfile = await Profile.create({
    interval: interval,
    duration_exercise: totalTime,
    start_time: dateSubmit,
    notification: notification,
    userId: userId,
  });

  return res.json({
    postProfile,
  });
});

module.exports = router;
