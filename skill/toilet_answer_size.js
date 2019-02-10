"use strict";

module.exports = class ToiletAnswerSize {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "猫がのびのびできるよう、屋根がないタイプで、大きさは、カラダの向きをかえられるくらい、猫の1.5倍くらいが目安。"
    });
  }
};
