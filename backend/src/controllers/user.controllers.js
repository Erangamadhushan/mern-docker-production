export const getUsers = (req, res) => {
  res.json({
    users: ["User1", "User2"]
  });
};