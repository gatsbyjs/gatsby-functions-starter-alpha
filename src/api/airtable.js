const Airtable = require('airtable')

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_KEY,
})

const db = Airtable.base(process.env.AIRTABLE_DB)

const handler = (req,res) => {
  console.log("All your base belong to us.")
  try {

    if (req.method !== "POST") {
      res.status(404).json({message: "This endpoint requires a POST"})
    }

    const data = req.body;

    if (!data) { return res.status(500).json({ error: "There isn't any data."})}

    db('Submissions').create([
      {
        fields: {
          Name: req.body.name,
          Email: req.body.email,
          Message: req.body.message
        }
      }
    ], (err, records) => {
      if(err) {
        res.json({message: "Error adding record to Airtable.", error: err.message})
      } 

      console.log("Records", records);

      res.json({message: `Successfully submitted message`});
    });

  } catch (err) {
    console.log(err);
    res.json({ message: "There has been a big error.", error: err});
  }
}

module.exports = handler;