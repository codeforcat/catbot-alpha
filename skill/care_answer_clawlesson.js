"use strict";

module.exports = class CareAnswerClawlesson {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "子ネコのうちにレッスンするのがいいですね。前脚をやさしく持って、爪とぎでとぐ仕草を真似させます。さりげなく何度も教えるうちに、自分のニオイのついた爪とぎを使うようになりますよ。"
    });
  }
};
