"use strict";

module.exports = class CareAnswerShampoolong {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "長毛種は毛づくろいが全身に届かないので、月に一度のシャンプーを。人間とネコでは皮膚のpHが違うので、必ずネコ専用のシャンプーを使ってください。"
    });
  }
};
