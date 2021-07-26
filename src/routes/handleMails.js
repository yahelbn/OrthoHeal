//relevant table: Companies
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/send", async (req, res) => {
  main(req).catch(console.error);
});

router.get("/*", (req, res) => {
  console.log("no such route");
  res.status(404).send("no such route");
});

async function main(req) {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASSWORD_EMAIL,
      // user: "orthohealinfo@gmail.com",
      // pass: "Amir1967",
    },
  });

  let mailDetails = {
    from: process.env.USER_EMAIL,
    to: ["yahelbn3123@gmail.com", "Info.orthoheal@shen-zen.co.il"],
    subject: "Ortho Heal - Info (Customer interested)",
    // text: "Node.js testing mail for GeeksforGeeks",
    html: `<div><h1>Customer interested</h1><br> <h4>Details of relevant customer:</h4><br> <label>${req.body.sender.fullName}</label> <br> <label>${req.body.sender.telephone}</label> <br><label>${req.body.sender.email}</label> </div>`,
  };

  await mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
}

module.exports = router;
