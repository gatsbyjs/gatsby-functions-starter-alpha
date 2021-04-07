const sendgrid = require('@sendgrid/mail');
sendgrid.setApiKey(process.env.GATSBY_SENDGRID_API_KEY);
const msg = {
  from: process.env.GATSBY_SENDGRID_API_EMAIL
}

const handler = (req, res) => {
  try {
    if (req.method !== "POST") {
      res.json({message: "Try a POST!"})
    }

    console.log("body", req.body)

    if (req.body) {
      msg.to = req.body.to;
      msg.subject = req.body.subject;
      msg.text = req.body.text;
      msg.html = req.body.text;
    } 

    console.log("after", msg);

    return sendgrid
      .send(msg)
      .then(() => {
        res.status(200).json({
        message: "I will send email"
      })}, error => {
        console.error(error);
        if (error.response) {
          return res.status(500).json({
            error: error.response
          })
        }
      });
  } catch (err) {
    console.log(err);
    return res.status(500).json({message: "There was an error", error: err});
  }
}

module.exports = handler;