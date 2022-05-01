let handler = async m => m.reply(`
😐 Sahibi varlıdır, onun pulunuza ehtiyacı yoxdur.
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
