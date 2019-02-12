"use strict";

module.exports = class FriendlyAnswerMove {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "突然大きな動作をされるとびっくりしてそれがストレスになります。常に落ち着いた態度で接したいものです。"
    });
  }
};
