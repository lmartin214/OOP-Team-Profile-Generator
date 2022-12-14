//Template helper code for MTML generation
//Function to help html file with user input to make Manager employee card
let managerGen = function (manager) {
    return `
    <div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${manager.getRole()}</div>
    <div class="card-body text-primary">
    <h5 class="card-title">${manager.getName()}</h5>
    <h5 class="card-title">${manager.getId()}</h5>
    <h5 class="card-title">${manager.getEmail()}</h5>
    <h5 class="card-title">${manager.getofficeNumber()}</h5>
    </div>
    </div>`;
}

//Function to help html file with user input to make Engineer employee card
let engineerGen = function (engineer) {
    return  `
    <div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${engineer.getRole()}</div>
    <div class="card-body text-primary">
    <h5 class="card-title">${engineer.getName()}</h5>
    <h5 class="card-title">${engineer.getId()}</h5>
    <h5 class="card-title">${engineer.getEmail()}</h5>
    <h5 class="card-title">${engineer.getofficeNumber()}</h5>
    </div>
    </div>`;                                            
}

//Function to help html file with user input to make Intern employee card
let internGen = function (intern) {
    return  `
    <div class="card border-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">${intern.getRole()}</div>
    <div class="card-body text-primary">
    <h5 class="card-title">${intern.getName()}</h5>
    <h5 class="card-title">${intern.getId()}</h5>
    <h5 class="card-title">${intern.getEmail()}</h5>
    <h5 class="card-title">${intern.getofficeNumber()}</h5>
    </div>
    </div>`;
}

// help push the array to generate/create html team file with the user input
createHTMLteamfile = (data) => {
cardArray = [];

for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const title = employee.getRole();
    if (title === 'Manager') {
        const managerInfoCard = managerGen(employee);
        cardArray.push(managerInfoCard);
    }
    if (title === 'Engineer') {
        const engineerInfoCard = engineerGen(employee);
        cardArray.push(engineerInfoCard);
    }
    if (title === 'Intern') {
        const internInfoCard = internGen(employee);
        cardArray.push(internInfoCard);
    }
    }
    const employeeInfoCards = cardArray.join('')
    const teamGen = generateSquad(employeeInfoCards);
    return teamGen;
}
 //Varible/Function to generate HTML page w/ Team
const generateSquad = function (employeeInfoCards) {
    return `
<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/styles.css">
    <body>
    <header>The Squad</header>
    <main>
        <div class="container">
                <div class="row justify-content-center" id="team-cards">
                ${employeeInfoCards}
                </div>
        </div>
    </main>
    </body>
    </html>
`;
}

//Exports module to work with the htmlHelper function in index.js that writes the html
module.exports = {createHTMLteamfile, generateSquad};