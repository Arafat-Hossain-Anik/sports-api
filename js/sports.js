const searchByName = () => {
    document.getElementById('card-container').innerHTML = '';
    const searchField = document.getElementById("search-field");
    const clubName = searchField.value;
    fetchingData(clubName);
    searchField.value = '';
}
const fetchingData = async clubName => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${clubName}`;
    const res = await fetch(url);
    const data = await res.json();
    displayData(data);
}
const displayData = data => {
    const subTeams = data.teams;
    const cardDiv = document.getElementById('card-container');
    console.log(data.teams);
    subTeams.forEach(subTeam => {
        const teamName = subTeam.strTeam;
        const teamDetails = subTeam.strDescriptionEN.slice(0, 200);
        const teamJersyImage = subTeam.strTeamJersey;
        const teamLogoImage = subTeam.strTeamLogo;
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
              <div class="card h-100">
                <img src="${teamJersyImage}" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${teamName}</h5>
                  <p class="card-text">${teamDetails}</p>
                </div>
              </div>
        `;
        cardDiv.appendChild(card);
        console.log(teamName);
        console.log(teamJersyImage);
    });

}
{/* <div class="col">
              <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div> */}