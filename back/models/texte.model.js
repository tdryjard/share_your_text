const db = require('./database')

const Texte = function createTexte(texte){
    this.username = texte.username;
    this.title = texte.title;
    this.content = texte.content;
    this.email = texte.email;
    this.phone = texte.phone;
    this.rate = texte.rate
}

Texte.createText = (texte, result) => {
  console.log(texte)
    db.query(
      `INSERT INTO texte SET ?`, texte, (error, dbResult) => {
        console.log(error)
        if (error) {
          return result({ error, status: 500 }, null);
        }
        return result(null, { id: dbResult.insertId, ...texte });
      }
    );
  };

  module.exports = Texte