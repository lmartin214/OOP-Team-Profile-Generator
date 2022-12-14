//imported constructor function
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const inquirer = require("inquirer"); //for prompt questions
const fs = require("fs"); //for HTML file organizing 

//array of selected team members
let selectedSquad = [];

  function startApp() {
    console.log("Please enter manager info");
    manInfo();
  }

  // menu for team selection
  async function appMenu() {
    var action = await inquirer.prompt({
      type: "list",
      name: "next",
      message: "What would you like to do next?",
      choices: ["add intern", "add engineer", "build team"],
    });
    switch (action.next) {
      case "add intern": addIntern();
        break;
      case "add engineer": addEngineer();
        break;
      default: htmlHelper();
        break;
    }
  }

  // function to gather manager info w/ inquirer
  async function manInfo() {
    var answers = await inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the manager's name?",
        // Validate the users answers, only allows letters
        validate: (answer) => {
          const valid = answer.match(/^[a-zA-Z\s]+$/);
          if (valid) {
            return true;
          } else {
            return "Please enter a valid name";
          }
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "What's the managers employee identification number?",
        // Validate the users answers, only allows numbers
        validate: (answer) => {
          const valid = answer.match(/^[0-9\ ]+$/);
          if (valid) {
            return true;
          } else {
            return "Please enter a valid number";
          }
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the manager's email address?",
        // Validate users e-mail input, verify @ is included
        validate: (answer) => {
          const valid = answer.match(/^[A-Za-z0-9+_.-]+@(.+)$/);
          if (valid) {
            return true;
          } else {
            return "Please enter a valid email";
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
        // Validate the users answers, allows numbers and dashes
        validate: (answer) => {
          const valid = answer.match(/^[0-9\-]+$/);
          if (valid) {
            return true;
          } else {
            return "Please enter a valid number";
          }
        },
      },
    ]);
    const manager = new Manager(
      answers.managerName,
      answers.managerId,
      answers.managerEmail,
      answers.officeNumber
    );
    selectedSquad.push(manager);
      appMenu();
  }

  // function to gather engineer info w/ inquirer
  async function addEngineer() {
      var answers = await inquirer.prompt([
        {
          type: "input",
          name: "engineerName",
          message: "What is the engineer's name?",
          // Validate the users answers, only allows letters
          validate: (answer) => {
            const valid = answer.match(/^[a-zA-Z\s]+$/);
            if (valid) {
              return true;
            } else {
              return "Please enter a valid name";
            }
          },
        },
        {
          type: "input",
          name: "engineerId",
          message: "What is the engineer's employee ID number?",
          // Validate the users answers, only allows numbers
          validate: (answer) => {
            const valid = answer.match(/^[0-9]+$/);
            if (valid) {
              return true;
            } else {
              return "Please enter a valid number";
            }
          },
        },

        {
          type: "input",
          name: "engineerEmail",
          message: "What is the engineer's email address?",
          // Validate users e-mail input, verify @ is included
          validate: (answer) => {
            const valid = answer.match(/^[A-Za-z0-9+_.-]+@(.+)$/);
            if (valid) {
              return true;
            } else {
              return "Please enter a valid email";
            }
          },
        },
        {
          type: "input",
          name: "engineerGithub",
          message: "What is the engineer's GitHub username?",
        },
      ]);
      const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
      );
        selectedSquad.push(engineer);
      appMenu();
  }

  // function to gather intern info w/ inquirer
  async function addIntern() {
      var answers = await inquirer.prompt([
        {
          type: "input",
          name: "internName",
          message: "What is the intern's name?",
          // Validate the users answers, only allows letters
          validate: (answer) => {
            const valid = answer.match(/^[a-zA-Z\s]+$/);
            if (valid) {
              return true;
            } else {
              return "Please enter a valid name";
            }
          },
        },
        {
          type: "input",
          name: "internId",
          message: "What is the intern's employee ID number?",
          // Validate the users answers, only allows numbers
          validate: (answer) => {
            const valid = answer.match(/^[0-9]+$/);
            if (valid) {
              return true;
            } else {
              return "Please enter a valid number";
            }
          },
        },
        {
          type: "input",
          name: "internEmail",
          message: "What is the intern's email address?",
          // Validate users e-mail input, verify @ is included
          validate: (answer) => {
            const valid = answer.match(/^[A-Za-z0-9+_.-]+@(.+)$/);
            if (valid) {
              return true;
            } else {
              return "Please enter a valid email";
            }
          },
        },
        {
          type: "input",
          name: "internSchool",
          message: "What school does the intern attend?",
        },
      ]);
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        selectedSquad.push(intern);
      appMenu();

  };

  
  function htmlHelper() {
    console.log("Team created!");if (!fs.existsSync('./dist/index.html')) {
      fs.mkdirSync('./dist/index.html');
    fs.writeFileSync('./dist/index.html', generateSquad(selectedSquad));
    }
  };  



startApp();
