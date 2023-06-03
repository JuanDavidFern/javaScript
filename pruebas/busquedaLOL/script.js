const main = document.getElementById('main')
const form = document.getElementById('form')
const campeones = [
  "Aatrox",
  "Ahri",
  "Akali",
  "Akshan",
  "Alistar",
  "Amumu",
  "Anivia",
  "Annie",
  "Aphelios",
  "Ashe",
  "Aurelion Sol",
  "Azir",
  "Bard",
  "Belveth",
  "Blitzcrank",
  "Brand",
  "Braum",
  "Caitlyn",
  "Camille",
  "Cassiopeia",
  "Cho'Gath",
  "Corki",
  "Darius",
  "Diana",
  "DrMundo",
  "Draven",
  "Ekko",
  "Elise",
  "Evelynn",
  "Ezreal",
  "Fiddlesticks",
  "Fiora",
  "Fizz",
  "Galio",
  "Gangplank",
  "Garen",
  "Gnar",
  "Gragas",
  "Graves",
  "Gwen",
  "Hecarim",
  "Heimerdinger",
  "Illaoi",
  "Irelia",
  "Ivern",
  "Janna",
  "Jarvan I V",
  "Jax",
  "Jayce",
  "Jhin",
  "Jinx",
  "Kai'Sa",
  "Kalista",
  "Karma",
  "Karthus",
  "Kassadin",
  "Katarina",
  "Kayle",
  "Kayn",
  "Kennen",
  "Kha'Zix",
  "Kindred",
  "Kled",
  "Kog Maw",
  "KSante",
  "LeBlanc",
  "Lee Sin",
  "Leona",
  "Lillia",
  "Lissandra",
  "Lucian",
  "Lulu",
  "Lux",
  "Malphite",
  "Malzahar",
  "Maokai",
  "Master Yi",
  "Milio",
  "MissFortune",
  "Mordekaiser",
  "Morgana",
  "Nami",
  "Nasus",
  "Nautilus",
  "Neeko",
  "Nidalee",
  "Nilah",
  "Nocturne",
  "Nunu",
  "Olaf",
  "Orianna",
  "Ornn",
  "Pantheon",
  "Poppy",
  "Pyke",
  "Qiyana",
  "Quinn",
  "Rakan",
  "Rammus",
  "Rek'Sai",
  "Rell",
  "RenataGlasc",
  "Renekton",
  "Rengar",
  "Riven",
  "Rumble",
  "Ryze",
  "Samira",
  "Sejuani",
  "Senna",
  "Seraphine",
  "Sett",
  "Shaco",
  "Shen",
  "Shyvana",
  "Singed",
  "Sion",
  "Sivir",
  "Skarner",
  "Sona",
  "Soraka",
  "Swain",
  "Sylas",
  "Syndra",
  "Tahm Kench",
  "Taliyah",
  "Talon",
  "Taric",
  "Teemo",
  "Thresh",
  "Tristana",
  "Trundle",
  "Tryndamere",
  "Twisted Fate",
  "Twitch",
  "Udyr",
  "Urgot",
  "Varus",
  "Vayne",
  "Veigar",
  "Velkoz",
  "Vex",
  "Vi",
  "Viego",
  "Viktor",
  "Vladimir",
  "Volibear",
  "Warwick",
  "Wukong",
  "Xayah",
  "Xerath",
  "Xin Zhao",
  "Yasuo",
  "Yone",
  "Yorick",
  "Yuumi",
  "Zac",
  "Zed",
  "Zeri",
  "Ziggs",
  "Zilean",
  "Zoe",
  "Zyra"
];
let lista 

/*Pone el focus inmediatamente en shearch*/
search.focus()

form.addEventListener("keyup", e=>{
  if (e.target.value && e.keyCode !== 13) {
    let buscados = []
    campeones.forEach(campeon =>{
      if (campeon.toLowerCase().includes(e.target.value.toLowerCase())) {
        buscados.push(campeon)
      }
    })
    buscador(buscados, e.target.value)
    darListeners()
  }
})

function darListeners() {
  lista.forEach(element => {
    element.addEventListener('click', () =>{
      search.value = element.textContent
      search.focus()
      img()
    })
  })
}

function buscador(buscados, value) {
  let cardHTML = `<div class = "main">`

  buscados.forEach(element => {
    cardHTML = cardHTML + `<div class="element">${element}</div>`
  });

  main.innerHTML = cardHTML + "</div>"
  lista = document.querySelectorAll(".element")
  /**
   * Si escribes el texto exactamente igual lo busca
  if (buscados == value) {
    img()
  }
   */
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    img()
});

function img () {
      // Aquí puedes trabajar con los datos obtenidos
      const cardHTML = `
      <img src="https://enlazeDelKeep/cdn/img/champion/loading/${convertirCamelCase(search.value)}_0.jpg">
      `
      main.innerHTML = cardHTML
}

function convertirCamelCase(frase) {
  const palabras = frase.toLowerCase().trim().split(/\s+|'/);

  const fraseFormateada = palabras.map((palabra, index) => {
    return index === 0
      ? palabra.charAt(0).toUpperCase() + palabra.slice(1)
      : palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
  }).join("");

  return fraseFormateada;
}