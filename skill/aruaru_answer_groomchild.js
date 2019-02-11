"use strict";

module.exports = class AruaruAnswerGroomchild {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "子ネコは自分で毛づくろいができないので、母ネコが代わりにやってあげてるんだよ。マッサージ効果もあるから、気持ちよさそうだよね。毛づくろいで落ち着くというのは、その幸せの記憶が作用してるかも知れないね。"
    });
  }
};
