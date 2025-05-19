const User = require('../models/User');
const { OAuth2Client } = require('google-auth-library');
const { createPDF } = require('../utils/pdfGenerator');
const fs = require('fs');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

exports.loginWithGoogle = async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID
  });
  const { name, email, sub } = ticket.getPayload();

  let user = await User.findOne({ googleId: sub });
  if (!user) {
    user = await User.create({ name, email, googleId: sub });
  }

  res.json({ message: "Login success", user });
};

exports.downloadPDF = async (req, res) => {
  const pdfPath = await createPDF("User Data Report");
  res.download(pdfPath);
};