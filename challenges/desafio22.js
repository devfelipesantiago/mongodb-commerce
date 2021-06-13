/*
Retorne o nome e a quantidade de vendas (vendidos) dos sanduíches em que o número de vendas é múltiplo de 5.
*/

db.produtos.find(
  { vendidos: { $mod: [5, 0] } },
  { _id: false, nome: true, vendidos: true },
);