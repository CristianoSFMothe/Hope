
/* eslint-disable no-undef */
import data from '../fixtures/orphanages.json'

describe('Cadastro de orfanatos', () => {
  context('cadastro com sucesso', () => {
    it('deve cadastrar um novo orfanato', () => {
      const orphanage = data.create

      cy.deleteMany({ name: orphanage.name }, { collection: 'orphanages' })
      cy.gotoCreate()
      cy.createOrphanage(orphanage)
      cy.popupHaveText('Orfanato cadastrado com sucesso.')
    });
  });

  context('cadastro com nome duplicado', () => {
    it('não deve cadastrar orfanato nome duplicado', () => {
      const orphanage = data.duplicate

      cy.deleteMany({ name: orphanage.name }, { collection: 'orphanages' })
      cy.postOrphanage(orphanage)
      cy.gotoCreate()
      cy.createOrphanage(orphanage)
      cy.popupHaveText('Já existe um cadastro com o nome: ' + orphanage.name)
    });
  });

  context('campos obrigatórios', () => {
    it('não deve cadastrar orfanato se campo nome não for preenchido', () => {
      let orphanage = data.required

      delete orphanage.name

      cy.gotoCreate()
      cy.createOrphanage(orphanage)

      cy.alertHaveText('Nome', 'Campo obrigatório')
    });

    it('não deve cadastrar orfanato se sobre não for preenchido', () => {
      let orphanage = data.required

      delete orphanage.description

      cy.gotoCreate()
      cy.createOrphanage(orphanage)

      cy.alertHaveText('Sobre', 'Campo obrigatório')
    });

    it('não deve cadastrar orfanato se anexar a imagem', () => {
      let orphanage = data.required

      delete orphanage.image

      cy.gotoCreate()
      cy.createOrphanage(orphanage)

      cy.alertHaveText('Fotos', 'Envie pelo menos uma foto')
    });

    it('não deve cadastrar orfanato se horário não for informado', () => {
      let orphanage = data.required

      delete orphanage.opening_hours

      cy.gotoCreate()
      cy.createOrphanage(orphanage)

      cy.alertHaveText('Horário', 'Campo obrigatório')
    });

    it('não deve cadastrar orfanato se os campos obrigatórios nao forem preenchidos', () => {
      let orphanage = data.required

      delete orphanage.name
      delete orphanage.description
      delete orphanage.image
      delete orphanage.opening_hours

      cy.gotoCreate()
      cy.createOrphanage(orphanage)

      cy.alertHaveText('Nome', 'Campo obrigatório')
      cy.alertHaveText('Sobre', 'Campo obrigatório')
      cy.alertHaveText('Fotos', 'Envie pelo menos uma foto')
      cy.alertHaveText('Horário', 'Campo obrigatório')
    });
  });
});

