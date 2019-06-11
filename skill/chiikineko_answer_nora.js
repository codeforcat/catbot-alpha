"use strict";

module.exports = class ChiikinekoAnswerNora {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "飼い主のいない猫"
    });
  }
};
