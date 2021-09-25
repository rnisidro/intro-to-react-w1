class Stack {
    constructor() {
      this.foods = [];
    }
    
    push(newFood) {
      return this.foods.push(newFood);
    }
    
    pop() {
      if(this.foods.length == 0) {
        console.log('Queue is currently empty.');
      }
      return this.foods.pop();
    }
    
    check() {
      return console.log(this.foods);
    }
}

const my_stack = new Stack();
my_stack.push('Milk');
my_stack.push('Eggs');
my_stack.push('Strawberry');
my_stack.check();
my_stack.pop();
my_stack.check();
my_stack.pop();
my_stack.check();
my_stack.pop();
my_stack.check();
my_stack.pop();