"use strict";

module.exports = class ChiikinekoAnswerHowmany {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "生後半年過ぎれば１年に２〜３回、１年に４〜５匹生みます。 "
    });
  }
};
