const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const team = {
    manager : "",
    engineer: [],
    intern: []
}


const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your Engineers name?"
    },
    {
        type: "number",
        name: "id",
        message: "What is your Engineers employee Id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your Engineers email?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your Engineers Github?"
    },
    {
        type: "list",
        name: "next",
        message: "What would you like to do next?",
        choices: [
            'Add an Engineer',
            'Add an Intern',
            'Generate HTML',
        ],
    }
]

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your Managers name?"
    },
    {
        type: "number",
        name: "id",
        message: "What is your Managers employee Id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your Managers email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is your Managers office number?"
    },
    {
        type: "list",
        name: "next",
        message: "What would you like to do next?",
        choices: [
            'Add an Engineer',
            'Add an Intern',
            'Generate HTML',
        ],
    }

]

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "What is your Interns name?"
    },
    {
        type: "number",
        name: "id",
        message: "What is your Interns employee Id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your Interns email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is your Interns school?"
    },
    {
        type: "list",
        name: "next",
        message: "What would you like to do next?",
        choices: [
            'Add an Engineer',
            'Add an Intern',
            'Generate HTML',
        ],
    }

]

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
            ask(engineerQuestions, "Engineer");
        } else if (answers.next === 'Add an Intern') {
            ask(internQuestions, "Intern");
        } else {
            console.log(team);
        }
    });
}


ask(managerQuestions, "Manager");