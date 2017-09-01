
Feature('Soma');

Scenario('1 - 1 = 0', (I) => {
    I.amOnPage('/');
    I.click('//*[@id="tecla1"]');
    I.click('/html/body/table/tbody/tr[5]/td[4]/button');
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('2', '//*[@id="display"]');
});

Scenario('001 + 1 = 2', (I) => {
    I.amOnPage('/');    
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="tecla1"]');
    I.click('/html/body/table/tbody/tr[5]/td[4]/button');
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('2', '//*[@id="display"]');
});

Scenario('120 + 20 = 140', (I) => {
    I.amOnPage('/');    
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('/html/body/table/tbody/tr[5]/td[4]/button');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('140', '//*[@id="display"]');
});

Scenario('120 + 20 + 60 = 200', (I) => {
    I.amOnPage('/');    
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('/html/body/table/tbody/tr[5]/td[4]/button');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('/html/body/table/tbody/tr[5]/td[4]/button');
    I.click('//*[@id="tecla6"]');
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('200', '//*[@id="display"]');
});

Scenario('120 + 20 = 140 + 60 = 200', (I) => {
    I.amOnPage('/');    
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('/html/body/table/tbody/tr[5]/td[4]/button');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('140', '//*[@id="display"]');    
    I.click('/html/body/table/tbody/tr[5]/td[4]/button');
    I.click('//*[@id="tecla6"]');
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('200', '//*[@id="display"]');
});

Scenario('120 + 20,5 = 140,5 + 60 = 200,5', (I) => {
    I.amOnPage('/');    
    I.click('//*[@id="tecla1"]');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('/html/body/table/tbody/tr[5]/td[4]/button');
    I.click('//*[@id="tecla2"]');
    I.click('//*[@id="tecla0"]');
    I.click('/html/body/table/tbody/tr[5]/td[1]/button');
    I.click('//*[@id="tecla5"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('140,5', '//*[@id="display"]');    
    I.click('/html/body/table/tbody/tr[5]/td[4]/button');
    I.click('//*[@id="tecla6"]');
    I.click('//*[@id="tecla0"]');
    I.click('//*[@id="teclaIgual"]');
    I.see('200,5', '//*[@id="display"]');
});