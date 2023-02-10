import * as questionHolder from "./src/questions";

const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const team = {
    manager : "",
    engineer: [],
    intern: []
}


function ask(questions, employeeType) {
    inquirer.prompt(questions).then((answers) => {
        // put answers into team
        switch (employeeType) {
        case 'Manager':
            let manager = new Manager(
                answers.name, 
                answers.employeeId,
                answers.email,
                answers.officeNumber
            );
            team.manager = manager;
            break;
        case 'Engineer':
            let engineer = new Engineer(
                answers.name, 
                answers.employeeId,
                answers.email,
                answers.github
            );
            team.engineer.push(engineer);
            break;
        case 'Intern':
            let intern = new Intern(
                answers.name, 
                answers.employeeId,
                answers.email,
                answers.school
            );
            team.intern.push(intern);
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
            console.log(team);
        }
    });
}


ask(questionHolder.managerQuestions, "Manager");
