"use strict";

module.exports = class FriendlyAnswerChase {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコが目の前で急にダッシュしたら、追いかけっこのお誘いです。すばやく追いかける→振り払って逃げる。この組み合わせがときめきのリズムです。"
    });
  }
};
