/* 
Create an object called shape that has the type property and a getType() method.
*/

const shape = {
  type: "Circle",
  getType() {
    return this.type;
  },
};

console.log(shape.getType()); // returns "Circle";
