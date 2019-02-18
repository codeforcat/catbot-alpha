"use strict";

module.exports = class AruaruMameBite {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.queue({
      type: "text",
      text: "豆知識だよ！"
    });

    await bot.reply({
      type: "text",
      text: "多頭飼いの場合は、生後１ヶ月半頃から兄弟でのじゃれあいが激しくなり、噛む力加減を覚えます。強く噛みすぎると他の兄弟に怒られるのです。"
    });
  }
};
