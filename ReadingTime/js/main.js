//Example fetch using pokemonapi.co
document.querySelector('#howLongToRead').addEventListener('click', getFetchA)
function getFetchA() {
  const choice = document.querySelector('.isbn').value
  console.log(choice)
  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${choice}&jscmd=data&format=json`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      document.querySelector('.error').style.visibility = 'hidden'
      let bookLength = data[`ISBN:${choice}`].number_of_pages

      let pageRate = document.querySelector('.pageRate').value
      let progress = document.querySelector('.progress').value

      if (progress === null) {
        progress = 0;
      }

      console.log(data[`ISBN:${choice}`], bookLength)
      document.querySelector('h3').innerHTML = `It will take ${Math.round((bookLength - progress) / pageRate)} days <br> to finish <strong>${data[`ISBN:${choice}`].title}</strong>!`
      document.querySelector('img').src = data[`ISBN:${choice}`].cover.large

      //document.querySelector('img').style.border = 'solid 4px #50a2a7'

      if (bookLength === undefined) {
        document.querySelector('h3').innerText = ``
        document.querySelector('.error').style.visibility = 'visible'
      }
      if (progress > bookLength) {
        document.querySelector('h3').innerHTML = `Congrats on finishing <strong>${data[`ISBN:${choice}`].title}</strong>!!`
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}

//Example fetch using pokemonapi.co
document.querySelector('#howManyPages').addEventListener('click', getFetchB)

function getFetchB() {

  document.querySelector('.error').style.visibility = 'hidden'
  const choice = document.querySelector('.isbn').value
  console.log(choice)
  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${choice}&jscmd=data&format=json`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      let bookLength = data[`ISBN:${choice}`].number_of_pages
      let days = document.querySelector('.days').value
      let progress = document.querySelector('.progressA').value

      if (progress === null) {
        progress = 0;
      }

      console.log(data[`ISBN:${choice}`])
      document.querySelector('h3').innerHTML = `Read ${Math.round((bookLength - progress) / days)} pages a day to finish <br> <strong>${data[`ISBN:${choice}`].title}</strong> in time!`
      document.querySelector('img').src = data[`ISBN:${choice}`].cover.large

      //document.querySelector('img').style.border = 'solid 4px #50a2a7'

      if (bookLength === undefined) {
        document.querySelector('h3').innerText = ``
        document.querySelector('.error').style.visibility = 'visible'
      }
      if (progress > bookLength) {
        document.querySelector('h3').innerHTML = `Congrats on finishing <strong>${data[`ISBN:${choice}`].title}</strong>!!`
      }
    })
    .catch(err => {
      console.log(`error ${err}`)
    });
}