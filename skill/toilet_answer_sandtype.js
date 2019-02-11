"use strict";

module.exports = class ToiletAnswerSandtype {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "素材で分けると、鉱物系の他に、木材系、おから系、紙系があります。機能では、そのままトイレに流せるもの、尿がかかると色がかわるもの、消臭成分が含まれているものなどがあります。"
    });
  }
};
