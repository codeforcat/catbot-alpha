"use strict";

module.exports = class AruaruAnswerKickmood {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "そうですね。遊びたいときや不機嫌なときにもネコキックすることがありますので、要注意です。あまりにも痛いときには、付き合わず、そっと離れましょう。"
    });
  }
};
