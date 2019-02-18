const uuidv4 = require('uuid/v4');

exports.user = (req, res) => {
    switch (req.method) {
        case 'GET':
          handleGET(req, res);
          break;
        default:
          res.status(405).send({error: 'Error!'});
          break;
      }
};

function handleGET(req, res) {
    res.status(200).send({user: uuidv4()});
}
