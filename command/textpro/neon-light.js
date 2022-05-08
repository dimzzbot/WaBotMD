const textpro = require('../../lib/scrape/textpro')

module.exports = {
   name: 'neonlight',
   category: 'textpro',
   desc: 'Membuat teks ke image',
   use: '<text>',
   async exec(msg, sock, args) {
      if (!args.join(' ')) return msg.reply('Masukkan text!')
      const res = await textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", `${args.join(' ')}`)
      await sock.sendMessage(msg.from, { image: { url: res }, caption: "*TEXT PRO - 3D NEON LIGHT*" }, { quoted: msg })
   }
}
