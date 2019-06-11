"use strict";

module.exports = class ChiikinekoAnswerPeriod {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "妊娠期間は２ヶ月。"
    });
  }
};
