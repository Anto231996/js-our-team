const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
];

let itemsTeam = "";

    for (let i = 0; i < team.length; i++){
        itemsTeam += 
        `
        <div class="items col col-md-6 col-lg-4 mb-4">
            <img src="img/${team[i].image}" alt="random picture">
            <div class="item-description text-center">
                <h3>${team[i].name}</h3>
                <h6>${team[i].role}</h6>
            </div>
        </div>
        `
}

const itemsElement = document.querySelector(".row");

itemsElement.innerHTML = itemsTeam;