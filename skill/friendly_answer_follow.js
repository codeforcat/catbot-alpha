"use strict";

module.exports = class FriendlyAnswerFollow {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコの行くところについて回るのは、鬱陶しがられるもとです。ネコの方から「来て」と誘われた場合以外は、ネコの移動には見て見ぬふりをしましょう。"
    });
  }
};
