"use strict";

module.exports = class HousesittingAnswerWalk {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "散歩はさせないほうがいいです。移動しながら探しものをするのはイヌの習性、ネコは待ち伏せ型なので、毎日同じ場所に構えて待っているのが本来の習性です。"
    });
  }
};
