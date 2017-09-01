
Feature('Subração');

Scenario('1 - 1 = 0', (I) => {
    I.amOnPage('/');
    I.click('//*[@id="tecla1"]');
    I.click('/html/body/table/tbody/tr[4]/td[4]/button');
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('0', '//*[@id="display"]');
});

Scenario('001 - 1 = 0', (I) => {
    I.amOnPage('/');    
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="tecla1"]');
    I.click('/html/body/table/tbody/tr[4]/td[4]/button');
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('0', '//*[@id="display"]');
});

Scenario('120 - 20 = 100', (I) => {
    I.amOnPage('/');    
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('/html/body/table/tbody/tr[4]/td[4]/button');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('100', '//*[@id="display"]');
});

Scenario('120 - 20 - 60 = 40', (I) => {
    I.amOnPage('/');    
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('/html/body/table/tbody/tr[4]/td[4]/button');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('/html/body/table/tbody/tr[4]/td[4]/button');
    I.click('//*[@id="tecla6"]');
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('40', '//*[@id="display"]');
});

Scenario('120 - 20 = 100 - 60 = 40', (I) => {
    I.amOnPage('/');    
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('/html/body/table/tbody/tr[4]/td[4]/button');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('100', '//*[@id="display"]');    
    I.click('/html/body/table/tbody/tr[4]/td[4]/button');
    I.click('//*[@id="tecla6"]');
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('40', '//*[@id="display"]');
});

Scenario('120 - 20,5 = 119,5 - 60 = 59,5', (I) => {
    I.amOnPage('/');    
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('/html/body/table/tbody/tr[4]/td[4]/button');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('/html/body/table/tbody/tr[5]/td[1]/button');
    I.click('//*[@id="tecla5"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('99,5', '//*[@id="display"]');    
    I.click('/html/body/table/tbody/tr[4]/td[4]/button');
    I.click('//*[@id="tecla6"]');
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('39,5', '//*[@id="display"]');
});

Scenario('10 - 50 = -40', (I) => {
    I.amOnPage('/');
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="tecla0"]');
    I.click('/html/body/table/tbody/tr[4]/td[4]/button');
    I.click('//*[@id="tecla5"]');
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('-40', '//*[@id="display"]');
});