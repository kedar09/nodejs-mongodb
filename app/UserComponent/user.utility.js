exports.deleteUserById= function(req, result) {
    let connection = req.app.locals.connection;
    let userInfoId = req.params.userInfoId;

    connection.collection('userinfo').deleteOne( { "userInfoId" : +(userInfoId) }, function (error, records) {
            if (error) {
                result(error, null);
            } else {
                let resultDeleteUserById = { message: 'UserInfo Deleted Successfully' };
                result(null, resultDeleteUserById);
            }
        });
}

exports.updateUser= function(req, result) {
    let userInfoId = req.body.userInfoId;
    delete req.body.userInfoId;
    let connection = req.app.locals.connection;
    connection.collection('userinfo').updateOne({'userInfoId': +(userInfoId)},{ $set: req.body },
        function (error, records) {
            if (error) {
                console.log(error)
                result(error, null);
            } else {
                let resultUpdateUser = { message: 'UserInfo Updated Successfully' };
                result(null, resultUpdateUser);
            }
        });
}