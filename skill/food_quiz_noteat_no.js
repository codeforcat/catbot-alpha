'use strict';

module.exports = class FoodQuizNoEatNo {
  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "ブッブー！不正解です。\n玉ねぎ、ネギ、にんにく、チョコレート、イカなど、人間の食べ物は塩気が多いのでだめです。あと、生ものも避けようね。"
    });
  }
};
