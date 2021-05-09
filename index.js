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
    {
        type: 'list',
        message: 'Choose a license; use arrow keys',
        choices: ["MIT", "GPL", "Apache 2.0", "BSD"],
        name: 'license',
        default: "none",
    },
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
    fs.writeFile("newREADME.md", createContent(response), (err) =>
    err ? console.error(err) : console.log("Success!"));
  });


function createContent(response) {
const {title, description, installation, usage, contributing, testing, email, github} = response;
var licenseDetail = handleLicense(response);

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

${licenseDetail.licBadge}

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
  
${licenseDetail.licText}

<a name="questions"></a>
## Questions

Contact me via email at ${email} or through my GitHub [profile](https://github.com/${github}). 
    
`
return content
}

function handleLicense(response) {
    const {license} = response;

    var licBadge 
    if (license === "MIT"){
        licBadge = "![MIT](https://img.shields.io/badge/license-MIT-brightgreen)"

        licText = `MIT License

        Copyright (c) [year] [fullname]
        
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.`
    } else if (license === "GPL") {
        licBadge = "![GPL](https://img.shields.io/badge/license-GPL-brightgreen)"

        licText = `This program is free software: you can redistribute it and/or modify
        it under the terms of the GNU General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version.
    
        This program is distributed in the hope that it will be useful,
        but WITHOUT ANY WARRANTY; without even the implied warranty of
        MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
        GNU General Public License for more details.
    
        You should have received a copy of the GNU General Public License
        along with this program.  If not, see <https://www.gnu.org/licenses/>.`

    } else if (license === "Apache 2.0") {
        licBadge = "![Apache 2.0](https://img.shields.io/badge/license-Apache_2.0-brightgreen)"

        licText = `Copyright [yyyy] [name of copyright owner]

        Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at
        
           http://www.apache.org/licenses/LICENSE-2.0
        Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.`
    } else if (license === "BSD") {
        licBadge = "![BSD](https://img.shields.io/badge/license-BSD-brightgreen)"

        licText= `BSD 3-Clause License

        Copyright (c) 2021, Cristina Gorrino All rights reserved.
        
        Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
        
        Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        
        Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        
        Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
        
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
    } else if (license === "none"){
        licBadge = ``;
    }

    var licenseDetail = {
        licText: licText,
        licBadge: licBadge
    }
return licenseDetail;
}
  