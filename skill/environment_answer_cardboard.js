"use strict";

module.exports = class EnvironmentAnswerCardboard {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "狭いところがネコの基本。ネコの目は平面で、左右や後部の視界はないので、壁が1面より2面、3面ある場所が落ち着く。"
    });
  }
};
