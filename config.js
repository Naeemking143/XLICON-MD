const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "923184070915"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanytofficial:s4salmanyt@cluster0.6wtgil3.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '923184070915' 
global.devs = '923184070915';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0pjNWxBNGZVTkU4VFFiUExtTkVqUzByeEZycEZoaENXVytIazE0a2IyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVEVLRHV2L0l6dWxiRUoyR1k5d3FyakVLRjFVWGl2b3AxWnlNbFM3OGczdz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlT3lIbGRVUjJuL0pqTkVrbmRiNXVON0xCMWk1YnFEK1hVZXMzMjVtQTM0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNdHA2aDVoNnEzQlI3emV0SjZPTFpmdjV5ZGVzZzhQUmVVdDA0YkFjSWw0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVQOVptQnNveWtaL2hnYkRRUlU5bDdSLzB3K0xjMzkrNmYrMDR0dEpZR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZIdE9Nd21FV1MyS054T2oxUG9hZXhCdG9RS1ZmUGMzQUpHTmN0ZGIwamM9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJNmJsWU51WWRNUDdQVmhqa2xlc3lhRHNiUHl2eHpwUHF1d2Y1b2tJL3VNV0JOSzV3VTVZN0ZnY0dIWkFyQmh0a2h2Tnc3SGFDVzVPTUsyaUNkK2lBZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE5OSwiYWR2U2VjcmV0S2V5IjoiU1Vyaml4NFhLZVVFMnJWb0hKQTFKQ053Z2Faa0g5aEhyUDIyMkp6a0pMUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiaVl0YTAwRmtTYmliREoweTh2aTB5dyIsInBob25lSWQiOiI1NDQ2Mzc1OS1iZjRlLTQ3MTUtOGNjNy1kNGYwMTk3NThlY2YiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia2hvdjJJSkRwMEV0Vlh2NE0zOUduRU5PR2ZFPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzbkt2amVXMjQ2MnJYMit1dTNRZW1Qa1ZqTDA9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNMR2dpR0FRak4yL3FRWVlFZz09IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlRpZnFkZGFtMWk2Q0dVYUxldXkxT2pJYW8yT1pOZklxYk05MCs1QktJaDA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJoUWFxKzJFRGJzQmk5NlhrVlhQc1JWdHkrZVY0RWo4ZU5LL1JLcWUyVURyNkN4cXBuZUhUL2xEUTNZWkc5Nmd6VVRCTnltMDZKeGJwUWtBbTQ2Y0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGYmF2MzFqMFNKaG5YNjJta0FwNTBuY0FQaXM5ZlRzZjRJYjk3elNuU0g2cVpmUTBTNDFoSmdwc1hSdGdvNnVLRCtvY2tkdFROZXNUWkNETjljMVFDZz09In0sIm1lIjp7ImlkIjoiOTIzMzI0MDQ1ODU1OjE3QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuS6l1LguY/NnMSr4LmPVOS6lyJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMzMjQwNDU4NTU6MTdAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVTRuNm5YV3B0WXVnaGxHaTNyc3RUb3lHcU5qbVRYeUttelBkUHVRU2lJZCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY5NzY0MDA4MH0=",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'naeemking',
  packname:  process.env.PACK_NAME || 'naeemking',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? tru3 : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '┏━━━━━━━━━━━━━━┓
┃ ╭┈───────────╮
┃ │ 〘 WELCOME 〙              
┃ ╰┈───────────╯
┃┏━━━━━━━━━━━━┓
┣┣⃟❍➢ NAEEM KING.                 
┣┣⃟❍➢ +923458016256           
┣┣⃟❍➢ 𝚴⃡𝚨⃐𝚵⃦⃓𝚵𝚳.                     
┣┣⃟❍➢ 👑⁨♕⃟🇳𝝰𝝴𝝴𝟄𝟁.             
┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛
  ▰▱▰▱ GMAIL ▱▰▱▰
  Naeemking@kissfans.com
   ▰▱▰▱▰▱▰▱▰▱▰' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? true : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
