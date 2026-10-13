module.exports = {
  config: {
    name: "goibot",
    version: "1.0.2",
    author: "Kaizer",
    countDown: 0,
    role: 0,
    description: { en: "Auto-reply when someone messages the bot" },
    category: "events",
  },

  onStart: async function () {},

  onChat: async function ({ api, event, Users }) {
    const { threadID, messageID } = event;

    const tl = [
      "hi, I'm Edward's bot", "What do you call me??", "i love you siegfried",
      "Love you >3", "Hi, hello baby wife:3", "What's wrong with the wife calling??",
      "Use callad to communicate with admin!", "You are the cutest bot on the planet",
      "What are you saying pig", "It's me~~~~", "Love you BLACK the most",
      "he's ADMIN's bae", "Love admin the most", "He is admin's backend",
      "What's up princess?", "Don't make me sad ~~~", "Play word reading with me ah ah ah",
      "Recruiting pilots", "Being a superhero? very happy", "Are you lonely??",
      "Set rela is not too rushed!!!", "It's okay :)))", "I do like my master",
      "Don't praise me for being too shy", "Will you be my wife??",
      "Don't spam me :<<, I'm so tired", "bla bla", "Don't push him hard!!!",
      "Just hit tutu, it hurts :'(", "Loving you is like a torture\nclick up and down let's play together",
      "Spam cc fuck", "Do you love me?", "Your wife is here",
      "Admin likes Gura, how about you?", "I like you too <3", "how are you?",
      "have you already take a breakfast?", "It's nice to see you",
      "don't be sad, I'm still here", "ughh, noo not there. plss",
      "never gonna give you up", "pls pm me", "The admin are busy"
    ];

    const rand = tl[Math.floor(Math.random() * tl.length)];
    const body = (event.body || "").toLowerCase();

    if (event.body && (event.body.indexOf("bot") === 0 || event.body.indexOf("Bot") === 0)) {
      try {
        if (event.senderID == api.getCurrentUserID()) return;
        const firstname = (global.data && global.data.userName && global.data.userName.get(event.senderID))
          || await Users.getNameUser(event.senderID)
          || "friend";

        return api.sendMessage({
          body: `${firstname}, ${rand}`,
          mentions: [{ tag: firstname, id: event.senderID }]
        }, threadID, messageID);
      } catch (err) {
        console.error("[goibot] Error:", err.message);
      }
    }

    if (body.includes("haha") || body.includes("lmao") || body.includes("lol") ||
        body.includes("😂") || body.includes("😹") || body.includes("🤣") ||
        body.includes("😆") || body.includes("😄") || body.includes("😅") ||
        body.includes("xd")) {
      return api.setMessageReaction("😹", event.messageID, (err) => {}, true);
    }

    if (body.includes("kawawa") || body.includes("sad") || body.includes("agoi") ||
        body.includes("sakit") || body.includes("skit") || body.includes("pain") ||
        body.includes("pighati")) {
      return api.setMessageReaction("😿", event.messageID, (err) => {}, true);
    }
  }
};
