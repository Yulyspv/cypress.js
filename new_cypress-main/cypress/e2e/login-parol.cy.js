describe('Автотесты форма авторизации', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ищем инпут логин и пищем в него верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ищем инпут пароль и пишем в него верный пароль
        cy.get('#loginButton').click(); // ищем кнопку войти и нажимаем
        cy.get('#messageHeader').should('be.visible'); // пользователь видит текст
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // ищем и проверяем текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик, пользователь его видит
         })
     

    it('Пользователь забыл пароль', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#forgotEmailButton').click(); // нажать Забыл пароль
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввести почту
        cy.get('#restoreEmailButton').click(); // клик на кнопку
        cy.get('#messageHeader').should('be.visible'); // пользователь видит текст
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // ищем и проверяем текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик
         })
       
    
    
    it('верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); //  зайти на сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ищем инпут логин и пищем в него верный логин
        cy.get('#pass').type('iLoveqastudio'); // ищем инпут пароль и пишем в него НЕверный пароль
        cy.get('#loginButton').click(); // ищем кнопку войти и нажимаем
        cy.get('#messageHeader').should('be.visible'); // пользователь видит текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // ищем и проверяем текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик, пользователь его видит
         })



    it('неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type('german@rolnikov.ru'); //  ищем инпут логин и пищем в него НЕверный логин
        cy.get('#pass').type('iLoveqastudio1'); // ищем инпут пароль и пишем в него верный пароль
        cy.get('#loginButton').click(); // ищем кнопку войти и нажимаем
        cy.get('#messageHeader').should('be.visible'); // пользователь видит текст
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // ищем и проверяем текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик, пользователь его видит
         })


    it('ВАЛИДАЦИЯ', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type('germandolnikov.ru'); // ищем инпут логин и пишем в него НЕвалидный логин
        cy.get('#pass').type('iLoveqastudio1'); // ищем инпут пароль и пишем в него пароль
        cy.get('#loginButton').click(); // ищем кнопку войти и нажимаем
        cy.get('#messageHeader').should('be.visible'); // пользователь видит текст
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // ищем и проверяем текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик, пользователь его видит
         })


    it('Строчные буквы', function () {
        cy.visit('https://login.qa.studio/'); // зайти на сайт
        cy.get('#mail').type('GerMan@Dolnikov.ru'); // ищем инпут логин и пишем в него БОЛЬШИЕ БУКВЫ
        cy.get('#pass').type('iLoveqastudio1'); // тщем инпут пароль и пишем в него  пароль
        cy.get('#loginButton').click(); // ищем кнопку войти и нажимаем
        cy.get('#messageHeader').should('be.visible'); // пользователь видит текст
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // ищем и проверяем текст
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // крестик, пользователь его видит
         })
})
