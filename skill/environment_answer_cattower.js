"use strict";

module.exports = class ToiletAnswerPoo {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "キャットタワーは、窓際に置いてあげると、高いところから外が見られて、ご機嫌だよ。"
    });
  }
};
