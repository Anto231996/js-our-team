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


for (let key in team){
    console.log (team [key]);
    console.log (team [key].name);
    console.log (team [key].role);
    console.log (team [key].image);
}

let itemTeam = "";

for (let key in team){
    for (let i = 0; i < team.length; i++){
        itemTeam += 
        `
        <div class="items col col-md-6 col-lg-4 mb-4 text-center">
            <img src="${team[key].image}" alt="random picture">
            <div class="description">
                <h3>${team[key].name}</h3>
                <h6>${team[key].role}</h6>
            </div>
        </div>;
        `
    }
}

const itemsElement = document.querySelector(".row");

itemsElement.innerHTML = itemTeam;
    
console.log(team.length)