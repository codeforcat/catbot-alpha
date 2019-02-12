"use strict";

module.exports = class FriendlyAnswerMassage {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "肩やしっぽのつけ根へのマッサージを喜ぶネコが多いようです。最初は軽く、様子を見ながら気持ちいいツボを探してあげましょう。"
    });
  }
};
