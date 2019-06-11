"use strict";

module.exports = class ChiikinekoAnswerChiikineko {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "不妊去勢手術後、地域住民によって、適切に管理されている猫"
    });
  }
};
