"use strict";

module.exports = class ToiletAnswerPoo {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ウンチは1日1回が健康の証です。ただし、2〜3日に1回でも、ネコが元気であれば問題ありません。4日以上出なかったら、お医者さんに相談しましょう。"
    });
  }
};
