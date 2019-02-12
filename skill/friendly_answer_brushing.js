"use strict";

module.exports = class FriendlyAnswerBrushing {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ブラシの横でゴロンとして「ブラッシングして」というネコもいるくらい。嫌がるようなら道具を変えて試してみて。"
    });
  }
};
