"use strict";

module.exports = class FriendlyAnswerTv {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "猫は鏡に映った何かを認識することはできます。鏡の中に映った何かに反応して威嚇してみたり、話かけてみたり、一緒に遊ぶような素振りを見せたりします。しかし、鏡の中に映るのが自分だと猫は理解することができません。"
    });
  }
};
