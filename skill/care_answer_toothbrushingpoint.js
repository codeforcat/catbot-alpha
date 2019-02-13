"use strict";

module.exports = class CareAnswerToothbrushingpoint {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "いきなり歯ブラシで磨くのは難しいので、湿らせたガーゼで拭くようにします。歯磨き用のウエットシートもありますよ。ネコにとってはストレスになるケアなので、少しずつ慣らしたいもの。犬歯と臼歯は特に念入りに。"
    });
  }
};
