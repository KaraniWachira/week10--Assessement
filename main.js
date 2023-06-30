// Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

function mixedArray(array) {
    let summation = 0;
    for (let i = 0; i <= array.length; i++) {
        if (typeof array[i] === "number") {
            summation = summation + array[i];
        }
    }
    return summation;
}

console.log(mixedArray([197, false, 3, "A", "b", 4]));


// Write a JavaScript program to find the leap years in a given range of years.

function findLeapYear(beginYear, endYear) {
    let rangeOfYear =[];
    try {
        for (let i = beginYear; i <= endYear; i++)
        {
           rangeOfYear.push(i);
       }
       let new_array = [];
   
       rangeOfYear.forEach(
           function (year) {
               if (sampleLeapYear(year))
               new_array.push(year);
           });
           return new_array;
        
    } catch (error) {
        console.log(error);
    }
    
}

function findLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
        return year;
    } else {
        return ("no leap year found in that range!")
    }
}

console.log(findLeapYear (2022, 2030));

// Write a JavaScript program that creates a class called 'Employee' with properties for name and salary.
//  Include a method to calculate annual salary. Create a subclass called 'Manager' that inherits from the 'Employee' class and adds an additional property for department. 
// Override the annual salary calculation method to include bonuses for managers. Create two instances of the 'Manager' class and calculate their annual salary.


class Employee { 
    constructor(appellation, salary) {
        this.appellation = appellation;
        this.salary = salary;
    }
    annualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee { 
    constructor(appellation, salary, department) {
        super(appellation, salary);
        this.department = department;
    }
    annualSalary() {
        let bonus = 20;
        return this.salary * 12 + bonus;
    }
}

const managerSales = new Manager("Allan", 10, "Sales");
const managerMarketing = new Manager("Ochieng", 20, "Marketing");

console.log("Total salary for sales manager is:", managerSales.annualSalary());
console.log("Total salary for marketing manager is:", managerMarketing.annualSalary());



// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

function giveCallback(callback) {
    setTimeout(callback, 2000);
}
function output() {
    alert("This message displays after 2 seconds!");
}

giveCallback(output);




















