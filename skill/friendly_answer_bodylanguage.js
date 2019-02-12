"use strict";

module.exports = class FriendlyAnswerBodylanguage {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "よく動く大きな瞳はネコならではのチャームポイントです。ネコの瞳は豊かな表情を見せてくれます。ネコの耳は普通前向きですが、不安や恐怖なので感情が揺れるほど横から後ろに倒れていきます。ヒゲは方向感覚を保つ、空気の流れを察知するなど重大な役割があります。"
    });
  }
};
