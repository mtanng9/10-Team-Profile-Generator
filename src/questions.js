export const engineerQuestions = [
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

export const managerQuestions = [
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

export const internQuestions = [
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