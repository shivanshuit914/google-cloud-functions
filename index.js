const uuidv4 = require('uuid/v4');

exports.getId = (req, res) => {
    switch (req.method) {
        case 'GET':
            res.status(200).send({id: uuidv4()});
            break;
        default:
            res.status(405).send({error: 'Error!'});
            break;
    }
};
