class DynamicArray {

  constructor(defaultSize=4) {
    this.capacity = defaultSize;
    this.length = 0;
    this.data = new Array(defaultSize);
  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    this.data[this.length] = val;
    this.length++;
    return this.length;
  }


  pop() {
    let val = this.data[this.length - 1]
    this.data[this.length - 1] = undefined;
    this.length--;
    return val;
  }

  shift() {
    
    // Your code here
  }

  unshift(val) {

    // Your code here
  }

  indexOf (val) {

    // Your code here
  }

  resize () {

    // Your code here
  }

}


module.exports = DynamicArray;
