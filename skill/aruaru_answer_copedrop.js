"use strict";

module.exports = class AruaruAnswerCopedrop {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "寝る前に、しっかり遊ばせることで、飼い主もネコもぐっすり眠れるでしょう。"
    });
  }
};
