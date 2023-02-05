 const managerCard = (name, id, email, officeNumber) => {

    return ` 
    <section>
    <div class = "container">
        <div class = "manager">
        <h4>Manager</h4>
        <h5 class="name>${name}</h5>
        <h6 class="id>ID: ${id}</h6>
        <h6 class="email">Email: <a href="mailto:${email}">${email}</a></h6>
        <h6 class="office">Office Number: ${officeNumber}</h6>        
        </div>
    </div>
    </section>
    `
}

const engineerCard = (name, id, email, github) => {

    return ` 
    <section>
    <div class = "container">
        <div class = "engineer">
        <h4>Engineer</h4>
        <h5 class="name>${name}</h5>
        <h6 class="id>ID: ${id}</h6>
        <h6 class="email">Email: <a href="mailto:${email}">${email}</a></h6>
        <h6 class="office">GitHub: @ ${github}</h6>        
        </div>
    </div>
    </section>
    `
}

const internCard = (name, id, email, school) => {

    return ` 
    <section>
    <div class = "container">
        <div class = "intern">
        <h4>Intern</h4>
        <h5 class="name>${name}</h5>
        <h6 class="id>ID: ${id}</h6>
        <h6 class="email">Email: <a href="mailto:${email}">${email}</a></h6>
        <h6 class="office">I attended school at: ${school}</h6>        
        </div>
    </div>
    </section>
    `
}

//if statement to determine what card 
function generateCards (myTeam) {

  let allCards = ''
  for (let index = 0; index < myTeam.length; index++) {
    const element = array[index];

   
    
  }
    if (employee === 'Manager') {
      return myTeam.officeNumber
    } if (employee === 'Engineer') {
     return engineerCard
    } if (employee === 'Intern') {
      return internCard
    }
  }; 


//export funciton to generate HTML
const generateHTML = (myTeam) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>myTeamDirectory</title>
  
</head>


<body>
    <header>
    <h1>My Devloper Team</h1>
    </header>

    <main>
        <div>
        ${managerCard(myTeam[0].name, myTeam[0].id, myTeam[0].email, myTeam[0].officeNum)}
        </div>
    </main>   
 </body>
</html>`;

module.exports = generateHTML;