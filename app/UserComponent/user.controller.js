var userModel = require('./user.model');

exports.getAllUser = function (req, res) {
    userModel.getAllUser(req, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.getUserById = function (req, res) {
    userModel.getUserById(req, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};


exports.addUser = function (req, res) {
    userModel.addUser(req, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.updateUser = function (req, res) {
    userModel.updateUser(req, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

exports.deleteUserById = function (req, res) {
    userModel.deleteUserById(req, function (error, result) {
        if (error) {
            res.send(error);
        } else {
            res.status(200).send(result);
        }
    });
};

