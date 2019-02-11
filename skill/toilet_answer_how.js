"use strict";

module.exports = class ToiletAnswerHow {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.queue({
      type: "text",
      text: "子ネコの場合、トイレしそうな時に、猫砂に連れて行って、おしりをポンポン。"
    });

    await bot.reply({
      type: "text",
      text: "大人のネコの場合、トイレをいつもきれいにして、人目につかないところに置いてみよう。ダンボールで囲ってみるのも効果あり。"
    });
  }
};
