const Texte = require('../models/texte.model')

exports.createText = (request, response) => {
    if (!request.body) {
      return response.status(400).send({
        message: 'Content can not be empty!'
      });
    }
  
    const texte = new Texte({
      username: request.body.username,
      title: request.body.title,
      content: request.body.content,
      email: request.body.email? request.body.email : null,
      phone: request.body.phone ? request.body.phone : null,
      rate: request.body.rate ? request.body.rate : null
    });
  
    return Texte.createText(texte, (error, data) => {
      if (error) {
        return response.status(500).send({
          message:
            error.message || 'Some error occurred while creating the Order.'
        });
      }
      return response.status(201).send(data);
    });
  };