"use strict";

module.exports = class FriendlyAnswerNohold {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "基本的にネコは抱っこが苦手だと認識しましょう。爪切りなどで抱っこの必要がある場合には、ネコ思いな抱っこをしましょう。"
    });
  }
};
