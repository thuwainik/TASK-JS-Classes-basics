/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 *
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 *
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */
class Person {
  // continue the code here
  constructor(firstName, lastName, gender, birthYear) {
    this.firstName = `${firstName}`;
    this.lastName = `${lastName}`;
    this.gender = `${gender}`;
    this.birthYear = `${birthYear}`;
  }
  printname = () => console.log(`${this.firstName} ${this.lastName}`);
  calculateAge = (currentYear) => currentYear - this.birthYear;
}
const x = new Person("Khaled", "Thuwaini", "Male", 1995);
const y = new Person("Nora", "Aljasmi", "Female", 1985);
const z = new Person("Abeer", "Aljasmi", "Female", 1971);
x.printname();
console.log(x.calculateAge(2023));
y.printname();
console.log(y.calculateAge(2023));
z.printname();
console.log(z.calculateAge(2023));

/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array, you should not pass it in the constructor method, and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  // continue the code here
  constructor(title, duration, genre, rating = []) {
    this.title = `${title}`;
    this.duration = `${duration} (min)`;
    this.genre = `${genre}`;
    this.rating = rating;
  }
  rate = (rating) =>
    rating >= 0 && rating <= 10
      ? this.rating.push(rating)
      : "Rating should be restricted to be greater than 0 and less than 10.";
  averageRating = () =>
    this.rating.reduce((i, j) => i + j) / this.rating.length;
}
const m1 = new Movie("The Dark Knight", 120, "Action");
m1.rate(9);
m1.rate(9);
m1.rate(10);
m1.rate(10);
console.log(m1);
console.log(m1.averageRating());

/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
class Actor extends Person {
  constructor(firstName, lastName, gender, birthYear, movies = []) {
    super(firstName, lastName, gender, birthYear);
    this.movies = movies;
  }
  addMovie = (movie) => this.movies.push(movie);
}
const a1 = new Actor("Mal", "Taken", "Male", 1965);
a1.addMovie("taken");
console.log(a1);
a1.printname();
console.log(a1.calculateAge(2023));
