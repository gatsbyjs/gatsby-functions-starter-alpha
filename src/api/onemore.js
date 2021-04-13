export default (req, res) => {
  console.log("I am different");
  return res.json({"message": process.env.OTHER_GREAT_KEY})
};