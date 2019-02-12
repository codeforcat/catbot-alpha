"use strict";

module.exports = class FriendlyAnswerFedupplay {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコは基本的に飽きっぽいので、一度に遊ぶ時間は短くてオッケー。その代り、遊ぶ回数を増やしてあげましょう。"
    });
  }
};
