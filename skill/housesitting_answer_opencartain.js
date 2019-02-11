"use strict";

module.exports = class HousesittingAnswerOpencartain {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコは窓辺で景色を眺めるのが好きです。小鳥や虫など、ネコの好奇心をくすぐるものがいっぱい。でも、外に出たいわけではありません。だから、カーテンは開けておいてあげてね。"
    });
  }
};
