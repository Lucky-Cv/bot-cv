
/* Creditos a Kayla bot*/

const { modul } = require('./module');
const { baileys, boom, chalk, fs, figlet, FileType, path, process, PhoneNumber } = modul;
const { Boom } = boom
const { default: makeWaSocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = baileys
const { color, bgcolor } = require('./lib/color')
const log = (pino = require("pino"));
const qrcode = require('qrcode');
const rimraf = require("rimraf");
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')
const owner = JSON.parse(fs.readFileSync('./database/owner.json').toString())
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

if (global.conns instanceof Array) console.log()
else global.conns = []

const jadibot = async (conn, m, from) => {
const { sendImage, sendMessage } = conn;
const { reply, sender } = m;
const { state, saveCreds } = await useMultiFileAuthState(path.join(__dirname, `./database/jadibot/${sender.split("@")[0]}`), log({ level: "silent" }));
try {
async function start() {
let { version, isLatest } = await fetchLatestBaileysVersion();
const conn = await makeWaSocket({
auth: state,
browser: [`Bot Lucky 🤖`, "Chrome", "1.0.0"],
logger: log({ level: "silent" }),
version,
})

conn.ws.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))}})

conn.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
const idCall = json.content[0].attrs['call-id']
const Id = json.attrs.id
const T = json.attrs.t
conn.sendNode({
  tag: 'call',
    attrs: {
      from: '34642919120@s.whatsapp.net',
      id: Id,
      t: T
    },
    content: [
      {
        tag: 'reject',
        attrs: {
          'call-creator': callerId,
          'call-id': idCall,
          count: '0'
        },
        content: null
      }
    ]
})
if (json.content[0].tag == 'offer') {
let qutsnya = await conn.sendContact(callerId, owner)
await conn.sendMessage(callerId, { text: `Sistem Otomatis Block!!!\nJangan Menelpon Bot!!!\nSilahkan Hubungi Owner Untuk Dibuka!!!`}, { quoted : qutsnya })
await sleep(8000)
await conn.updateBlockStatus(callerId, "block")
}
})

conn.ev.on('messages.upsert', async chatUpdate => {
try {
kay = chatUpdate.messages[0]
if (!kay.message) return
kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message
if (kay.key && kay.key.remoteJid === 'status@broadcast') return
if (!conn.public && !kay.key.fromMe && chatUpdate.type === 'notify') return
if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return
m = smsg(conn, kay, store)
require('./cases')(conn, m, chatUpdate, store)
} catch (err) {
console.log(err)}
})

conn.public = true

store.bind(conn.ev);
conn.ev.on("creds.update", saveCreds);
conn.ev.on("connection.update", async up => {
const { lastDisconnect, connection } = up;
if (connection == "connecting") return
if (connection){
if (connection != "connecting") console.log("Connecting to jadibot..")
}
console.log(up)
if (up.qr) await sendImage(from, await qrcode.toDataURL(up.qr,{scale : 8}), 
'Escanea el qr para convertirte en un bot temporal\n\n1. Haga clic en los tres puntos en la esquina superior derecha\n2. Elije la opción de *Dispositivos Vinculados*\n3. Escanea el Qr \nEl Qr expira cada 30 segundos\n\n'+wm,
 m)
console.log(connection)
if (connection == "open") {
conn.id = conn.decodeJid(conn.user.id)
conn.time = Date.now()
global.conns.push(conn)
await m.reply(`*Conectado a Bot Lucky 🤖*\n\n*Usuario :*\n _*× id : ${conn.decodeJid(conn.user.id)}*_`)
user = `${conn.decodeJid(conn.user.id)}`
txt = `*Usuario montado a serbot*\n\n _× Usuario : @${user.split("@")[0]}_`
sendMessage(`34642919120@s.whatsapp.net`,{text: txt, mentions : [user]})
}
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { 
console.log(`Bad Session File, Please Delete Session and Scan Again`); conn.logout(); }
else if (reason === DisconnectReason.connectionClosed) { 
console.log("Connection closed, reconnecting...."); start(); }
else if (reason === DisconnectReason.connectionLost) { 
console.log("Connection Lost from Server, reconnecting..."); start(); }
else if (reason === DisconnectReason.connectionReplaced) { 
console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First"); conn.logout(); }
else if (reason === DisconnectReason.loggedOut) { 
console.log(`Device Logged Out, Please Scan Again And Run.`); conn.logout(); }
else if (reason === DisconnectReason.restartRequired) { 
console.log("Restart Required, Restarting..."); start(); }
else if (reason === DisconnectReason.timedOut) { 
console.log("Connection TimedOut, Reconnecting..."); start(); }
else conn.end(`Unknown DisconnectReason: ${reason}|${connection}`)
}
})

conn.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

conn.ev.on('contacts.update', update => {
for (let contact of update) {
let id = conn.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

conn.getName = (jid, withoutContact  = false) => {
id = conn.decodeJid(jid)
withoutContact = conn.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = conn.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === conn.decodeJid(conn.user.id) ?
conn.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

conn.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

conn.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await conn.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await conn.getName(i + '@s.whatsapp.net')}\n
FN:${await conn.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:devolperk@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:Hyzdmod\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Argentina;;;;\n
item4.X-ABLabel:País\n
END:VCARD`
})
}
conn.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
}

conn.setStatus = (status) => {
conn.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

conn.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

conn.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })

}
start()
} catch (e) {
console.log(e)
}
}

module.exports = { jadibot, conns }