let handler = m => m

handler.before = function (m) {
  let user = global.db.data.users[m.sender]
        let role = (user.level <= 10) ? 'Maladoy'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Normal'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Qeşey'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Babat'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Kral'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Şaxsadə'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Master'
          : ((user.level >= 70) && (user.level <= 80)) ? 'Geniral'
          : 'Legend'
  user.role = role
  return true
}

module.exports = handler
