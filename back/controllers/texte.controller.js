const Texte = require('../models/texte.model')

exports.createText = (request, response) => {
    if (!request.body) {
      return response.status(400).send({
        message: 'Content can not be empty!'
      });
    }

  
    const texte = new Texte({
      username: request.body.username ? request.body.username: null,
      title: request.body.title ? request.body.title : null,
      content: request.body.content ? request.body.content : null,
      email: request.body.email ? request.body.email : null,
      phone: request.body.phone ? request.body.phone : null,
      rate: request.body.rate ? request.body.rate : null,
      rate_done: request.body.rate_done ? request.body.rate_done : null
    });
  
    return Texte.createText(texte, (error, data) => {
      if (error) {
        return response.status(500).send({
          message:
            error.message || 'Some error occurred while creating the text.'
        });
      }
      console.log(data)
      return response.status(201).send(data);
    });
  };

exports.findText = (request, response) => {
  Texte.findText((error, data) => {
    if (error) {
      response.status(500).send({
        message: error.message || 'Some error occurred while retrieving text.'
      });
    }
    // Envoi de la réponse
    return response.status(200).send(data);
  });
};

exports.updateText = (request, response) => {
  Texte.updateText(request.params.textId, (error, data) => {
    if (error) {
      if (error.kind === 'not_found') {
        response.status(404).send({
          message: `Not found user with id ${request.params.textId}.`
        });
      } else {
        response.status(500).send({
          message: `Error updating user with id ${request.params.textId}`
        });
      }
    }
    console.log(data)
    return response.status(201).send(data);
  });
};