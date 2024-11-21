import { Request } from "../models/request.models";


const getRequest = async(req, res) => {
 const message = await Request.find()
 res.status(200).json({message})


};
const postRequest = async(req, res) => {
    const {message} = req.body
    Request.create({message})
    res.status(201).json({message})

};
const putRequest = (req, res) => {
  res.status(202).json({ message: "Updated" });
};
const deleteRequest = (req, res) => {
  res.status(204).json({ message: "Deleted" });
};

export { getRequest, postRequest, putRequest, deleteRequest };
