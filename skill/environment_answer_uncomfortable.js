"use strict";

module.exports = class EnvironmentAnswerUncomfortable {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "何度も寝返りしたり、しっぽをずっとパタンパタンしたり、移動を繰り返したりは、居心地の悪いサインだよ。"
    });
  }
};
