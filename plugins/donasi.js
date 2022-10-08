let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [BY PM]
│ • Telkomsel [BY PM]
╰────

╭─「 Donasi • Non Pulsa 」
│ • https://saweria.co/donthaveany
│ • https://saweria.co/donthaveany
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
