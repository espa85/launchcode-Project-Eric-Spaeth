/*

I've had the basic layout for this application in C++ for a while, as it was a project
I had started a while back in C++, but never really did anything with it. So, converting it
to JavaScript wasn't particularly difficult.
I had higher hopes for it, but I thought it was clunky to store everything in a simple array
and did not work with or populate a data base, but I don't have that knowledge yet, so I
couldn't go where I thought I wanted to go with it.  I'm hopefull as I progress through the
other Units that I'll be able to shape the vision more completely.

*/

const readline = require('readline-sync');

let allDoctors = []; 
// creating an empty array to store doctor information

let running = true; 
// using a boolean to control the loop

while (running) { 
  // while loop continues until user exits (i.e. running=false)
  // drives program flow based on boolean value
  
 // printing menu as template literal
  let menu = (`
  \n--- Doctor Credential Tracker ---
  1.\tAdd New Doctor
  2.\tEdit Doctor Info
  3.\tView One Doctor
  4.\tView All Doctors
  5.\tExit
  `);
  console.log(menu);

  let choice = readline.questionInt("Choose an option: "); 
  // reading a number and storing it as a numeric value (number type)

  // using if statements to direct program actions
  if (choice === 1) { 
    
    console.log("\n--- Add New Doctor ---");

    let firstName = readline.question("Doctor's First Name: "); 
    // storing user input as a string
    let lastName = readline.question("Doctor's Last Name: "); 
    // these string values will be joined later in output

    let credentialed = readline.question("Is the doctor credentialed? (yes/no): ").toLowerCase() === "yes"; 
    // converts string input to a boolean using comparison
    // `.toLowerCase()` ensures case-insensitive match

    let anniversary = readline.question("Credential Anniversary Date (YYYY-MM-DD): "); 
    // using a string to store a date

    allDoctors.push([[firstName, lastName], credentialed, anniversary]); 
    // pushing a new array of mixed types (array, boolean, string) into the master array

    console.log("Doctor added successfully.");
    // simple output string

  } else if (choice === 2) {
    console.log("\n--- Edit Doctor Info ---");

    let searchLast = readline.question("Enter the doctor's last name to edit: ").toLowerCase(); 
    // string manipulation and case normalization
    // string used as search criteria

    let index = -1;

    for (let i = 0; i < allDoctors.length; i++) { 
      // using a for loop to search for a match
      if (allDoctors[i][0][1].toLowerCase() === searchLast) {
        index = i;
        break;
      }
    }

    if (index === -1) {
      console.log("Doctor not found.");
    } else {
      let changeCred = readline.question("Change credentialed status? (yes/no): ").toLowerCase(); 
      if (changeCred === "yes") {
        let newStatus = readline.question("Is the doctor credentialed? (yes/no): ").toLowerCase();
        allDoctors[index][1] = (newStatus === "yes"); 
        // updating boolean value in nested array
        // working with booleans
      }

      let changeDate = readline.question("Change anniversary date? (yes/no): ").toLowerCase(); 
      if (changeDate === "yes") {
        let newDate = readline.question("New anniversary date (YYYY-MM-DD): ");
        allDoctors[index][2] = newDate; 
        // updating string value by index
        // represents a date as text
      }

      console.log("Doctor info updated.");
    }

  } else if (choice === 3) {
    console.log("\n--- View One Doctor ---");
    let searchLast = readline.question("Enter doctor's last name: ").toLowerCase(); 
    // using string input and string methods for matching

    let found = false;

    for (let i = 0; i < allDoctors.length; i++) { 
      // searching through array
      if (allDoctors[i][0][1].toLowerCase() === searchLast) {
        console.log(`\nName: ${allDoctors[i][0][0]} ${allDoctors[i][0][1]}`); 
        // Template Literals used to combine strings and variables
        // combining strings and dynamic data
        console.log(`Credentialed: ${allDoctors[i][1] ? "Yes" : "No"}`); 
        // conditional boolean rendering
        console.log(`Anniversary Date: ${allDoctors[i][2]}`); 
        // accessing nested elements
        found = true;
        break;
      }
    }

    if (!found) {
      console.log("Doctor not found.");
    }

  } else if (choice === 4) {
    console.log("\n--- All Doctors ---");
    if (allDoctors.length === 0) {
      console.log("No doctors available.");
    } else {
      for (let i = 0; i < allDoctors.length; i++) { 
        // loop through array
        console.log(`\nDoctor #${i + 1}`);
        // string with numeric expression
        console.log(`Name: ${allDoctors[i][0][0]} ${allDoctors[i][0][1]}`);
        // Template Literals
        console.log(`Credentialed: ${allDoctors[i][1] ? "Yes" : "No"}`); 
        // booleans to strings
        console.log(`Anniversary Date: ${allDoctors[i][2]}`);
      }
    }

  } else if (choice === 5) {
    running = false; 
    // boolean assignment used to break the loop
    console.log("Exiting program.");
  } else {
    console.log("Invalid choice. Please try again.");
    // using plain strings
  }
}
