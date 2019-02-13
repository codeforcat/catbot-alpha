"use strict";

module.exports = class CareAnswerWhichclawboard {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコが爪をとぎたがるところ、落ち着いてリラックスできる場所、布や籐製の家具の近く、食事場の近く。"
    });
  }
};
