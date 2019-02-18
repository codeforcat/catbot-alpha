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
      "①人がネコに合わせる\n" +
      "②愛される飼い主になろう\n" +
      "③無理にしつけない\n" +
      "④リアクションを期待しない\n" +
      "⑤健康と安全に気を遣う\n" +
      "⑥幸せにしようという気持ち\n" +
      "⑦されて困ることはされない工夫を"
    });
  }
};
