"use strict";

module.exports = class ToiletAnswerWhere {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "人の出入りが少ない、猫が落ち着ける場所がいいですね。でも、いつもいるところからあんまり離れたとこだと、我慢しちゃうかも。"
    });
  }
};
