async function fetchAdvice() {
  const apiURL = 'https://api.adviceslip.com/advice'

  let response = await fetch(apiURL)
  let data = await response.json()

  // console.log(data)

  document.getElementById('advice-id').innerHTML = data.slip.id
  document.getElementById('advice-text').innerHTML = data.slip.advice
}

document.getElementById('randomize-btn').addEventListener('click', fetchAdvice)

//call it when the page loads so that it isnt empty
fetchAdvice()
