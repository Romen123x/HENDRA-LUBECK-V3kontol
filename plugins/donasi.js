import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `https://telegra.ph/file/8f7e2b662ac8dc4f7f562.jpg`
    return conn.sendButton(m.chat, 'Pm Owner aja \n❏ https://wa.me/6281227607864 ', 'Makasih, thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://youtube.com/@hidayah-99",
                mediaType: "VIDEO",
                title: 'Donasi To HENDRA LUBECK🇮🇩 ',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler
