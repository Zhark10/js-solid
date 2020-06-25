
class Fetch {
  request(url) {
    // return fetch(url).then(r => r.json())
    return Promise.resolve('data from fetch')
  }
}

class LocalStorage {
  get(key) {
    const dataFromLocalStorage = `data from local storage by ${key}`
    return dataFromLocalStorage
    // return localStorage.getItem('key')
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet(url) {
    return this.fetch.request(url)
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()  
  }

  clientGet(key) {
    return this.localStorage.get(key)
  }
}

class Database {
  constructor(client) {
    this.client = client
  }
  
  getData(key) {
    return this.client.clientGet(key)
  }
}

const db_1 = new Database(new FetchClient())
const db_2 = new Database(new LocalStorageClient())

console.log(db_1.getData('LOL_KEY'))
console.log(db_2.getData('vk.com'))