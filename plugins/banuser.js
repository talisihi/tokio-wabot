let handler = async (m, { conn, text }) => {
    if (!text) throw 'ban səbəbi ?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag et'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `uğurla ban edildi`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

module.exports = handler
