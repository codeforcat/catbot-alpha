"use strict";

module.exports = class FriendlyAnswerWalkstylecaution {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "①かかとをつけて歩いていたら、病気のサイン。\n" +
      "②顔としっぽを下げてとぼとぼ歩いていたら、ストレスがたまっている証拠。"
    });
  }
};
