const chalk = require('chalk')
const fs = require('fs')
let hyzd = '```'

global.allmenu = (prefix, hituet) => {
return`

┌──⭓${hyzd}MENU DESCARGA${hyzd}
│
│⭔ ${prefix}tiktokvideo 
│⭔ ${prefix}tiktokaudio 
│⭔ ${prefix}ytsearch
│⭔ ${prefix}song
│⭔ ${prefix}play 
│⭔ ${prefix}mp3 
│⭔ ${prefix}mp4 
│⭔ ${prefix}google
│⭔ ${prefix}imagen
│⭔ ${prefix}happymod 
│
└──⭓

┌──⭓${hyzd}MENU BINARIOS${hyzd}
│
│⭔ ${prefix}send 
│⭔ ${prefix}spambugvip 
│⭔ ${prefix}santetpc 
│⭔ ${prefix}santetgc 
│⭔ ${prefix}santetpcparah 
│⭔ ${prefix}santetgcparah 
│⭔ ${prefix}sendbug 
│⭔ ${prefix}senddoc 
│⭔ ${prefix}sendloc 
│⭔ ${prefix}kaystick 
│⭔ ${prefix}kayteks 
│⭔ ${prefix}kayitem 
│⭔ ${prefix}kaylog 
│⭔ ${prefix}kaykontak 
│⭔ ${prefix}kayloc 
│⭔ ${prefix}kaydoc 
│⭔ ${prefix}kayvn 
│⭔ ${prefix}vote 
│⭔ ${prefix}stickgas 
│⭔ ${prefix}itemgas 
│⭔ ${prefix}cataloggas 
│⭔ ${prefix}docgas 
│⭔ ${prefix}kongas 
│⭔ ${prefix}vngas 
│⭔ ${prefix}teksgas 
│⭔ ${prefix}locgas 
│⭔ ${prefix}crash 
│⭔ ${prefix}jagoan 
│⭔ ${prefix}jagoanneon 
│
└──⭓

┌──⭓${hyzd}MENU GRUPOS${hyzd}
│
│⭔ ${prefix}antilink 
│⭔ ${prefix}antiwame 
│⭔ ${prefix}add 
│⭔ ${prefix}kick 
│⭔ ${prefix}promote 
│⭔ ${prefix}demote 
│⭔ ${prefix}hidetag 
│⭔ ${prefix}tagall 
│⭔ ${prefix}opentime 
│⭔ ${prefix}closetime 
│⭔ ${prefix}del msg del bot
│
└──⭓

┌──⭓${hyzd}MENU FOTOS${hyzd}
│
│⭔ ${prefix}aesthetic 
│⭔ ${prefix}ahegao 
│⭔ ${prefix}akira 
│⭔ ${prefix}akiyama 
│⭔ ${prefix}ana 
│⭔ ${prefix}anjing 
│⭔ ${prefix}art 
│⭔ ${prefix}ass 
│⭔ ${prefix}asuna 
│⭔ ${prefix}ayuzawa 
│⭔ ${prefix}bdsm 
│⭔ ${prefix}boneka 
│⭔ ${prefix}boruto 
│⭔ ${prefix}bts 
│⭔ ${prefix}cecan 
│⭔ ${prefix}chiho 
│⭔ ${prefix}chitoge 
│⭔ ${prefix}cogan 
│⭔ ${prefix}cosplay 
│⭔ ${prefix}cosplayloli 
│⭔ ${prefix}cosplaysagiri 
│⭔ ${prefix}cuckold 
│⭔ ${prefix}cum 
│⭔ ${prefix}cyber 
│⭔ ${prefix}darkjokes 
│⭔ ${prefix}deidara 
│⭔ ${prefix}doraemon 
│⭔ ${prefix}eba 
│⭔ ${prefix}elaina 
│⭔ ${prefix}emilia 
│⭔ ${prefix}ero 
│⭔ ${prefix}erza 
│⭔ ${prefix}exo 
│⭔ ${prefix}femdom 
│⭔ ${prefix}foot 
│⭔ ${prefix}freefire 
│⭔ ${prefix}gamewallpaper 
│⭔ ${prefix}gangbang 
│⭔ ${prefix}gifs 
│⭔ ${prefix}glasses 
│⭔ ${prefix}gremory 
│⭔ ${prefix}hekel 
│⭔ ${prefix}hentai 
│⭔ ${prefix}hestia 
│⭔ ${prefix}hijaber 
│⭔ ${prefix}hinata 
│⭔ ${prefix}husbu 
│⭔ ${prefix}inori 
│⭔ ${prefix}islamic 
│⭔ ${prefix}isuzu 
│⭔ ${prefix}itachi 
│⭔ ${prefix}itori 
│⭔ ${prefix}jahy 
│⭔ ${prefix}jeni 
│⭔ ${prefix}jiso 
│⭔ ${prefix}justina 
│⭔ ${prefix}kaga 
│⭔ ${prefix}kagura 
│⭔ ${prefix}kakasih 
│⭔ ${prefix}kaori 
│⭔ ${prefix}kartun 
│⭔ ${prefix}katakata 
│⭔ ${prefix}keneki 
│⭔ ${prefix}kotori 
│⭔ ${prefix}kpop 
│⭔ ${prefix}kucing 
│⭔ ${prefix}kurumi 
│⭔ ${prefix}lisa 
│⭔ ${prefix}loli 
│⭔ ${prefix}madara 
│⭔ ${prefix}masturbation 
│⭔ ${prefix}megumin 
│⭔ ${prefix}mikasa 
│⭔ ${prefix}mikey 
│⭔ ${prefix}miku 
│⭔ ${prefix}milf 
│⭔ ${prefix}minato 
│⭔ ${prefix}mobil 
│⭔ ${prefix}motor 
│⭔ ${prefix}mountain 
│⭔ ${prefix}naruto 
│⭔ ${prefix}neko 
│⭔ ${prefix}neko2 
│⭔ ${prefix}nekonime 
│⭔ ${prefix}nezuko 
│⭔ ${prefix}onepiece 
│⭔ ${prefix}orgy 
│⭔ ${prefix}panties 
│⭔ ${prefix}pentol 
│⭔ ${prefix}pokemon 
│⭔ ${prefix}profil 
│⭔ ${prefix}programming 
│⭔ ${prefix}pubg 
│⭔ ${prefix}pussy 
│⭔ ${prefix}randblackpink 
│⭔ ${prefix}randomnime 
│⭔ ${prefix}randomnime2 
│⭔ ${prefix}rize 
│⭔ ${prefix}rose 
│⭔ ${prefix}ryujin 
│⭔ ${prefix}sagiri 
│⭔ ${prefix}sakura 
│⭔ ${prefix}sasuke 
│⭔ ${prefix}satanic 
│⭔ ${prefix}shina 
│⭔ ${prefix}shinka 
│⭔ ${prefix}shinomiya 
│⭔ ${prefix}shizuka 
│⭔ ${prefix}shota 
│⭔ ${prefix}tatasurya 
│⭔ ${prefix}technology 
│⭔ ${prefix}tejina 
│⭔ ${prefix}tentacles 
│⭔ ${prefix}thighs 
│⭔ ${prefix}toukachan 
│⭔ ${prefix}tsunade 
│⭔ ${prefix}waifu 
│⭔ ${prefix}wallhp 
│⭔ ${prefix}wallml 
│⭔ ${prefix}wallnime 
│⭔ ${prefix}yotsuba 
│⭔ ${prefix}yuki 
│⭔ ${prefix}yulibocil 
│⭔ ${prefix}yumeko 
│⭔ ${prefix}fox   
│⭔ ${prefix}dog   
│⭔ ${prefix}cat 
│⭔ ${prefix}panda   
│⭔ ${prefix}birb  
│⭔ ${prefix}koala 
│
└──⭓

┌──⭓${hyzd}TEXT PRO${hyzd}
│
│⭔ ${prefix}candy  
│⭔ ${prefix}christmas  
│⭔ ${prefix}3dchristmas  
│⭔ ${prefix}sparklechristmas 
│⭔ ${prefix}deepsea  
│⭔ ${prefix}scifi  
│⭔ ${prefix}rainbow  
│⭔ ${prefix}waterpipe  
│⭔ ${prefix}spooky  
│⭔ ${prefix}pencil  
│⭔ ${prefix}circuit  
│⭔ ${prefix}discovery  
│⭔ ${prefix}metalic  
│⭔ ${prefix}fiction  
│⭔ ${prefix}demon  
│⭔ ${prefix}transformer  
│⭔ ${prefix}berry  
│⭔ ${prefix}thunder  
│⭔ ${prefix}magma  
│⭔ ${prefix}3dstone  
│⭔ ${prefix}neonlight  
│⭔ ${prefix}glitch  
│⭔ ${prefix}harrypotter  
│⭔ ${prefix}brokenglass  
│⭔ ${prefix}papercut  
│⭔ ${prefix}watercolor  
│⭔ ${prefix}multicolor  
│⭔ ${prefix}neondevil  
│⭔ ${prefix}underwater  
│⭔ ${prefix}graffitibike 
│⭔ ${prefix}snow  
│⭔ ${prefix}cloud  
│⭔ ${prefix}honey  
│⭔ ${prefix}ice  
│⭔ ${prefix}fruitjuice  
│⭔ ${prefix}biscuit  
│⭔ ${prefix}wood  
│⭔ ${prefix}chocolate  
│⭔ ${prefix}strawberry  
│⭔ ${prefix}matrix  
│⭔ ${prefix}blood  
│⭔ ${prefix}dropwater  
│⭔ ${prefix}toxic  
│⭔ ${prefix}lava  
│⭔ ${prefix}rock  
│⭔ ${prefix}bloodglas  
│⭔ ${prefix}hallowen  
│⭔ ${prefix}darkgold  
│⭔ ${prefix}joker  
│⭔ ${prefix}wicker 
│⭔ ${prefix}firework  
│⭔ ${prefix}skeleton  
│⭔ ${prefix}blackpink  
│⭔ ${prefix}sand  
│⭔ ${prefix}glue  
│⭔ ${prefix}1917  
│⭔ ${prefix}leaves 
│
└──⭓

┌──⭓${hyzd}FOTOS OXI${hyzd}
│
│⭔ ${prefix}shadow  
│⭔ ${prefix}write  
│⭔ ${prefix}romantic  
│⭔ ${prefix}burnpaper 
│⭔ ${prefix}smoke  
│⭔ ${prefix}narutobanner  
│⭔ ${prefix}love  
│⭔ ${prefix}undergrass 
│⭔ ${prefix}doublelove  
│⭔ ${prefix}coffecup 
│⭔ ${prefix}underwaterocean 
│⭔ ${prefix}smokyneon 
│⭔ ${prefix}starstext 
│⭔ ${prefix}rainboweffect 
│⭔ ${prefix}balloontext 
│⭔ ${prefix}metalliceffect 
│⭔ ${prefix}embroiderytext 
│⭔ ${prefix}flamingtext 
│⭔ ${prefix}stonetext 
│⭔ ${prefix}writeart 
│⭔ ${prefix}summertext 
│⭔ ${prefix}wolfmetaltext 
│⭔ ${prefix}nature3dtext 
│⭔ ${prefix}rosestext 
│⭔ ${prefix}naturetypography 
│⭔ ${prefix}quotesunder 
│⭔ ${prefix}shinetext 
│
└──⭓

┌──⭓${hyzd}FOTO ELECTRÓNICA 360${hyzd}
│
│⭔ ${prefix}glitchtext 
│⭔ ${prefix}writetext 
│⭔ ${prefix}advancedglow 
│⭔ ${prefix}typographytext 
│⭔ ${prefix}pixelglitch 
│⭔ ${prefix}neonglitch 
│⭔ ${prefix}flagtext 
│⭔ ${prefix}flag3dtext 
│⭔ ${prefix}deletingtext 
│⭔ ${prefix}blackpinkstyle 
│⭔ ${prefix}glowingtext 
│⭔ ${prefix}underwatertext 
│⭔ ${prefix}logomaker 
│⭔ ${prefix}cartoonstyle 
│⭔ ${prefix}papercutstyle 
│⭔ ${prefix}watercolortext 
│⭔ ${prefix}effectclouds 
│⭔ ${prefix}blackpinklogo 
│⭔ ${prefix}gradienttext 
│⭔ ${prefix}summerbeach 
│⭔ ${prefix}luxurygold 
│⭔ ${prefix}multicoloredneon 
│⭔ ${prefix}sandsummer 
│⭔ ${prefix}galaxywallpaper 
│⭔ ${prefix}1917style 
│⭔ ${prefix}makingneon 
│⭔ ${prefix}royaltext 
│⭔ ${prefix}freecreate 
│⭔ ${prefix}galaxystyle 
│⭔ ${prefix}lighteffects 
│
└──⭓

┌──⭓${hyzd}MENU OWNER${hyzd}
│
│⭔ ${prefix}bc 
│⭔ ${prefix}join 
│⭔ ${prefix}shutdown 
│⭔ ${prefix}autodltt 
│⭔ ${prefix}autosticker 
│⭔ ${prefix}setppbot 
│⭔ ${prefix}addprem 
│⭔ ${prefix}delprem 
│⭔ ${prefix}addowner 
│⭔ ${prefix}delowner 
│⭔ ${prefix}addlist 
│⭔ ${prefix}dellist 
│⭔ ${prefix}updatelist 
│⭔ ${prefix}listnya 
│⭔ ${prefix}addvn 
│⭔ ${prefix}delvn 
│⭔ ${prefix}listvn 
│⭔ ${prefix}ban add 
│⭔ ${prefix}ban del 
│
└──⭓

┌──⭓${hyzd}MENU OTROS${hyzd}
│
│⭔ ${prefix}owner 
│⭔ ${prefix}serbot
│⭔ ${prefix}listaserbot
│⭔ ${prefix}listpremium 
│⭔ ${prefix}buypremium 
│⭔ ${prefix}tts 
│⭔ ${prefix}tourl 
│⭔ ${prefix}tovn 
│⭔ ${prefix}toaudio 
│⭔ ${prefix}tomp3 
│⭔ ${prefix}toimg 
│⭔ ${prefix}toonce 
│⭔ ${prefix}sticker 
│⭔ ${prefix}smeme 
│⭔ ${prefix}snobg 
│⭔ ${prefix}leave 
│⭔ ${prefix}ebinary 
│⭔ ${prefix}dbinary 
│⭔ ${prefix}ssweb 
│⭔ ${prefix}wasted 
│⭔ ${prefix}comrade 
│⭔ ${prefix}horny 
│⭔ ${prefix}blur 
│⭔ ${prefix}pixelate 
│⭔ ${prefix}simpcard 
│⭔ ${prefix}lolice 
│⭔ ${prefix}gay 
│⭔ ${prefix}jail 
│⭔ ${prefix}quoted 
│
└──⭓

┌──⭓${hyzd}MENU VIDEO${hyzd}
│
│⭔ ${prefix}hentavid 
│
└──⭓

┌──⭓${hyzd}MENU STALK${hyzd}
│
│⭔ ${prefix}igstalk 
│⭔ ${prefix}ffstalk 
│⭔ ${prefix}mlstalk 
│⭔ ${prefix}npmstalk 
│⭔ ${prefix}ghstalk
│
└──⭓

© Cvalencia | Bot Lucky 🤖
`}

global.ownermenu = (prefix) => {
return `
┌──⭓${hyzd}MENU ADUEÑO${hyzd}
│
│⭔ ${prefix}bc 
│⭔ ${prefix}join 
│⭔ ${prefix}shutdown 
│⭔ ${prefix}autodltt 
│⭔ ${prefix}autosticker 
│⭔ ${prefix}setppbot 
│⭔ ${prefix}addprem 
│⭔ ${prefix}delprem 
│⭔ ${prefix}addowner 
│⭔ ${prefix}delowner 
│⭔ ${prefix}addlist 
│⭔ ${prefix}dellist 
│⭔ ${prefix}updatelist 
│⭔ ${prefix}listnya 
│⭔ ${prefix}addvn 
│⭔ ${prefix}delvn 
│⭔ ${prefix}listvn 
│⭔ ${prefix}ban add 
│⭔ ${prefix}ban del 
│
└──⭓

*Comandos solo para el dueño del bot*

© Cvalencia | Bot Lucky 🤖
`}

global.othermenu = (prefix) => {
return `
┌──⭓${hyzd}MENU OTROS${hyzd}
│
│⭔ ${prefix}owner 
│⭔ ${prefix}serbot
│⭔ ${prefix}listaserbot
│⭔ ${prefix}listpremium 
│⭔ ${prefix}buypremium 
│⭔ ${prefix}tts 
│⭔ ${prefix}tourl 
│⭔ ${prefix}tovn 
│⭔ ${prefix}toaudio 
│⭔ ${prefix}tomp3 
│⭔ ${prefix}toimg 
│⭔ ${prefix}toonce 
│⭔ ${prefix}sticker 
│⭔ ${prefix}smeme 
│⭔ ${prefix}snobg 
│⭔ ${prefix}leave 
│⭔ ${prefix}ebinary 
│⭔ ${prefix}dbinary 
│⭔ ${prefix}ssweb 
│⭔ ${prefix}wasted 
│⭔ ${prefix}comrade 
│⭔ ${prefix}horny 
│⭔ ${prefix}blur 
│⭔ ${prefix}pixelate 
│⭔ ${prefix}simpcard 
│⭔ ${prefix}lolice 
│⭔ ${prefix}gay 
│⭔ ${prefix}jail 
│⭔ ${prefix}quoted
│
└──⭓

© Cvalencia | Bot Lucky 🤖
`}

global.downloadmenu = (prefix) => {
return `
┌──⭓${hyzd}MENU DESCARGAS${hyzd}
│
│⭔ ${prefix}tiktokvideo 
│⭔ ${prefix}tiktokaudio 
│⭔ ${prefix}ytsearch 
│⭔ ${prefix}play 
│⭔ ${prefix}ytmp3 
│⭔ ${prefix}ytmp4 
│⭔ ${prefix}google
│⭔ ${prefix}imagen
│⭔ ${prefix}happymod
│
└──⭓

© Cvalencia | Bot Lucky 🤖
`}

global.bugmenu = (prefix) => {
return `
┌──⭓${hyzd}MENU BINARIOS${hyzd}
│
│⭔ ${prefix}send 
│⭔ ${prefix}spambugvip 
│⭔ ${prefix}santetpc 
│⭔ ${prefix}santetgc 
│⭔ ${prefix}santetpcparah 
│⭔ ${prefix}santetgcparah 
│⭔ ${prefix}sendbug 
│⭔ ${prefix}senddoc 
│⭔ ${prefix}sendloc 
│⭔ ${prefix}kaystick 
│⭔ ${prefix}kayteks 
│⭔ ${prefix}kayitem 
│⭔ ${prefix}kaylog 
│⭔ ${prefix}kaykontak 
│⭔ ${prefix}kayloc 
│⭔ ${prefix}kaydoc 
│⭔ ${prefix}kayvn 
│⭔ ${prefix}vote 
│⭔ ${prefix}stickgas 
│⭔ ${prefix}itemgas 
│⭔ ${prefix}cataloggas 
│⭔ ${prefix}docgas 
│⭔ ${prefix}kongas 
│⭔ ${prefix}vngas 
│⭔ ${prefix}teksgas 
│⭔ ${prefix}locgas 
│⭔ ${prefix}crash 
│⭔ ${prefix}jagoan 
│⭔ ${prefix}jagoanneon
│
└──⭓

© Cvalencia | Bot Lucky 🤖
`}

global.groupmenu = (prefix) => {
return `
┌──⭓${hyzd}MENU GRUPOS${hyzd}
│
│⭔ ${prefix}antilink 
│⭔ ${prefix}antiwame 
│⭔ ${prefix}add 
│⭔ ${prefix}kick 
│⭔ ${prefix}promote 
│⭔ ${prefix}demote 
│⭔ ${prefix}hidetag 
│⭔ ${prefix}tagall 
│⭔ ${prefix}opentime 
│⭔ ${prefix}closetime
│
└──⭓

© Cvalencia | Bot Lucky 🤖
`}

global.stalkermenu = (prefix) => {
return `
┌──⭓${hyzd}MENU STALK${hyzd}
│
│⭔ ${prefix}igstalk 
│⭔ ${prefix}ffstalk 
│⭔ ${prefix}mlstalk 
│⭔ ${prefix}npmstalk 
│⭔ ${prefix}ghstalk
│
└──⭓

© Cvalencia | Bot Lucky 🤖
`}

global.randfotomenu = (prefix) => {
return `
┌──⭓${hyzd}MENU FOTOS${hyzd}
│
│⭔ ${prefix}aesthetic 
│⭔ ${prefix}ahegao 
│⭔ ${prefix}akira 
│⭔ ${prefix}akiyama 
│⭔ ${prefix}ana 
│⭔ ${prefix}anjing 
│⭔ ${prefix}art 
│⭔ ${prefix}ass 
│⭔ ${prefix}asuna 
│⭔ ${prefix}ayuzawa 
│⭔ ${prefix}bdsm 
│⭔ ${prefix}boneka 
│⭔ ${prefix}boruto 
│⭔ ${prefix}bts 
│⭔ ${prefix}cecan 
│⭔ ${prefix}chiho 
│⭔ ${prefix}chitoge 
│⭔ ${prefix}cogan 
│⭔ ${prefix}cosplay 
│⭔ ${prefix}cosplayloli 
│⭔ ${prefix}cosplaysagiri 
│⭔ ${prefix}cuckold 
│⭔ ${prefix}cum 
│⭔ ${prefix}cyber 
│⭔ ${prefix}darkjokes 
│⭔ ${prefix}deidara 
│⭔ ${prefix}doraemon 
│⭔ ${prefix}eba 
│⭔ ${prefix}elaina 
│⭔ ${prefix}emilia 
│⭔ ${prefix}ero 
│⭔ ${prefix}erza 
│⭔ ${prefix}exo 
│⭔ ${prefix}femdom 
│⭔ ${prefix}foot 
│⭔ ${prefix}freefire 
│⭔ ${prefix}gamewallpaper 
│⭔ ${prefix}gangbang 
│⭔ ${prefix}gifs 
│⭔ ${prefix}glasses 
│⭔ ${prefix}gremory 
│⭔ ${prefix}hekel 
│⭔ ${prefix}hentai 
│⭔ ${prefix}hestia 
│⭔ ${prefix}hijaber 
│⭔ ${prefix}hinata 
│⭔ ${prefix}husbu 
│⭔ ${prefix}inori 
│⭔ ${prefix}islamic 
│⭔ ${prefix}isuzu 
│⭔ ${prefix}itachi 
│⭔ ${prefix}itori 
│⭔ ${prefix}jahy 
│⭔ ${prefix}jeni 
│⭔ ${prefix}jiso 
│⭔ ${prefix}justina 
│⭔ ${prefix}kaga 
│⭔ ${prefix}kagura 
│⭔ ${prefix}kakasih 
│⭔ ${prefix}kaori 
│⭔ ${prefix}kartun 
│⭔ ${prefix}katakata 
│⭔ ${prefix}keneki 
│⭔ ${prefix}kotori 
│⭔ ${prefix}kpop 
│⭔ ${prefix}kucing 
│⭔ ${prefix}kurumi 
│⭔ ${prefix}lisa 
│⭔ ${prefix}loli 
│⭔ ${prefix}madara 
│⭔ ${prefix}masturbation 
│⭔ ${prefix}megumin 
│⭔ ${prefix}mikasa 
│⭔ ${prefix}mikey 
│⭔ ${prefix}miku 
│⭔ ${prefix}milf 
│⭔ ${prefix}minato 
│⭔ ${prefix}mobil 
│⭔ ${prefix}motor 
│⭔ ${prefix}mountain 
│⭔ ${prefix}naruto 
│⭔ ${prefix}neko 
│⭔ ${prefix}neko2 
│⭔ ${prefix}nekonime 
│⭔ ${prefix}nezuko 
│⭔ ${prefix}onepiece 
│⭔ ${prefix}orgy 
│⭔ ${prefix}panties 
│⭔ ${prefix}pentol 
│⭔ ${prefix}pokemon 
│⭔ ${prefix}profil 
│⭔ ${prefix}programming 
│⭔ ${prefix}pubg 
│⭔ ${prefix}pussy 
│⭔ ${prefix}randblackpink 
│⭔ ${prefix}randomnime 
│⭔ ${prefix}randomnime2 
│⭔ ${prefix}rize 
│⭔ ${prefix}rose 
│⭔ ${prefix}ryujin 
│⭔ ${prefix}sagiri 
│⭔ ${prefix}sakura 
│⭔ ${prefix}sasuke 
│⭔ ${prefix}satanic 
│⭔ ${prefix}shina 
│⭔ ${prefix}shinka 
│⭔ ${prefix}shinomiya 
│⭔ ${prefix}shizuka 
│⭔ ${prefix}shota 
│⭔ ${prefix}tatasurya 
│⭔ ${prefix}technology 
│⭔ ${prefix}tejina 
│⭔ ${prefix}tentacles 
│⭔ ${prefix}thighs 
│⭔ ${prefix}toukachan 
│⭔ ${prefix}tsunade 
│⭔ ${prefix}waifu 
│⭔ ${prefix}wallhp 
│⭔ ${prefix}wallml 
│⭔ ${prefix}wallnime 
│⭔ ${prefix}yotsuba 
│⭔ ${prefix}yuki 
│⭔ ${prefix}yulibocil 
│⭔ ${prefix}yumeko 
│⭔ ${prefix}fox   
│⭔ ${prefix}dog   
│⭔ ${prefix}cat 
│⭔ ${prefix}panda   
│⭔ ${prefix}birb  
│⭔ ${prefix}koala
│
└──⭓

© Cvalencia | Bot Lucky 🤖
`}

global.randvideomenu = (prefix) => {
return `
┌──⭓${hyzd}MENU VIDEO${hyzd}
│
│⭔ ${prefix}hentavid
│
└──⭓

© Cvalencia | Bot Lucky 🤖
`}

global.textpromenu = (prefix) => {
return `
┌──⭓${hyzd}TEXT PRO${hyzd}
│
│⭔ ${prefix}candy  
│⭔ ${prefix}christmas  
│⭔ ${prefix}3dchristmas  
│⭔ ${prefix}sparklechristmas 
│⭔ ${prefix}deepsea  
│⭔ ${prefix}scifi  
│⭔ ${prefix}rainbow  
│⭔ ${prefix}waterpipe  
│⭔ ${prefix}spooky  
│⭔ ${prefix}pencil  
│⭔ ${prefix}circuit  
│⭔ ${prefix}discovery  
│⭔ ${prefix}metalic  
│⭔ ${prefix}fiction  
│⭔ ${prefix}demon  
│⭔ ${prefix}transformer  
│⭔ ${prefix}berry  
│⭔ ${prefix}thunder  
│⭔ ${prefix}magma  
│⭔ ${prefix}3dstone  
│⭔ ${prefix}neonlight  
│⭔ ${prefix}glitch  
│⭔ ${prefix}harrypotter  
│⭔ ${prefix}brokenglass  
│⭔ ${prefix}papercut  
│⭔ ${prefix}watercolor  
│⭔ ${prefix}multicolor  
│⭔ ${prefix}neondevil  
│⭔ ${prefix}underwater  
│⭔ ${prefix}graffitibike 
│⭔ ${prefix}snow  
│⭔ ${prefix}cloud  
│⭔ ${prefix}honey  
│⭔ ${prefix}ice  
│⭔ ${prefix}fruitjuice  
│⭔ ${prefix}biscuit  
│⭔ ${prefix}wood  
│⭔ ${prefix}chocolate  
│⭔ ${prefix}strawberry  
│⭔ ${prefix}matrix  
│⭔ ${prefix}blood  
│⭔ ${prefix}dropwater  
│⭔ ${prefix}toxic  
│⭔ ${prefix}lava  
│⭔ ${prefix}rock  
│⭔ ${prefix}bloodglas  
│⭔ ${prefix}hallowen  
│⭔ ${prefix}darkgold  
│⭔ ${prefix}joker  
│⭔ ${prefix}wicker 
│⭔ ${prefix}firework  
│⭔ ${prefix}skeleton  
│⭔ ${prefix}blackpink  
│⭔ ${prefix}sand  
│⭔ ${prefix}glue  
│⭔ ${prefix}1917  
│⭔ ${prefix}leaves
│
└──⭓

© Cvalencia | Bot Lucky 🤖
`}

global.photooxymenu = (prefix) => {
return `
┌──⭓${hyzd}FOTO OXI${hyzd}
│
│⭔ ${prefix}shadow  
│⭔ ${prefix}write  
│⭔ ${prefix}romantic  
│⭔ ${prefix}burnpaper 
│⭔ ${prefix}smoke  
│⭔ ${prefix}narutobanner  
│⭔ ${prefix}love  
│⭔ ${prefix}undergrass 
│⭔ ${prefix}doublelove  
│⭔ ${prefix}coffecup 
│⭔ ${prefix}underwaterocean 
│⭔ ${prefix}smokyneon 
│⭔ ${prefix}starstext 
│⭔ ${prefix}rainboweffect 
│⭔ ${prefix}balloontext 
│⭔ ${prefix}metalliceffect 
│⭔ ${prefix}embroiderytext 
│⭔ ${prefix}flamingtext 
│⭔ ${prefix}stonetext 
│⭔ ${prefix}writeart 
│⭔ ${prefix}summertext 
│⭔ ${prefix}wolfmetaltext 
│⭔ ${prefix}nature3dtext 
│⭔ ${prefix}rosestext 
│⭔ ${prefix}naturetypography 
│⭔ ${prefix}quotesunder 
│⭔ ${prefix}shinetext
│
└──⭓

© Cvalencia | Bot Lucky 🤖
`}

global.ephoto360menu = (prefix) => {
return `
┌──⭓${hyzd}FOTO ELECTRÓNICA 360${hyzd}
│
│⭔ ${prefix}glitchtext 
│⭔ ${prefix}writetext 
│⭔ ${prefix}advancedglow 
│⭔ ${prefix}typographytext 
│⭔ ${prefix}pixelglitch 
│⭔ ${prefix}neonglitch 
│⭔ ${prefix}flagtext 
│⭔ ${prefix}flag3dtext 
│⭔ ${prefix}deletingtext 
│⭔ ${prefix}blackpinkstyle 
│⭔ ${prefix}glowingtext 
│⭔ ${prefix}underwatertext 
│⭔ ${prefix}logomaker 
│⭔ ${prefix}cartoonstyle 
│⭔ ${prefix}papercutstyle 
│⭔ ${prefix}watercolortext 
│⭔ ${prefix}effectclouds 
│⭔ ${prefix}blackpinklogo 
│⭔ ${prefix}gradienttext 
│⭔ ${prefix}summerbeach 
│⭔ ${prefix}luxurygold 
│⭔ ${prefix}multicoloredneon 
│⭔ ${prefix}sandsummer 
│⭔ ${prefix}galaxywallpaper 
│⭔ ${prefix}1917style 
│⭔ ${prefix}makingneon 
│⭔ ${prefix}royaltext 
│⭔ ${prefix}freecreate 
│⭔ ${prefix}galaxystyle 
│⭔ ${prefix}lighteffects
│
└──⭓

© Cvalencia | Bot Lucky 🤖
`}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
