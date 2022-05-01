// Magernulis By MFarelS:V
// Code by Rufo
// Recode by Rufo :V
let handler  = async (m, { command, conn, text }) => {
  let id = (command.match(/[1-6]$/) || [])[0] || ''
  await conn.sendFile(m.chat, global.API('xteam', '/magernulis' + id, {
    text,
    nama: conn.getName(m.sender),
    kelas: ' '
  }, 'APIKEY'), 'nulis.jpg', 'Nahh bitdi\'s done...', m)
}
handler.help = new Array(6).fill('lazywrite').map((v, i) => v + (i + 1) + ' <teks>')
handler.tags = ['nulis']

handler.command = /^lazywrite[1-6]?$/i

handler.limit = true

module.exports = handler
