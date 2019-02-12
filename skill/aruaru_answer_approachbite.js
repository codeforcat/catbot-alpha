"use strict";

module.exports = class AruaruAnswerApproachbite {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコが人を噛んだ場合には、無反応・無視を徹底しましょう。ネコに「噛むと遊んでもらえない」ということを学習させることで、噛みクセがつくのを防ぎましょう。"
    });
  }
};
