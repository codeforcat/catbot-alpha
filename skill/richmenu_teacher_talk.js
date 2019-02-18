"use strict";

module.exports = class RichmenuTeacherTalk {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "何か気になることを自由に入力してみてね。"
    });
  }
};
