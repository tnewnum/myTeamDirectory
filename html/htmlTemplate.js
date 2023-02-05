 const managerCard = (name, id, email, officeNumber) => {

    return ` 
    <section>
    <div class = "container">
        <div class = "manager">
        <h4>Manager</h4>
        <h5 class="name">${name}</h5>
        <h6 class="id">Employee ID: ${id}</h6>
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
        <h5 class="name">${name}</h5>
        <h6 class="id">Employee ID: ${id}</h6>
        <h6 class="email">Email: <a href="mailto:${email}">${email}</a></h6>
        <h6 class="handle">GitHub username @${github}</h6>
        <h6 class="Github">GitHub Webpage: <a href="https://github.com/${github}">${github}</a></h6>        
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
        <h5 class="name">${name}</h5>
        <h6 class="id">Employee ID: ${id}</h6>
        <h6 class="email">Email: <a href="mailto:${email}">${email}</a></h6>
        <h6 class="office">I attended school at: ${school}</h6>        
        </div>
    </div>
    </section>
    `
}

//if statement to determine what card to return 
function generateCards (myTeam) {
  let cards = [];

  myTeam.forEach(member => {
    if (member.getRole() === 'Manager') {
      cards.push(managerCard(member.name, member.id, member.email, member.officeNumber))
    } if (member.getRole() === 'Engineer') {
      cards.push(engineerCard(member.name, member.id, member.email, member.github))
    } if (member.getRole() === 'Intern') {
      cards.push(internCard(member.name, member.id, member.email, member.school))
    }
  });

  return cards.join('');
}







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
<header class ="header">
<h1>My Devloper Team</h1>
</header>

<main>
<div>
${generateCards(myTeam)}
</div>
</main>   
</body>
</html>`;

module.exports = generateHTML;



// ${managerCard(myTeam[0].name, myTeam[0].id, myTeam[0].email, myTeam[0].officeNumber)}
// ${engineerCard(myTeam[1].name, myTeam[1].id, myTeam[1].email, myTeam[1].github)}
// ${internCard(myTeam[2].name, myTeam[2].id, myTeam[2].email, myTeam[2].school)}


// // let allCards = ''
// // let employee = []
// for (let i = 0; i < myTeam.length; i++) {
  
//    console.log(myTeam.element[i]);  
  
// }