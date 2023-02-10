const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questionHolder = require("./src/questions");
const generateHTML = require("./src/createHTML");
const fs = require('fs');


let manager = "";
let engineers = [];
let interns = [];

function writeToFile(fileName, data) {
    fs.writeFile(`./${fileName}`, data, err => {
        if (err) {
          console.error(err);
        }
        // file written successfully
      });
}


function ask(questions, employeeType) {
    inquirer.prompt(questions).then((answers) => {
        // put answers into team
        switch (employeeType) {
        case 'Manager':
            let tempManager = new Manager(
                answers.name, 
                answers.id,
                answers.email,
                answers.officeNumber
            );
            manager = tempManager;
            break;
        case 'Engineer':
            let tempEngineer = new Engineer(
                answers.name, 
                answers.id,
                answers.email,
                answers.github
            );
            engineers.push(tempEngineer);
            break;
        case 'Intern':
            let tempIntern = new Intern(
                answers.name, 
                answers.id,
                answers.email,
                answers.school
            );
            interns.push(tempIntern);
            break;
        default:
            console.log("Should be impossible to hit this");
            break;
        }


        // next questions
        if (answers.next === 'Add an Engineer') {
            ask(questionHolder.engineerQuestions, "Engineer");
        } else if (answers.next === 'Add an Intern') {
            ask(questionHolder.internQuestions, "Intern");
        } else {
            let html = generateHTML(manager, engineers, interns);
            writeToFile("index.html", html);
        }
    });
}


ask(questionHolder.managerQuestions, "Manager");