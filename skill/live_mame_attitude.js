"use strict";

module.exports = class LiveMameAttitude {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.queue({
      type: "text",
      text: "豆知識だよ！"
    });

    await bot.reply({
      type: "text",
      text: "ネコと暮らす心構え七か条\n" +
      "1.人がネコに合わせる\n" +
      "2.愛される飼い主になろう\n" +
      "3.無理にしつけない\n" +
      "4.リアクションを期待しない\n" +
      "5.健康と安全に気を遣う\n" +
      "6.幸せにしようという気持ち\n" +
      "7.されて困ることはされない工夫を"
    });
  }
};
