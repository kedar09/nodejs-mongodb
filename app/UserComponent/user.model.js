var userUtility = require('./user.utility');

exports.getAllUser = function (req, result) {
    let connection = req.app.locals.connection;
    connection.collection('userinfo').find().toArray(function (error, resultOfQuery) {
            if (error) {
                console.log(error)
                result(error, null);
            } else {
                result(null, resultOfQuery);
            }
    });
};

exports.getUserById = function (req, result) {
    let connection = req.app.locals.connection;
    let userInfoId = req.params.userInfoId;
    connection.collection('userinfo').findOne({'userInfoId': +(userInfoId)}, function (error, resultOfQuery) {
            if (error) {
                result(error, null);
            } else {
                result(null, resultOfQuery);
            }
        });
};


exports.addUser = function (req, result) {
    let connection = req.app.locals.connection;
    connection.collection('userinfo').insertOne(req.body,
        function (error, records) {
            if (error) {
                result(error, null);
            } else {
                let resultAddUser = { message: 'UserInfo Inserted Successfully' };
                result(null, resultAddUser);
            }
        });
    
};

exports.updateUser = function (req, result) {
    let connection = req.app.locals.connection;
    let userInfoId = req.body.userInfoId;

    connection.collection('userinfo').find({
            "userInfoId" : +(userInfoId)
        }).count(function(error, recordsArray, fields){
            if (error){
                console.log("Error occured while fetching the data !")
            }else{
                if(recordsArray==0){
                    let resultUpdateUserById = {message: 'User not found'};
                    result(null, resultUpdateUserById);
                } else {
                    userUtility.updateUser(req, result);
                }
            }
    });
};

exports.deleteUserById = function (req, result) {
    let connection = req.app.locals.connection;
    let userInfoId = req.params.userInfoId;

    connection.collection('userinfo').find({
            "userInfoId" : +(userInfoId)
        }).count(function(error, recordsArray, fields){
            if (error){
                console.log("Error occured while fetching the data !")
            }else{
                if(recordsArray==0){
                    let resultDeleteUserById = {message: 'User not found'};
                    result(null, resultDeleteUserById);
                } else {
                    userUtility.deleteUserById(req, result);
                }
                // console.log(recordsArray);
            }
    });
};

