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
  
  const getByName = (request, response) => {
    const nomeParam = request.params.nome
    // const filtro = { nome: nomeParam }
    const regex = new RegExp(nomeParam)
    // const filtro = { nome: /^t/ }
    const filtro = { nome: regex }

    contatosCollection.find(filtro, (error, contatos) => {
      if(error){
        return response.status(500).send(error)
      } else {
        // if(contatos.length)
        return response.status(200).send(contatos)
      }
    }
    )}
   const getById = (request, response) => {
    const idParam = request.params.id
    contatosCollection.findById(idParam, (error, contato) =>{
      if(error) {
        return response.status(500).send(error)
      } else {
        if(contato) {
        return response.status(200).send(contato)
        } else {
          return response.status(404).send('Contato não encontrado')
        }
      }
    })
   }
   const removeContato = (request, response) => {
    const remover = request.params.id
    contatosCollection.removeContato(remover, (error, contato) =>{
      if(error) {
        return response.status(500).send(error)
      } else {
        if(contato) {
        return response.status(200).send(contato)
        } else {
          return response.status(404).send('Contato não encontrado')
        }
      }
    })
   }
   const atualizaContato = (request, response) => {
     const atualizar = request.params.id
     const atualizaBody = request.body
     contatosCollection.findByIdAndUpdate(atualizar, atualizaBody, (error, contato) => {
      if(error) {
        return response.status(500).send(error)
      } else {
        if(contato) {
        return response.status(200).send(contato)
        } else {
          return response.status(404).send('Contato não encontrado')
        }
      }
     })
   }
module.exports = {
  getAll,
  getByName,
  add,
  getById,
  removeContato,
  atualizaContato
  
}
