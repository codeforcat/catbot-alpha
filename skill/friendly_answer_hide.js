"use strict";

module.exports = class FriendlyAnswerHide {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコが物陰でじっとこちらを見つめていたら、見つけてほしいのサインです。あなたもカーテンの裏などに隠れて、小さく名前を呼んだりしてみて。"
    });
  }
};
