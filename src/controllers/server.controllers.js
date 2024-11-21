


const getRequest = (req, res) => {


};
const postRequest = (req, res) => {
    
};
const putRequest = (req, res) => {
  res.status(202).json({ message: "Updated" });
};
const deleteRequest = (req, res) => {
  res.status(204).json({ message: "Deleted" });
};

export { getRequest, postRequest, putRequest, deleteRequest };
