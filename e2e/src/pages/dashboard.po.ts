import { browser, by, element } from 'protractor';

export class DashboardPage {

    acessarPagina() {
        return browser.get('/dashboard');
    }

    getSaudacao() {
        return element(by.css('h1')).getText();
    }

}