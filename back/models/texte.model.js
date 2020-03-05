const db = require('./database')

const Texte = function createTexte(texte){
    this.username = texte.username;
    this.title = texte.title;
    this.content = texte.content;
    this.email = texte.email;
    this.phone = texte.phone;
    this.rate = texte.rate;
    this.rate_done = texte.rate_done;
    this.collab = texte.collab
}

Texte.createText = (texte, result) => {
    db.query(
      `INSERT INTO texte SET ?`, texte, (error, dbResult) => {
        if (error) {
          return result({ error, status: 500 }, null);
        }
        return result(null, { id: dbResult.insertId, ...texte });
      }
    );
  };

Texte.findText = result => {
  db.query('SELECT * FROM texte', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    return result(null, dbResult);
  });
};

Texte.findTextCollab = result => {
  db.query('SELECT * FROM texte WHERE collab = 1', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    return result(null, dbResult);
  });
};

Texte.updateText = (textId, texte, result) => {
  db.query('UPDATE texte SET ? WHERE id = ?', [texte, textId], (error, response) => {
    if (error) {
      return result(error, null);
    }

    if (response.affectedRows === 0) {
      return result({ kind: 'not_found' }, null);
    }

    return result(null, { textId: Number(textId), ...texte });
  });
};

module.exports = Texte