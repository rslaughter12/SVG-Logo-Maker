import fs from 'fs';
import inquirer from 'inquirer';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'What three characters would you like in your logo?',
    },
    {
      type: 'input',
      name: 'shape-color',
      message: 'What color would you like the shape to be?',
    },
    {
        type: 'input',
        name: 'text-color',
        message: 'What color would you like the text to be?',
      },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like your logo to be?',
      choices: ['circle', 'square', 'triangle'],
    },
  ])
  .then((answers) => {
    console.log(`Nice! Your information has been logged and your logo has been created`);
    generateLogoSVG(answers);
  })
  .catch((error) => {
    console.error(error);
  });

  function generateLogoSVG(answers) {
    let shapeElement;
  
    if (answers.shape === "circle") {
      shapeElement = `<circle cx="50" cy="50" r="40" fill="${answers['shape-color']}" />`;
    } else if (answers.shape === "square") {
      shapeElement = `<rect x="10" y="10" width="80" height="80" fill="${answers['shape-color']}" />`;
    } else if (answers.shape === "triangle") {
      shapeElement = `<polygon points="50,10 90,90 10,90" fill="${answers['shape-color']}" />`;
    }
  
    const svgCode = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100">
        ${shapeElement}
        <text x="50" y="60" fill="${answers['text-color']}" font-size="22" text-anchor="middle">${answers.text}</text>
      </svg>`;
  
    fs.writeFile("logo.svg", svgCode, (err) => {
      if (err) {
        return console.log(err);
      }
      console.log("Logo created!");
    });
  }