describe('Тестируем сайт с мебелью', function () {


it('Позитивный длинный автотест ', function () {
    cy.visit('https://testqastudio.me/');
    cy.get('.post-11342 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
    cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
    cy.get('.summary > .cart > .product-button-wrapper > .quantity > .increase > svg').click();
    cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
    cy.get('.cart-panel-content > .modal-header > .close-account-panel > .razzi-svg-icon > svg');
    cy.get('[href="https://testqastudio.me"]').click();
    cy.get('.post-11337 > .product-inner > .product-thumbnail > .woocommerce-LoopProduct-link > .attachment-woocommerce_thumbnail').click();
    cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
    cy.get('.summary > .cart > .product-button-wrapper > .single_add_to_cart_button').click();
    cy.get('.header-right-items > .header-cart > a > .razzi-svg-icon > svg').click();
    cy.get('.woocommerce-mini-cart__buttons > [href="https://testqastudio.me/cart/"]').click();
    cy.get('.checkout-button').click();
    cy.get('#billing_last_name').type('Воропаев');
    cy.get('#billing_first_name').type('Александр');
    cy.get('#billing_address_1').type('Москва');
    cy.get('#billing_city').type('Москва');
    cy.get('#billing_state').type('Московская');
    cy.get('#billing_postcode').type('141142');
    cy.get('#billing_phone').type('89688599143');
    cy.get('#billing_email').type('samvoropaev@gmail.com');
    cy.get('#place_order').click();
    cy.wait(5000);
    cy.contains('Ваш заказ принят. Благодарим вас.');

})
})