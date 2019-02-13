"use strict";

module.exports = class CareAnswerNotclaw {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "関節痛かもしれないので、注意してあげて。"
    });
  }
};
