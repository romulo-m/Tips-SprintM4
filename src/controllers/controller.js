import model from "../models/model.js";

const controller = (app) => {

  app.get('/dicas/aleatorio', (req, res) => {
    res.status(200).json(model.aleatorio())
  });

  app.get('/dicas', (req, res) => {
    res.status(200).json(model.allTips());
  });

  app.get('/dicas/:id', (req, res) => {
    let index = req.params.id;
    res.status(200).json(model.dicaId(index));
  });

  app.post('/dicas', (req, res) => {
    const body = req.body
    const dica = model.adicionarDica(body);
    res.status(201).json(
      {
        "id"  : dica,
        "msg" : "Item adionado com sucesso!"
      }
    );
  });

  
};

export default controller