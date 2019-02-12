"use strict";

module.exports = class FriendlyAnswerTouch {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "多くのネコはやさしく撫でてもらうのが大好きです。ネコが喜ぶポイントは、毛づくろいするときに自分の舌が届かないところ。反対に、足やしっぽは嫌がるネコが多いようです。ネコによって好みは千差万別なので、気持ちよさそうにしているかどうか確かめながら撫でてあげて。"
    });
  }
};
