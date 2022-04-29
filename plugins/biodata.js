let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ *𝐁𝐈𝐎𝐃𝐀𝐓𝐀 𝐎𝐖𝐍𝐄𝐑* ❉───
║│➸ *Nama* : Nadjieb
║│➸ *Umur* : 13 to 14
║│➸ *Kelas* :  2 SMP
║│➸ *Status* : can't be good atau everything
║╰───────────────
╰════════════════
╭════════════════
║╭──❉ *𝐒𝐎𝐒𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀* ❉───
║│➸ *No.Owner* : wa.me/6282234343854
║│➸ *No.Bot* : wa.me/6283829073100
║│➸ *Chanel Youtube* : https://youtube.com/Jibb+saja+lah
║│➸ *Gmail* : Rahasia
║│➸ *Github* : https://github.com/nadjieb08
║╰────────────────
╰═════════════════
_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Raditya')).buffer(), ext, 'Recoded By Raditya', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
