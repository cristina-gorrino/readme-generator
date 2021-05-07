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
  .then(({title, description, installation, usage, contributing, testing, github, email}) =>{
    const content = 
`# ${title}

## Table of Contents

1. [Questions](#questions)
    
## Description
    
${description}
    
## Installation
    
${installation}
    
## Usage
    
${usage}
    
## How to contribute
    
${contributing}
    
## How to run tests
    
${testing}
    
## License
    
<a name="questions"></a>
## Questions

Contact me via email at ${email} or through my GitHub [profile](https://github.com/${github}). 
    
`
fs.writeFile("README.md", content, (err) =>
err ? console.error(err) : console.log("Success!"));

  }

  );









  