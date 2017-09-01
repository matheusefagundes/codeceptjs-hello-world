
Feature('Clear');

Scenario('Botão limpar limpa', (I) => {
    I.amOnPage('/');
    I.click('//*[@id="tecla1"]');
    I.see('1', '//*[@id="display"]');
    I.click('//*[@id="teclaLimpar"]');
    I.see('0', '//*[@id="display"]');    
});
