const axios = require('axios')
const fsPromises = require('fs/promises')

const main = async () => {
  try {
    const response = await axios.get('https://fr.wikipedia.org/wiki/Univers')
    await fsPromises.writeFile('index.html', response.data) // response.data est une string qui est la page html
    const stats = await fsPromises.stat('index.html')
    //console.log((await fsPromises.stat('index.html')).size)
    console.log(stats.size)
    console.log(response.headers)
  } catch (e) {
    console.log(e.message)
  }
}

main()