import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { LoginPage } from '../pages/login.po';
import { DashboardPage } from '../pages/dashboard.po';

let loginPage: LoginPage;
let dashPage: DashboardPage;

Before(() => {
    loginPage = new LoginPage();
    dashPage = new DashboardPage();
});

Given(/^que estou na página de Login$/, async () => {
    await loginPage.acessarPagina();
});

When(/^eu informo dados válidos$/, async () => {
    await loginPage.setEmailValido();
    await loginPage.setSenha();
});

When(/^eu informo dados inválidos$/, async () => {
    await loginPage.setEmailInvalido();
    await loginPage.setSenha();
});

When(/^clico em login$/, async ()  => {
    await loginPage.clickLogin();
  });

Then(/^eu tenho acesso a Dashboard$/, async () => {
    expect(await dashPage.getSaudacao()).to.equal('Seja bem vindo!');
});

Then('eu vejo a mensagem {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
  });