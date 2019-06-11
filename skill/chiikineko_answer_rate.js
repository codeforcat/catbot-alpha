"use strict";

module.exports = class ChiikinekoAnswerRate {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "猫は後尾排卵なので、妊娠率100％。"
    });
  }
};
