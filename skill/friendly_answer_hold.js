"use strict";

module.exports = class FriendlyAnswerHold {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "抱っこや撫でが好きなネコでも気分じゃないときは嫌なもの。触られるのが嫌いなネコならなおさらです。特にしっぽや肉球は嫌がるポイントです。"
    });
  }
};
