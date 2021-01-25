const inquirer = require('inquirer');

const fs = require('fs');
const { title } = require('process');

// inquirer to generate questions
inquirer.prompt(
    [
        {
            type:'input',
            message:" What's the project you are working on? ",
            name:'title',
            // validate property to check that the user provided right values
            validate : (value) => {
                if(value){
                    return true;
                } else {
                    return 'I need a value to continue'
                }
            }
        },
        {
            type : 'input',
            message :"How do you install your app?",
            name : 'installation',
            validate : (value) => { if(value) {return true} else {return 'I need a value to continue'} }
        },
        {
            type : 'input',
            message :"instructions to follow?",
            name : 'installation',
            validate : (value) => { if(value) {return true} else {return 'I need a value to continue'} }
        },
        {
            type : 'input',
            message :"any credits?",
            name : 'installation',
            validate : (value) => { if(value) {return true} else {return 'I need a value to continue'} }
        },
        {
            type : 'input',
            message :"How do you use your app?",
            name : 'usage',
            validate : (value) => { if(value) {return true} else {return 'I need a value to continue'} }
        },
        {
            type : 'list',
            message :"What license are you using?",
            name : 'license',
            choices: ['The MIT License','The GPL License','Apache License','GNU License','N/A'],
            validate : (value) => { if(value) {return true} else {return 'I need a value to continue'} }
        },
        {
            type : 'input',
            message : 'Github username',
            name:'git',
            validate: (value) => {if (value) {return (true)}else {return 'I need a value to continue'}}
        },
        {
            type : 'input',
            message : 'E-mail',
            name:'email',
            validate: (value) => {if (value) {return (true)}else {return 'I need a value to continue'}}
        },
    ]
).then(({
    title,
    installation,
    instructions,
    credit,
    license,
    git,
    linkedin,
    email,
    usage,
    contribution
})=>{
    // template to be used when we generate a readme file 
    const template = `# ${title}
    #Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contribution
    ${contribution}
    ## InstructionS
    ${instructions}
    ## Credit
    ${credit}
    ## License
    ${license}
    ## Contact
    * GitHub : ${git}
    * Linkedin : ${linkedin}
    * E-mail : ${email}
    `;
    // Function to create readme using fs 
    createNewFile(title, template);
}
);