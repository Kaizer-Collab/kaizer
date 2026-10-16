module.exports = {
  config: {
    name: "autoreactv3",
    version: "1.0.1",
    author: "Siegfried Samá",
    countDown: 0,
    role: 0,
    description: {
      en: "Auto react and auto respond to keywords (v3)"
    },
    category: "events"
  },

  onStart: async function () {},

  onChat: async function ({ api, event }) {
    const { threadID, messageID, body } = event;
    if (!body) return;

    const msg = body.toLowerCase();

    const setReact = (emoji) => {
      api.setMessageReaction(emoji, messageID, (err) => {
        if (err) console.error(`[autoreactv3] React error: ${err}`);
      }, true);
    };

    const reply = (text) => api.sendMessage(text, threadID, messageID);

    // 😆 Funny / Bastos reactions
    if (["lol","lmao","haha","xd","puta","gagu","tanga","tanginamo",
        "hayup","bobo","iyot","eut","kantot","gago"].some(k => msg.includes(k))) {
      return setReact("😆");
    }

    // 😢 Sad / Hurt reactions
    if (["aray","hays","sakit","ouch","hurt","please","😢","😔","🥺","sad"].some(k => msg.includes(k))) {
      return setReact("😢");
    }

    // 😮 Surprise / Shock reactions
    if (["wow","luh","sheesh","damn","yes","weh","loh","hala","lah","what","omg"].some(k => msg.includes(k))) {
      return setReact("😮");
    }

    // ❤️ + message
    if (msg.includes("nigga") || msg.includes("nigg")) {
      setReact("❤️");
      return reply("I love nigga");
    }

    // Fun chain responses
    if (msg.includes("ferson") || msg.includes("forda")) {
      return reply("ferson typing ampota");
    }

    if (msg.includes("saan ka punta") || (msg.includes("saan") && !msg.includes("moon"))) {
      return reply("To the moon");
    }

    if (msg.includes("to the moon") || (msg.includes("moon") && !msg.includes("room"))) {
      return reply("roadtrip");
    }

    if (msg.includes("roadtrip") || msg.includes("road")) {
      return reply("broom broom");
    }

    if (msg.includes("skr") || msg.includes("skkr")) {
      return reply("zoom zoom");
    }

    if (msg.includes("zoom zoom") || msg.includes("zoom")) {
      return reply("sa fake, no room");
    }

    if (msg.includes("sa fake no room") || msg.includes("sa fake")) {
      await api.sendMessage("mga mata namumula", threadID, null, messageID);
      setTimeout(() => {
        api.sendMessage({ sticker: 1959396170995607 }, threadID);
      }, 500);
    }
  }
};
