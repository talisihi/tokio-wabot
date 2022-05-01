let handler = async m => m.reply(`
☕ *Bot :* Komek Qrupu \n\n🔗 *URL :*https://chat.whatsapp.com/DmQeV6aFsCi7cTiEF1E948
`.trim()) // repository
handler.help = ['Komek Qrup']
handler.tags = ['info']
handler.command = /^Komek|repo$/i

module.exports = handler
