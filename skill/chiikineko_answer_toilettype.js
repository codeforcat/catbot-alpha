"use strict";

module.exports = class ChiikinekoAnswerToilettype {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "大きめで、屋根のないもの、猫砂は鉱物系がオススメです。"
    });
  }
};
