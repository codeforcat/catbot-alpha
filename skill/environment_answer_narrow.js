"use strict";

module.exports = class EnvironmentAnswerNarrow {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "イエネコの祖先だと言われているリビアヤマネコは、狭くて暗いところを寝床にしていたからだよ。ソファの下が好きなのはそういうことだよ。"
    });
  }
};
