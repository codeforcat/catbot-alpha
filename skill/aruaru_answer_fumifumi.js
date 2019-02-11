"use strict";

module.exports = class AruaruAnswerFumifumi {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ふみふみは、赤ちゃん時代の思い出。\n" +
      "ネコは母乳を飲むとき、より母乳が出やすくなるように前脚で母親のおっぱいをマッサージするようにしながら飲みます。その時の心地よさや安心感を思い出すのか、大人になってからも、毛布や布団などのやわらかくて気持ちのいいものに触れると、ふみふみしたくなるみたいですね"
    });
  }
};
