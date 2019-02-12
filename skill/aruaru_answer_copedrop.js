"use strict";

module.exports = class AruaruAnswerCopedrop {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコがモノを落とすことを防ぐのは無理なので、落とされたら困るものを置かないようにする、これしかありません。"
    });
  }
};
