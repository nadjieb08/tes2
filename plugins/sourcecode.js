let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Script')).buffer(), `
Lagi Cari Script ya ??
Nih script botnya..\nPrivate_*Jangan Lupa Kasih Starsnya ya..*_
`.trim(), '❖ One', 'Cara Lewatin-nya gimana ??', 'yntkts')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
