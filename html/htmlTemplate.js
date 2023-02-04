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
        <div class = "manager">
        <h4>Manager</h4>
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
        <div class = "manager">
        <h4>Manager</h4>
        <h5 class="name>${name}</h5>
        <h6 class="id>ID: ${id}</h6>
        <h6 class="email">Email: <a href="mailto:${email}">${email}</a></h6>
        <h6 class="office">I attended school at: ${school}</h6>        
        </div>
    </div>
    </section>
    `
}