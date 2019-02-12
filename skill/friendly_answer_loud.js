"use strict";

module.exports = class FriendlyAnswerLoud {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコは大きな声や音が嫌いです。歌を歌うと怒るネコ、くしゃみや咳を嫌がるネコもいます。"
    });
  }
};
