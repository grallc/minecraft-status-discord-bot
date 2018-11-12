const axios = require('axios')

const getPlayerUUID = (username) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://api.mojang.com/users/profiles/minecraft/${username}`).then((res) => {
      if (res.status === 200) {  
        resolve(res.data.id)
      } else {
        resolve(undefined)
      }
    }).catch((e) => {
      resolve(undefined)
    })
  })
}

const getPlayerUsername = (uuid) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`).then((res) => {
      if (res.status === 200) {  
        resolve(res.data.name)
      } else {
        resolve(undefined)
      }
    }).catch((e) => {
      resolve(undefined)
    })
  })
}

module.exports = { getPlayerUUID, getPlayerUsername }
