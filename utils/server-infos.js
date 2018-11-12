const mcping = require('mc-ping-updated');

const getServerInfos = (ip, port) => {
  return new Promise((resolve, reject) => {
    mcping(ip, 25565, (err, res) => {
      if (err) {
        reject(err)
      }
      const stats = {
        players: {
          online: parseInt(res.players.online),
          max: parseInt(res.players.max),
          list: res.players.sample
        },
        version: res.version
      }
      resolve(stats)
    })
  })
}

module.exports = { getServerInfos }
