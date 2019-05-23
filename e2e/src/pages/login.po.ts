import { browser, by, element, protractor } from 'protractor';

export class LoginPage {
    
    expec = protractor.ExpectedConditions;

    inputEmail = element(by.xpath('//*[@id="inputEmail"]'));
    inputSenha = element(by.css('input[type=password]'));

    emailValido = 'jordan.pena1@gmail.com';
    emailInvalido = 'jordan@teste.com';
    senha = 'senha@teste';

    acessarPagina() {
        return browser.get('/login');
    }

    getEmail() {
        return this.inputEmail.getAttribute('value');
    }

    setEmailValido() {
        return this.inputEmail.sendKeys(this.emailValido);
    }

    setEmailInvalido() {
        return this.inputEmail.sendKeys(this.emailInvalido);
    }

    setSenha() {
        return this.inputSenha.sendKeys(this.senha);
    }

    clickLogin() {
        let btn = element(by.tagName('button'))
        browser.wait(this.expec.elementToBeClickable(btn), 3000)
        btn.click();
    }

}