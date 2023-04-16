
const { modul } = require('./module');
const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber } = modul;
const { Boom } = boom
const { default: connConnect, useSingleFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, generateWAMessage, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = baileys
const { color, bgcolor } = require('./lib/color')
const colors = require('colors')
const { uncache, nocache } = require('./lib/loader')
const { state, saveState, saveCreds } = useMultiFileAuthState(`./session.json`)
const { start } = require('./lib/spinner')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')

const owner = JSON.parse(fs.readFileSync('./database/owner.json'))

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })

require('./cases.js')
nocache('../cases.js', module => console.log(color('[ UPDATE ]', 'cyan'), color(`'${module}'`, 'green'), 'El archivo está actualizado!!!'))
require('./cases.js')
nocache('../cases.js', module => console.log(color('[ UPDATE ]', 'cyan'), color(`'${module}'`, 'green'), 'El archivo está actualizado!!!'))

async function connBot() {
const { version, isLatest } = await fetchLatestBaileysVersion()
const conn = connConnect({
logger: pino({ level: 'silent' }),
printQRInTerminal: true,
browser: ['Bot Lucky 2022','Safari','1.0.0'],
auth: state,
version
})

store.bind(conn.ev)

console.log(color(figlet.textSync(`Bot Lucky`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
whitespaceBreak: false
}), 'blue'))

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
await conn.sendMessage(callerId, { text: `Sistema Automático de Bloqueo!!!\nno llamar al Bot!!!\nno llamar. Póngase en contacto con el propietario para abrir!!!`}, { quoted : qutsnya })
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
console.log(err)}})

conn.ev.on('group-participants.update', async (anu) => {
console.log(anu)
try {
let metadata = await conn.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await conn.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
try {
ppgroup = await conn.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
if (anu.action == 'add') {
conn.sendMessage(anu.id, { text : `Bienvenido @${num.split("@")[0]} al grupo ${metadata.subject}`, mentions : [num]},{ quoted : {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "status@broadcast" }) 
},
"message": {
"pollCreationMessage": {
"name": wm,
"options": [
	{
"optionName": "Bot Lucky 🤖"
	},
	{
"optionName": "Cvalencia"
	},
	{
"optionName": "HyzdMod"
	},
	{
"optionName": "2022"
	},
	{
"optionName": "Bot Lucky 🤖"
	}
],
"selectableOptionsCount": 5
}}}})
} else if (anu.action == 'remove') {
conn.sendMessage(anu.id, { text : `Bye bye @${num.split("@")[0]}`, mentions : [num]},{ quoted : {
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "status@broadcast" }) 
},
"message": {
"pollCreationMessage": {
"name": wm,
"options": [
	{
"optionName": "Bot Lucky 🤖"
	},
	{
"optionName": "Lucky-Cv"
	},
	{
"optionName": "Cvalencia"
	},
	{
"optionName": "2022"
	},
	{
"optionName": "Bot Lucky 🤖"
	}
],
"selectableOptionsCount": 5
}}}})
}
}
} catch (err) {
console.log(err)
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
item1.X-ABLabel:Click para ir al chat\n
item2.EMAIL;type=INTERNET: clucky0320outlook@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:valencia\n
item3.X-ABLabel:Instagram\n
item4.ADR:;;España;;;;\n
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

conn.public = true

conn.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await conn.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

conn.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

conn.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await conn.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

conn.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await conn.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
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

conn.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

conn.sendPoll = async (jid, name = '', optiPoll, options = {}) => {
                if (!Array.isArray(optiPoll[0]) && typeof optiPoll[0] === 'string') optiPoll = [optiPoll]
                const pollMessage = {
        name: name,
        options: optiPoll.map(btn => ({
                            optionName: !nullish(btn[0]) && btn[0] || ''
                    })),
                    selectableOptionsCount: 1
        }
                return conn.relayMessage(jid, { pollCreationMessage: pollMessage }, { ...options });
                }

conn.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await conn.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await conn.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

conn.sendText = (jid, text, quoted = '', options) => conn.sendMessage(jid, { text: text, ...options }, { quoted })

conn.serializeM = (m) => smsg(conn, m, store)

conn.ev.on('connection.update', async (update) => {
const { connection, lastDisconnect } = update	
if (connection === 'close') {
let reason = new Boom(lastDisconnect?.error)?.output.statusCode
if (reason === DisconnectReason.badSession) { console.log(`Archivo de sesión incorrecto, elimine la sesión y vuelva a escanear`); conn.logout(); }
else if (reason === DisconnectReason.connectionClosed) { console.log("Conexión cerrada, reconectando...."); connBot(); }
else if (reason === DisconnectReason.connectionLost) { console.log("Conexión perdida del servidor, reconectando..."); connBot(); }
else if (reason === DisconnectReason.connectionReplaced) { console.log("Conexión reemplazada, otra nueva sesión abierta, cierre la sesión actual primero"); conn.logout(); }
else if (reason === DisconnectReason.loggedOut) { console.log(`Dispositivo cerrado, escanee nuevamente y ejecute.`); conn.logout(); }
else if (reason === DisconnectReason.restartRequired) { console.log("Reinicio requerido, reiniciando..."); connBot(); }
else if (reason === DisconnectReason.timedOut) { console.log("Se agotó el tiempo de espera de la conexión, conectando..."); connBot(); }
else conn.end(`Motivo de desconexión desconocido: ${reason}|${connection}`)
}
console.log('Conectado...', update)
})

start('2',colors.bold.white('\nConectado Esperando nuevos mensajes..'))

conn.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
conn.sendMessage(jid, buttonMessage, { quoted, ...options })
}

conn.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: conn.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "IDR",
"priceAmount1000": "100000",
"url": `https://wa.me/34642919120`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `6287705048235@s.whatsapp.net`
}
}, options)
return conn.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

conn.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
conn.relayMessage(jid, template.message, { messageId: template.key.id })
}

conn.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
conn.sendMessage(jid, fjejfjjjer, { quoted: m })
}

return conn
}

connBot()

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
