"use strict";

module.exports = class CareAnswerBrushlonghairtype {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "長毛種ならコームやとかす部分が長めのスリッカーがおすすめ。"
    });
  }
};
