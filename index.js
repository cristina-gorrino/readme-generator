const inquirer = require('inquirer')
const fs = require('fs');


// Get user input
  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a short description of your project',
      name: 'description',
    },
    {
        type: 'input',
        message: 'How do you install it?',
        name: 'installation',
      },
    {
      type: 'input',
      message: 'How do you use it?',
      name: 'usage',
    },
    {
        type: 'input',
        message: 'How should someone contribute?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'How do you run tests?',
        name: 'testing',
    },
    // TODO Add list type to pick license
    //
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    }
  ])
  .then((response) => {
    fs.writeFile("README.md", createContent(response), (err) =>
    err ? console.error(err) : console.log("Success!"));
  });


function createContent(response) {
const {title, description, installation, usage, contributing, testing, email, github} = response;
const content = 
`# ${title}

## Table of Contents

1. [Description](#description)

2. [Installation](#installation)

3. [Usage](#usage)

4. [How to contribute](#contribute)

5. [How to run tests](#tests)

6. [License](#license)

7. [Questions](#questions)

<a name="description"></a>
## Description
    
${description}

<a name="installation"></a>
## Installation
    
${installation}

<a name="usage"></a>
## Usage
    
${usage}

<a name="contribute"></a>
## How to contribute
    
${contributing}

<a name="tests"></a>
## How to run tests
    
${testing}

<a name="license"></a>
## License
  
<a name="questions"></a>
## Questions

Contact me via email at ${email} or through my GitHub [profile](https://github.com/${github}). 
    
`
return content
}


  