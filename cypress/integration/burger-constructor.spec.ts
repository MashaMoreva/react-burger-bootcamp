export { }

describe('service is available', function () {
   beforeEach(function () {
      cy.viewport(1920, 1024)
   });

   it('should be available localhost:3000', function () {
      cy.visit('/')
      cy.contains('Соберите бургер')
   });

   it('should open ingredient details', function () {
      cy.get('[class^=burger-ingredients-item_item]').first().click()
      cy.contains('Детали ингредиента')
   });

   it('should close ingredient details by button', function () {
      cy.get('[class^=modal_closeButton]').click();
      cy.visit('/');
   });

   it('should tab', function () {
      cy.get('[class^=tab').last().click();
      cy.wait(1000).get('[class^=tab').first().click();
   })

   it('should scroll', function () {
      cy.get('[class^=burger-ingredients-sets_scroll').scrollTo(0, 500).wait(1000)
      cy.get('[class^=tab]').last().click()
   });

   it('should dragndrop ingredients and set bun', function () {
      cy.get('[class^=burger-ingredients-item_item]').eq(0).drag('[class^=burger-constructor_burger_constructor]')
      cy.get('[class^=burger-ingredients-item_item]').eq(4).drag('[class^=burger-constructor_burger_constructor]')
      cy.get('[class^=burger-ingredients-item_item]').eq(1).drag('[class^=burger-constructor_burger_constructor]')
      cy.get('[class^=burger-ingredients-item_item]').eq(7).drag('[class^=burger-constructor_burger_constructor]')
      cy.get('[class^=burger-ingredients-item_item]').eq(11).drag('[class^=burger-constructor_burger_constructor]')
      cy.get('[class^=burger-ingredients-item_item]').eq(4).drag('[class^=burger-constructor_burger_constructor]')
      cy.get('[class^=burger-ingredients-item_item]').eq(0).drag('[class^=burger-constructor_burger_constructor]')
   })

   it('should dragndrop constructor', function () {
      cy.get('[class^=burger-constructor-element_constructor_element]').eq(0)
         .drag('[class^=burger-constructor-element_constructor_element]')
      cy.get('[class^=burger-constructor-element_constructor_element]').eq(1)
         .drag('[class^=burger-constructor-element_constructor_element]')
   })

   it('should delete ingredient from constructor', function () {
      cy.get('[class^=constructor-element__action]').eq(2).click()
      cy.get('[class^=burger-constructor_order_list]').eq(4).and('not.exist')
   })

   it('should open order number', function () {
      cy.get('button').contains('Оформить заказ').click()
   });

   it('should authorization', function () {
      const email = 'mmiskova@mail.ru';
      const password = '230618';
      cy.get('input').first().type(email)
      cy.get('input').last().type(password)
      cy.get('button').click();
   })

   it('should open order number', function () {
      cy.wait(1000).get('button').contains('Оформить заказ').click()
   });

   it('should order number visible and close ', function () {
      cy.wait(30000).get('[class^=order-details_order_identifier]').and('exist')
      cy.get('[class^=modal_closeButton]').click();
      cy.get('[class^=burger-constructor-element_constructor_element]').and('not.exist');
   });
})


