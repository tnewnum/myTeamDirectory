//function that can be called to generate the Manager Card 
const managerCard = (name, id, email, officeNumber) => {

  return ` 
  <section>
      <div class = "manager">
        <h3>Manager</h3>
        <h5 class="name">${name}</h5>
        <h6 class="id">Employee ID: ${id}</h6>
        <h6 class="email">Email: <a href="mailto:${email}">${email}</a></h6>
        <h6 class="office">Office Number: ${officeNumber}</h6>        
      </div>    
  </section>
    `
}

//function that can be called to generate the Engineer Card 
const engineerCard = (name, id, email, github) => {

  return ` 
  <section>
      <div class = "engineer">
        <h3>Engineer</h3>
        <h5 class="name">${name}</h5>
        <h6 class="id">Employee ID: ${id}</h6>
        <h6 class="email">Email: <a href="mailto:${email}">${email}</a></h6>
        <h6 class="Github">GitHub @ <a href="https://github.com/${github}">${github}</a></h6>        
      </div>
  </section>
    `
}

//function that can be called to generate the Intern Card 
const internCard = (name, id, email, school) => {

  return ` 
  <section>
      <div class = "intern">
        <h3>Intern</h3>
        <h5 class="name">${name}</h5>
        <h6 class="id">Employee ID: ${id}</h6>
        <h6 class="email">Email: <a href="mailto:${email}">${email}</a></h6>
        <h6 class="office">School Attended: ${school}</h6>        
      </div>
  </section>
    `
}

//a for loop and an if statement to determine what card to return 
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



//funciton to generate HTML
const generateHTML = (myTeam) =>
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>myTeamDirectory</title>
<link rel="stylesheet" href="./html/style.css">

</head>


<body class="body">
  <header class ="header">
    <h1 class="title">My Devloper Team</h1>
  </header>

  <main class="main">

    <div class="container">
    ${generateCards(myTeam)}
    </div>

  </main>   
</body>

<footer class="footer">
<h6 class="footer">Devloped by Tommy Newnum find me on GitHub: <a class="gitFoot" href="https://github.com/tnewnum"> @tnewnum</a></h6>
</footer>

</html>`;

module.exports = generateHTML;