"use strict";

module.exports = class AruaruAnswerSpreadeyes {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "それは、緊張しているときかもしれませんね。ネコ同士のケンカでも、どちらかが目をそらすまで瞬きはしません。"
    });
  }
};
