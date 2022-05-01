let fetch = require("node-fetch");

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `
*${usedPrefix}${command} <heyvan adı>*
Meselen:
*${usedPrefix}${command} <pişik>*\n
┌〔 Options 〕
├ it
├ pişik
├ panda
├ tülkü
├ panda2
├ koala
├ quş
├ yenot
├ kenqru
└────
`.trim();
  let res = await fetch(
    API("https://some-random-api.ml", "/animal/" + text, {})
  );
  if (!res.ok) throw `${res.status} ${res.statusText}`;
  let json = await res.json();
  if (json.image) await conn.sendFile(m.chat, json.image, "", `${json.fact}\n\n~kazukafu`, m);
  else throw json;
};
handler.help = ["animal"].map((v) => v + " <animal>");
handler.tags = ["internet"];
handler.command = /^(animal|animalfact)$/i;

module.exports = handler;
