"use strict";

module.exports = class FriendlyMameMatatabi {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.queue({
      type: "text",
      text: "豆知識だよ！"
    });

    await bot.reply({
      type: "text",
      text: "またたび。\n" +
      "興味を示さないネコも半数います。マタタビでネコが特殊な行動を起こしてしまう原因はネペタラクトンという物質にあり、哺乳類でネコだけが反応する理由はわかっていません。"
    });
  }
};
