"use strict";

module.exports = class FriendlyAnswerTv {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "テレビの見えるネコと見えないネコがいるみたいです。見えていてもただの画像だと分かって興味がないだけかも知れませんが。"
    });
  }
};
