class Rectangle {
  width: number;
  height: number;

  constructor (width:number, height:number){
    this.width = width
    this.height = height
  }
  getArea(){
    return this.height * this.width
  }
}

const rectangle1 = new Rectangle(10, 20)
