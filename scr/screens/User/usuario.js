class User {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getEmail() {
        return this.email;
    }

    getAge() {
        return this.age;
    }

    // Additional methods can be added as per requirements
}

// Creating a new user instance
const user1 = new User("John Doe", "john@example.com", 30);

// Accessing user properties
console.log(user1.getName()); // Output: John Doe
console.log(user1.getEmail()); // Output: john@example.comg
console.log(user1.getAge()); // Output: 30