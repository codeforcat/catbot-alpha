"use strict";

module.exports = class FriendlyAnswerGoods {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "お気に入りのおもちゃで遊んだり、丸めたレジ袋やリボンでじゃらしたり、形にはこだわらず、ネコの好奇心を刺激してあげましょう。"
    });
  }
};
