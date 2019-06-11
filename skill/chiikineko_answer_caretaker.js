"use strict";

module.exports = class ChiikinekoAnswerCaretaker {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "①置きエサをしない\n" +
        "②不妊去勢手術をして増やさない\n" +
        "③トイレを設置する"
    });
  }
};
