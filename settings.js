const chalk = require("chalk")
const fs = require("fs")

global.hituet = 0
global.creator = "34642919120@s.whatsapp.net"
global.thumb = fs.readFileSync(`./image/thumb.jpg`)
global.fake = `Bot Lucky 🤖 | Lucky-Cv`
global.packname = `Bot Lucky 🤖`
global.wm = `Bot Lucky 🤖`
global.author = `Cvalencia`
global.antilink = true
global.antiwame = false
global.autodltt = false
global.autosticker = false
global.autoreadsw = true
global.prefijo = `.`
global.ownerNomor = '34642919120'
global.ownerName = 'Lucky-Cv'
global.ownerNumber = ["34642919120@s.whatsapp.net"]
global.cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
global.mess = {
    succes: 'Listo',
    admin: 'Solo para admins!!!',
    botAdmin: 'Necesito ser admin primero!!!',
    owner: 'Esta funcion es solo para mi dueño!!!',
    group: 'Solo para grupos!!!',
    private: 'Solo para chat privado!!!',
    bot: 'Funciones especiales del usuario del número de bot!!!',
    error: 'Error...',
    premium: 'Lo sentimos, no eres premium, presione a continuación para comprar premium',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`[BOT_LOG] Se actualizó '${__filename}'`))
	delete require.cache[file]
	require(file)
})
