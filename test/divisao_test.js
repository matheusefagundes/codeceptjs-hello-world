
Feature('Divisão');

Scenario('1 / 1 = 1', (I) => {
    I.amOnPage('/');
    I.click('//*[@id="tecla1"]');
    I.click('/html/body/table/tbody/tr[2]/td[4]/button');
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('1', '//*[@id="display"]');
});

Scenario('10,5 / 2 = 5,25', (I) => {
    I.amOnPage('/');
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="tecla0"]');
    I.click('/html/body/table/tbody/tr[5]/td[1]/button');
    I.click('//*[@id="tecla5"]');    
    I.click('/html/body/table/tbody/tr[2]/td[4]/button');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('5,25', '//*[@id="display"]');
});