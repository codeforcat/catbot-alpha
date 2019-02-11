"use strict";

module.exports = class AruaruAnswerKakaka {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコが窓に向かって、「カカカッ」といった鳴き声を出してることを聞いたことがありませんか？これは、獲物に対して、ネコが興奮しているときの反応で、クラッキングと言います。ちなみに、ライオンやトラは、同じネコ科の動物ですが、クラッキングはしません。"
    });
  }
};
