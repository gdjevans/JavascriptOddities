class Course {
   #price;

   get price() {
      return '$' + this.#price;
   }

   set price(value) {
      if (value < 0) {
         throw 'Invalid value!';
      }
      this.#price = value;
   }

   constructor(courseTitle, coursePrice, courseLength) {
      this.title = courseTitle;
      this.price = coursePrice;
      this.length = courseLength;
   }
}

calculateValue() {
   return this.length/this.#price;
}

printSummary() {
   console.log(`Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`);
}

const jsCourse = new Course('Javascript', 50, 44);
const reactCourse = new Course('React', 80, 94);

console.log(jsCourse);
console.log(reactCourse);

console.log(jsCourse.calculateValue());
console.log(reactCourse.calculateValue());

jsCourse.printSummary();
reactCourse.printSummary();

class PracticalCourse extends Course {
   constructor(title, length, price, exercisesCount) {
      super(title, price, length); 
      this.numOfExercise = exercisesCount;
   }
}

const angularCourse = new PracticalCourse('Angular Course', 36, 50, 10);

console.log(angularCourse);
angularCourse.printSummary();

class TheorticalCourse extends Course {
   publish() {
      console.log('Publishing...');
   }
}

const flutterCourse = new TheorticalCourse('Flutter', 50, 48);

flutterCourse.printSummary();
flutterCourse.publish();