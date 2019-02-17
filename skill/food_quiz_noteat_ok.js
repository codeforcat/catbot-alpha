'use strict';

module.exports = class FoodQuizNoEatOK {
  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "ピンポン！正解です。\n玉ねぎ、ネギ、にんにく、チョコレート、イカなど、人間の食べ物は塩気が多いのでだめです。あと、生ものも避けようね。"
    });
  }
};
