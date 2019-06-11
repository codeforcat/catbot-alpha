"use strict";

module.exports = class ChiikinekoAnswerHouserule {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "①外に出さない（室内で排泄させる）\n" +
        "②首輪（飼い主の明示・迷子防止）\n" +
        "③不妊去勢手術（増やさない）"
    });
  }
};
