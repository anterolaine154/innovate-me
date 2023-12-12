/* 
filename: complexCode.js
content: An advanced program to simulate a virtual city with various functionalities, including citizens, buildings, and events.
*/

// City class representing the virtual city
class City {
  constructor(name) {
    this.name = name;
    this.citizens = [];
    this.buildings = [];
    this.events = [];
  }

  addCitizen(citizen) {
    this.citizens.push(citizen);
  }

  removeCitizen(citizen) {
    const index = this.citizens.indexOf(citizen);
    if (index > -1) {
      this.citizens.splice(index, 1);
    }
  }

  addBuilding(building) {
    this.buildings.push(building);
  }

  removeBuilding(building) {
    const index = this.buildings.indexOf(building);
    if (index > -1) {
      this.buildings.splice(index, 1);
    }
  }

  addEvent(event) {
    this.events.push(event);
  }

  removeEvent(event) {
    const index = this.events.indexOf(event);
    if (index > -1) {
      this.events.splice(index, 1);
    }
  }

  displayCityInfo() {
    console.log(`City: ${this.name}`);
    console.log(`Number of Citizens: ${this.citizens.length}`);
    console.log(`Number of Buildings: ${this.buildings.length}`);
    console.log(`Number of Events: ${this.events.length}`);
  }
}

// Citizen class representing a citizen of the city
class Citizen {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.occupation}.`);
  }
}

// Building class representing a building in the city
class Building {
  constructor(name, location, type) {
    this.name = name;
    this.location = location;
    this.type = type;
  }
}

// Event class representing an event happening in the city
class Event {
  constructor(name, date, location) {
    this.name = name;
    this.date = date;
    this.location = location;
  }
}

// Create a new city
const myCity = new City("MyCity");

// Create citizens
const citizen1 = new Citizen("John Doe", 30, "Engineer");
const citizen2 = new Citizen("Jane Smith", 25, "Teacher");
const citizen3 = new Citizen("Mike Johnson", 40, "Doctor");
const citizen4 = new Citizen("Emily Davis", 35, "Lawyer");

// Add citizens to the city
myCity.addCitizen(citizen1);
myCity.addCitizen(citizen2);
myCity.addCitizen(citizen3);
myCity.addCitizen(citizen4);

// Create buildings
const building1 = new Building("Lifestyle Mall", "Downtown", "Shopping Mall");
const building2 = new Building("Central Park Residences", "Suburb", "Residential Complex");
const building3 = new Building("Tech Tower", "Business District", "Office Building");

// Add buildings to the city
myCity.addBuilding(building1);
myCity.addBuilding(building2);
myCity.addBuilding(building3);

// Create events
const event1 = new Event("City Concert", "2022-08-15", "City Park");
const event2 = new Event("Food Festival", "2022-09-25", "City Center");

// Add events to the city
myCity.addEvent(event1);
myCity.addEvent(event2);

// Display city information
myCity.displayCityInfo();

// Introduce citizens
citizen1.introduce();
citizen2.introduce();
citizen3.introduce();
citizen4.introduce();