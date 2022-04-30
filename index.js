const readmeGen = require('./readmeGen')
const fs = require('fs')
const inquirer = require('inquirer')

//Questions for the user
let quesitons = [{
        type: 'input',
        message: 'What is the title of your repository?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'questions'
    },
    {
        type: 'input',
        message: 'Please provide your email address.',
        name: 'questions'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: [
            "MIT",
            "GPLv2",
            "Apache",
            "None"

        ]

    },
    {
        type: 'input',
        message: 'Please provide a description for your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please state if others can contribute to your repository.',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Please provide installation instructions.',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please state any test(s) required.',
        name: 'test'
    }
]
inquirer.prompt(quesitons).then(function(response) {
    console.log(response)
})

let content = readmeGen(response);
console.log(content);
fs.writeFileSync("./ReadMe.md", content, frunction(err) {
    if (err) throw err
    console.log("File Created")
})