"use strict";

module.exports = class CareAnswerWhencutclaw {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ひなたぼっこやうたた寝の隙きを狙うこと。ネコがぼんやりしている間に手早く片付けてしまいましょう。"
    });
  }
};
