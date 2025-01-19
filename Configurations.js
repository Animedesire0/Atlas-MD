require("dotenv").config();

let gg = process.env.MODS;
if (!gg) {
  gg = "918252219860";   // You can replace this number with yours //
}


global.owner = gg.split(",");
global.mongodb = "mongodb+srv://Atlas_MD:<1DER1539A>@cluster0.poiwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.sessionId = process.env.SESSION_ID || "m";
global.prefa = process.env.PREFIX || "/";
global.tenorApiKey = process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `Sticker by Elaina`;
global.author = process.env.AUTHOR || "\n\n\n\n\n\n ©RONEN-BOTS|2024";
global.port = process.env.PORT || "10000";
global.openAiAPI = process.env.OPENAI_API || "Put your openai API key here";
global.owner = gg.split(",");
global.dev = "Yeager";
global.version = "1.0";
global.website = "coming soon..."
module.exports = {
  mongodb: global.mongodb,
};
