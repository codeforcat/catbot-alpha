"use strict";

module.exports = class ToiletAnswerCleaner {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコはニオイに敏感なので、香りのキツイ洗剤を使うのはやめましょう。とくに、ネコが嫌う柑橘系は絶対ダメ。無臭が基本です。"
    });
  }
};
