"use strict";

module.exports = class EnvironmentAnswerWherebed {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "人が動き回る動線は避けたほうがいいですが、人の気配が感じられる場所と一人で静かにいられる場所の両方が必要だよ。季節や一日の時間帯によっても変わるよ。"
    });
  }
};
