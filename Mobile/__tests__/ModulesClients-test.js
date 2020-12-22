'use strict';

import ModulesClients from '../modules/modules';

var forTest=new ModulesClients;
var currentState=[//начальный стейт
    {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
    {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
    {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
    {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
];
var testPerson=['Васильев', 'Василий', 'Васильевич', 500];

var resultTestState=[//стейт после тестового добавления клиента
    {id:101, fam:"Иванов", im:"Иван", otch:"Иванович", balance:200}, 
    {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
    {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
    {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
    {id:121, fam:"Васильев", im:"Василий", otch:"Васильевич", balance:500},
];

var resultStateAfterDel=[//стейт после тестового удаления клинта с id:101
    {id:105, fam:"Сидоров", im:"Сидор", otch:"Сидорович", balance:250}, 
    {id:110, fam:"Петров", im:"Пётр", otch:"Петрович", balance:180},
    {id:120, fam:"Григорьев", im:"Григорий", otch:"Григорьевич", balance:-220},
];

test('проверка функции добавления клиента', ()=>{
    expect(forTest.setNewClient(testPerson, currentState)).toEqual(resultTestState);
});

test('проверка функции редактирования клиента', ()=>{
    expect(forTest.editCurrentClient(currentState[0], currentState)).toEqual(currentState);
});

test('проверка функции удаления клиента', ()=>{
    expect(forTest.deleteCurrentClient(currentState[0], currentState)).toEqual(resultStateAfterDel);
});