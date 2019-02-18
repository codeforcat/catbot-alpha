"use strict";

module.exports = class Welcome {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.queue({
      type: "text",
      text: "やあ！こんにちは！"
    });

    await bot.queue({
      type: "text",
      text: "気になることがあったら話しかけてね！"
    });

    await bot.reply({
      type: "text",
      text: "困ったら、画面下の「先生に聞いてみよう」を押してね。"
    });
  }
};
