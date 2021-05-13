const UserModel = require("./model");

//get all existing data from the database
exports.getAllData = async (req, res) => {
  try {
    const data = await UserModel.find();
    res.status(200).json({
      message: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      message: err.messsage,
    });
  }
};

//Posts a new data to the database
exports.createNewData = async (req, res) => {
  try {
    const data = await UserModel.create(req.body);
    if (!data) {
      return res.status(404).json({
        message: "Data not found",
      });
    }
    res.status(201).json({
      message: "success",
      data,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

//get a particular data
exports.getData = async (req, res) => {
  try {
    const data = await UserModel.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "Data not found",
      });
    }
    res.status(200).json({
      message: "succcess",
      data,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

//Deletes an existing data
exports.deleteData = async (req, res) => {
  try {
    const data = await UserModel.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({
        message: "Data not found",
      });
    }
    res.status(200).json({
      message: "Data deleted successfully",
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

//Updates an existing data
exports.updateData = async (req, res) => {
  try {
    const data = await UserModel.findByIdAndUpdate(req.params.id, req.body, {
      runVaildators: true,
      new: true,
    });
    if (!data) {
      return res.status(404).json({
        message: "Data not found",
      });
    }
    res.status(200).json({
      message: "Data updated succesfully",
      data,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};
