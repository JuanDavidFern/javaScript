const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')
const body = document.body
const apiKey = 'YOUR_API_KEY'
const reloj = document.querySelector('.reloj')

/*Pone el focus inmediatamente en shearch*/
search.focus()

/*Hace esta funcion en intervalos de un segundo por que se especifica abajo*/
setInterval(() => {

  let date = new Date()
  reloj.innerHTML = `
  ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}
  `
}, 1000);


form.addEventListener('submit', (e) => {
    e.preventDefault();

    llamar()
});

function llamar () {
    fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics,snippet,brandingSettings&forUsername=${search.value}&key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
        const { title, description, thumbnails} = data.items[0].snippet
        const foto = thumbnails.high.url
        const { subscriberCount, viewCount, videoCount } = data.items[0].statistics
        try {
          const { image } = data.items[0].brandingSettings
          const banner = image.bannerExternalUrl
          body.style.backgroundImage = `url(${banner})`
        } catch (error) {
          body.style.backgroundImage = ""
        }
        
       
      // Aquí puedes trabajar con los datos obtenidos
      const cardHTML = `
      <div class="card">
       <div>
      <img src="${foto}" class="avatar">
      </div>
      <div class="user-info">
      <h2>${title}</h2>
        ${description}
        <ul>
          <li>${subscriberCount} Subscribers</li>
          <li>${viewCount} Total views</li>
          <li>${videoCount} Total videos </li>
        </ul>
  
        <div id="repos"></div>
      </div>
    </div>
      `
      main.innerHTML = cardHTML
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
}

