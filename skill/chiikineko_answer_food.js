"use strict";

module.exports = class ChiikinekoAnswerFood {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "置きエサをしない、させない環境づくりが大切です。"
    });
  }
};
