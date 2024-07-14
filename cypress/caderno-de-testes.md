Caderno de teste

Teste 1: Parceria entre empresa e Credifit

- Dado que a empresa estabelece uma parceria com a credifit
- Quando todo o formulário é assinado e enviado para a credifit
- Então o sistema envia uma solicitação para a confirmação 
- Resultado Esperado: É estabelecido o beneficio de empréstimo consignado para os funcionários e a solicitação fica registrada no sistema da credifit.

Teste 2: Solicitação de empréstimo

- Dado que o funcionário da empresa conveniada acessem o aplicativo
- Quando preenchem os dados necessários para solicitação do empréstimo 
- Então clica no botão "solicitar empréstimo"
- Resultado Esperado: O funcionário visualiza o valor do financiamento e números de parcelas. 

Teste 3: Validação da margem disponível 

- Dado que o funcionário acessa o aplicativo da credifit
- Quando solicita o empréstimo 
- Então o sistema verifica a margem disponível que não pode exceder 35% do salario 
- Resultado O sistema mostra o valor disponível dentro do limite e os números de parcelas. 

Teste 4: Validação de score mínimo 

- Dado que o funcionário acesse o aplicativo da credifit
- Quando preenche a solicitação de empréstimo 
- Então o sistema verifica se o usuário possui o score mínimo para aprovação
- Resultado Esperado: após a verificação se o usuário estiver dentro das regras de score, o sistema da continuidade com a solicitação.


Teste 5: Concessão do empréstimo 

- Dado que o funcionário acesse o aplicativo da credifit 
- Quando preenche a solicitação de empréstimo
- Então  sistema verifica que o score do usuário é acima do mínimo, é enviado o contrato de empréstimo 
- Resultado Esperado: após a verificação, a credidfit concede o empréstimo para o funcionário.

Teste 6: Desconto na folha de pagamento

- Dado que o empréstimo é liberado para um funcionário 
- Quando a credifit coordena com a empresa conveniada
- Então é realizado o desconto da parcela na folha de pagamento 
- Resultado Esperado: a realização do desconto será feito em formas de parcelas descontados diretamente na folha de pagamento do funcionário.
