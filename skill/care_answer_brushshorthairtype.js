"use strict";

module.exports = class CareAnswerBrushshorthairtype {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "短毛種ならラバーブラシを気に入る子が多いようですが、ブラッシングを嫌がるようなら道具を変えてみましょう。"
    });
  }
};
