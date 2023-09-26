let ob1 = {
    name: "person1", age : 5
};
let ob2 = {
    age : 5, name: "person1"
};
console.log(ob1 === ob2);
console.log(JSON.stringify(ob1) === JSON.stringify(ob2));
