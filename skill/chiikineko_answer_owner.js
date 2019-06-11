"use strict";

module.exports = class ChiikinekoAnswerOwner {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "①室内飼育をする\n" +
        "②首輪で飼い主を明示する\n" +
        "③不妊去勢手術して増やさない"
    });
  }
};
