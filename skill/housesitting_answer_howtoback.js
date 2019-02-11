"use strict";

module.exports = class HousesittingAnswerHowtoback {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコ自身もパニックになって、近くで、隠れていることがありますから、慌てずに、まず、近所を、大声を出さず、いつも呼んでるように、名前を呼びながら探しましょう。いつも遊んでいるおもちゃや寝ている毛布なども持っていきましょう。いつも使ってるキャリーケースがあれば、それも。"
    });
  }
};
