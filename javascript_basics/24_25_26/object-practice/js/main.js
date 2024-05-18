/* 
  1) Hello, Object
  Write the code, one line for each action:
  Create an empty object user.
  Add the property name with the value John.
  Add the property surname with the value Smith.
  Change the value of the name to Pete.
  Remove the property name from the object.
 */

  const user = {};
  user.name = "John";
  user.surname = "Smith";
  user.name = "Pete";
  delete user.name;
  console.log(user);

  /* 
  2) CHECK FOR EMPTINESS
  Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

  Should work like that:
  let schedule = {};
  alert( isEmpty(schedule) ); // true
  schedule["8:30"] = "get up";
  alert( isEmpty(schedule) ); // false
 */
  let objOne = {
    test: undefined
  };
  function isEmpty(obj) {
    return "test" in obj;
  }

 console.log(isEmpty(objOne));

  /* 
  3) SUM OBJECT PROPERTIES
  We have an object storing salaries of our team

  let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
 */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function alertSum(obj) {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  alert(sum);
}

// alertSum(salaries);

  /* 
  Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

  For instance:

    // before the call
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  multiplyNumeric(menu);

  // after the call
  menu = {
    width: 400,
    height: 600,
    title: "My menu"
  };

  Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

  P.S. Use typeof to check for a number here.
 */

  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
         obj[key] *= 2;
         console.log(obj[key])
      }
    }
  }

 multiplyNumeric(menu);

  /* 
  USING "this" in object literal
  Here the function makeUser returns an object.

  What is the result of accessing its ref? Why?
 */

  function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let userFour = makeUser();
  
  alert( userFour.ref.name ); // What's the result? A: An error - That’s because rules that set this do not look at object definition. Only the moment of call matters.

 /* 
  CREATE A CALCULATOR
  Create an object calculator with three methods:

  read() prompts for two values and saves them as object properties with names a and b respectively.
  sum() returns the sum of saved values.
  mul() multiplies saved values and returns the result.
 */


  let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );

  /* 
  CHAINING

  There’s a ladder object that allows to go up and down:

  let ladder = {
  step: 0,
  up() {
    this.step++;
  },
  down() {
    this.step--;
  },
  showStep: function() { // shows the current step
    alert( this.step );
  }
};

  Now, if we need to make several calls in sequence, can do it like this:
  ladder.up();
  ladder.up();
  ladder.down();
  ladder.showStep(); // 1
  ladder.down();
  ladder.showStep(); // 0

  Modify the code of up, down and showStep to make the calls chainable, like this:
  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
  Such approach is widely used across JavaScript libraries.
 */

  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() {
      alert( this.step );
      return this;
    }
  };

  ladder.up().up().down().showStep().down().showStep();