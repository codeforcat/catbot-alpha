'use strict';

module.exports = class FoodQuizNoEatOK {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "ピンポン！正解です。\n玉ねぎ、ネギ、にんにく、チョコレート、イカなど、人間の食べ物は塩気が多いのでだめです。あと、生ものも避けようね。"
    });
  }
  async finish(bot, event, context) {
    console.log(context.confirmed);
    await bot.reply({
      type: "text",
      text: "また来てね！"
    });
  }
};
