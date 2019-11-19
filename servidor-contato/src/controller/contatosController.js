const contatosCollection = require("../model/contatoSchema")

const getAll = (request, response) => {
    // response.status(200).send(model.agenda)
    console.log(request.url)
    contatosCollection.find((error,contatos) => {
      if(error){
        return response.status(500).send(error)
      } else {
        return response.status(200).send(contatos)
      }
    })
};

const add = (request, response) => {
  // novo objeto para nossa coleção
  const contatoDoBody = request.body
  const contato = new contatosCollection(contatoDoBody)
  
    contato.save((error) => {
      // save é usado para salvar o contato no banco de dados
      //(error !== null && error !== undefined)
      if(error) {
        return response.status(400).send(error)
      } else {
        return response.status(201).send(contato)
      }
    })
  }
  
  // let contato = request.body
  // let baseDados = model.agenda.contatos
  // contato.id = Math.random().toString(36).substr(-8)

  // if (!contato.nome || !contato.dataNascimento || !contato.celular) {
  //   response.status(400).send("Dados inválidos");
  // } else {
  //   if (baseDados.find(dado => dado.nome === contato.nome)) {
  //     response.status(400).send("Contato já cadastrado")
  //   } else {
  //     model.agenda.contatos.push(contato)
  //     response.status(201).send(contato)
  //   }
  // }

module.exports = {
  getAll,
  add
}
