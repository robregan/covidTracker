document.querySelector('button').addEventListener('click', getData)





function getData(){

let input = document.querySelector('input').value


const url =  `https://api.covidtracking.com/v1/states/${input}/current.json`

  fetch(url)
    .then(res => res.json())
    .then(data => {

      console.log(data);
      const positiveTests = data.positive
      const totalTests = data.totalTestResults
      const date = data.checkTimeEt

      let positivityRate = positiveTests/totalTests * 100
      positivityRate = positivityRate.toFixed(2)

      document.getElementById('placeToSee').innerText = `As of ${date}, the current positivity rate for ${input} is ${positivityRate}%`

    })
    .catch(err => {
      console.log(`error ${err}`)
    })

}
