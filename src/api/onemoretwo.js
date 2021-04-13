export default (req, res) => {
  return res.json({"message": process.env.OTHER_GREAT_KEY})
};