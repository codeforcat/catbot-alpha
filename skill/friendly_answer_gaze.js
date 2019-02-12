"use strict";

module.exports = class FriendlyAnswerGaze {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコの世界では相手の目を見つめるのは宣戦布告を意味します。まさに、ガンをつける状態。目が合ったときには、ゆっくり瞬きすれば、愛のサインになりますよ。"
    });
  }
};
