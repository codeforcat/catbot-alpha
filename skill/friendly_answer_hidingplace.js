"use strict";

module.exports = class FriendlyAnswerHidingplace {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "隠れながらもあなたを見つめていたり、脚を出して動かしたり、そんな場合以外は、隠れていたい気分なので、そっとしてあげましょう。"
    });
  }
};
