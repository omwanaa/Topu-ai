//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "255673750170";
global.owner = process.env.OWNER_NUMBER || "255673750170";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  ""
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "TOP-Md",
  ownername: process.env.OWNER_NAME || "TOPU",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZVTWRGU3dlS3FqQWtKU0JuM1kvWk5Pb1EzTVAxcnBKU3RYd05XUEhFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFozUnFjWTdWLy9xWm9YQ0dRVk8zWDZjdVl4cVJuVlR2V0lLdGxocFJrTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSll3YUtER3dnSHNUNnNraWZvalpIeVFwRGJUNFBwWklheGc0ZVovUjNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJsNkEvbEJoRTRsZCtaWVJrYzhvSktSM2ZVMWw1Z04ySWlnWlRwYmlkTm5vPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJMazZ1L3JMUTU1YVkwUU5XeXN4V1lhSHg4QXpOdDVCNmRaOXBWTy95Mkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklJYmNEWjlZcURCWUlJMmI3aVlROXJLd09nNHUvZ3BvTCtCbWo2ZDdMVFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUxVNURUUlJjSzNqMHhLeS8rVTFOOUZOeldLamUvTTJ5NFE5bWdDdm5Faz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDdzb0RCeDVNS1J5WGk2SGwveHNqRlB6eHpSZDBCYnpoZmJZcmFpakJWQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVkazlyVjA0Y2FQYzdFenc2YXJsUGlLQk5nWHk0K2lLeEFsek5XdHZ0ZDMyZzI1Ynk2T1dWNDNUM2pYMFdHaG1PYVpHTHpUU2cwa1krMldaN0pKcEJ3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6InR3aUd5TjJleitYVU9ZbXFXRXdXM2c5UCt3TmJiNlFDNWVRTnRlbGtDbzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0MTAyMzczODU4QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRGQzMzNTBGRTc3NTI0MUJGRkU2NkE2MUM2NDU5RjJBIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjA2NDEzMDN9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDEwMjM3Mzg1OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDRkVFNDdEMjA4QzlFOUYyNzMwNTAwRjgwMzI1OTBBQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIwNjQxMzA1fV0sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlczBsb2Y4T1NxYXdkdTVvektQeUNBIiwicGhvbmVJZCI6Ijg2MTdiM2QyLTJiZTEtNDE4MC1iMjBjLTcwYWQ2OWEzNzYxMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTXFJclBWT3FDazJBcDlLWDlsMU9aK09UVmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMjZaOS9yTWY5MmhhY1RSaU8wK1VMa3JpVFI4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxYOUNSSFgyIiwibWUiOnsiaWQiOiIyNTQxMDIzNzM4NTg6NTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTVdBTkNIQSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS2pMcEtNSEVJYk91N1FHR0FrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOXhRdFZWd0hud1YyNlpEVjNlQkZXMVJFQ3FNeDh3UEFvSHBXS3lSRy9nRT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSzhtaXhBUHdkTGovOU1TMzlPOWhrWjVjLytwK1pTQ25sRktCQU5uZWdObGFIQm1iVHFLOE95VktOa3hlYVFZTndFVXdNVmt6d1IxTlZwSzFsQkJ3Q1E9PSIsImRldmljZVNpZ25hdHVyZSI6IktEZEdCcG92TGhJY0RkeTE3YlNQTTJGWmEzUU94OVNCNzlnM2dncW5rbkR6RVorNXJXczRUeXg3UThqeW9tWkhaQWFwL1RVWVlHUUdrSGpGeTQxckFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTAyMzczODU4OjUzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZjVUxWVmNCNThGZHVtUTFkM2dSVnRVUkFxak1mTUR3S0I2Vmlza1J2NEIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA2NDEzMDAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRHdrIn0=",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
