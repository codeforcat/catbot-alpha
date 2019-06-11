"use strict";

module.exports = class ChiikinekoAnswerEnvironment {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "フンの掃除"
    });
  }
};
