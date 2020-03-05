const db = require('./database')

const Texte = function createTexte(texte){
    this.username = texte.username;
    this.title = texte.title;
    this.content = texte.content;
    this.email = texte.email;
    this.phone = texte.phone;
    this.rate = texte.rate;
    this.rate_done = texte.rate_done;
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

Texte.findText = result => {
  db.query('SELECT * FROM texte', (error, dbResult) => {
    if (error) {
      return result(error, null);
    }

    return result(null, dbResult);
  });
};

Texte.updateText = (textId, texte, result) => {
  console.log(`UPDATE texte SET ${texte} WHERE id = 4`)
  db.query('UPDATE texte SET ? WHERE id = ?', [texte, textId], (error, response) => {
    if (error) {
      return result(error, null);
    }

    if (response.affectedRows === 0) {
      return result({ kind: 'not_found' }, null);
    }

    return result(null, { id: Number(id), ...Texte });
  });
};

module.exports = Texte