"use strict";

module.exports = class ChiikinekoAnswerOutside {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "外飼いの猫、出入り自由の猫"
    });
  }
};
