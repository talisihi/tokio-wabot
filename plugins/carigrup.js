let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
    if (!text) throw 'Nə axtarırsız?'
    let res = await fetch(global.API('xteam', '/search/grupwa', {
        q: text
    }, 'APIKEY'))
    if (res.status !== 200) throw await res.text()
    let json = await res.json()
    if (!json.status) throw json
    let teks = json.result.map(res => res.subject + '\n' + res.link).join('\n\n')
    m.reply(teks)
}
handler.help = ['axtarış qrup <Axtar>']
handler.tags = ['tools']

handler.command = /^searchgroup/i

module.exports = handler
