// REST OPERATOR and SPREAD OPERATOR 
//spread->right side of operation
const l1=['book1','book2'];
const l2=['book3','book4'];
const all=[...l1,...l2];
console.log(all);//[ 'book1', 'book2', 'book3', 'book4' ]-> arrays will be combined
//rest->left side of equation
const allBooks=['book1', 'book2', 'book3', 'book4']
const [selected,finalised,...otherBooks]=allBooks
console.log(selected);//book1
console.log(finalised);//book2
console.log(otherBooks);//[ 'book3', 'book4' ]-> arrays will be destructed