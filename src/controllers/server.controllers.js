import { Request } from "../models/request.models.js";

const getRequest = async (req, res) => {
  const message = await Request.find();
  res.status(200).json({ message });
};
const postRequest = async (req, res) => {
  const { message } = req.body;
  Request.create({ message });
  res.status(201).json({ message: 'Created' });
};
const putRequest = async (req, res) => {
  const { id } = req.params;

  const message = await Request.findByIdAndUpdate(id, req.body);

  res.status(202).json({message: 'Updated'});
};
const deleteRequest = async (req, res) => {
  const { id } = req.params;
  const message = await Request.findByIdAndDelete(id);

  res.status(204).json({ message: 'Deleted' });
};

export { getRequest, postRequest, putRequest, deleteRequest };
