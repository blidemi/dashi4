let saram = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 3, name: "Маша" }
  ];

let userWithId2 = saram.find(user => user.id === 2);

console.log("Сарам с id 2:", userWithId2);


  
let filteredSaram = saram.filter(user => user.id > 1);

console.log("Отфильтрованные сарамдыль:", filteredSaram);
  
