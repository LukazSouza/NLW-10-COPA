function createGame(player1, hour, player2) {
  return `
          <li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
          </li>
  `
}

/* 2º Criei uma fução com nome createCard  */

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
  <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>

        <ul>
          ${games}
        </ul>
  </div>
`
}

/* 1º Trouxe do html através do querySelector */
document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "16:00", "serbia") +
      createGame("hungary", "13:00", "argentina") +
      createGame("colombia", "20:00", "japan")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("british-columbia", "08:00", "cameroon") +
      createGame("india", "13:00", "armenia") +
      createGame("comoros", "20:00", "jordan")
  ) +
  createCard(
    "28/11",
    "Segunda",
    createGame("british-columbia", "08:00", "cameroon") +
      createGame("india", "13:00", "armenia") +
      createGame("comoros", "20:00", "jordan")
  )

/*
 ${createCard("02/12", "Sexta", createGame("brazil", "16:00", "cameroon"))}*/
