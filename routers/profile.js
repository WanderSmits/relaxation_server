const { Router } = require("express");
const Profile = require("../models").profile;
const Session = require("../models").sessions;
const UserSession = require("../models").userSessions;
const auth = require("../auth/middleware");

const router = new Router();

router.get(`/:id`, auth, async (req, res) => {
  try {
    const getUserSessions = await UserSession.findAll({
      where: { userId: req.params.id },
      include: { model: Session },
    });

    return res.json({ getUserSessions });
  } catch (e) {
    console.log(e);
  }
});

router.post(`/`, auth, async (req, res) => {
  const { interval, notification, totalTime, userId, dateSubmit } = req.body;

  //creates new Profile table with the values given from the form
  const postProfile = await Profile.create({
    interval: interval,
    duration_exercise: totalTime,
    start_time: dateSubmit,
    notification: notification,
    userId: userId,
  });

  const postSession = await Session.create({
    date: dateSubmit,
  });

  //counts rows of the Session table to get the sessionId
  const getSessionId = await Session.count();

  const postUserSession = await UserSession.create({
    userId: userId,
    sessionId: getSessionId,
  });

  return res.json({
    postProfile,
    postSession,
    postUserSession,
  });
});

module.exports = router;
