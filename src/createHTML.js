function createInternsDiv(interns) {
    let div = ``;

    interns.forEach(intern => {
        div +=      `
        <div class="card" style="width: 18rem;margin:10px">
          <div class="card-body">
            <h5 class="card-title">${intern.getName()}</h5>
            <p class="card-text">Engineer</p>
            <ul class="list-group">
              <li class="list-group-item">ID - ${intern.getId()}</li>
              <li class="list-group-item">Email - ${intern.getEmail()}</li>
              <li class="list-group-item">Office Number - ${intern.getSchool()}</li>
            </ul>
          </div>
        </div>

        `
    });

    return div;
}

function createEngineersDiv(engineers) {
    let div = ``;

    engineers.forEach(engineer => {
        div +=      `
        <div class="card" style="width: 18rem;margin:10px">
          <div class="card-body">
            <h5 class="card-title">${engineer.getName()}</h5>
            <p class="card-text">Engineer</p>
            <ul class="list-group">
              <li class="list-group-item">ID - ${engineer.getId()}</li>
              <li class="list-group-item">Email - ${engineer.getEmail()}</li>
              <li class="list-group-item">Office Number - ${engineer.getGitHub()}</li>
            </ul>
          </div>
        </div>

        `
    });

    return div;
}

function createManagerDiv(manager) {
    return `
    <div class="card" style="width: 18rem;margin:10px">
      <div class="card-body">
        <h5 class="card-title">${manager.getName()}</h5>
        <p class="card-text">Manager</p>
        <ul class="list-group">
          <li class="list-group-item">ID - ${manager.getId()}</li>
          <li class="list-group-item">Email - ${manager.getEmail()}</li>
          <li class="list-group-item">Office Number - ${manager.getOfficeNumber()}</li>
        </ul>
      </div>
    </div>
    `
}

function generateHTML(manager, engineers, interns) {
    return `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <title>Your Team</title>
    </head>
    <body>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">YOUR TEAM</a>          
            </div>
        </nav>

        ${createManagerDiv(manager)}

        ${createEngineersDiv(engineers)}

        ${createInternsDiv(interns)}

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

module.exports = generateHTML