'use strict';

module.exports = class FoodQuizPlateOK {
  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "ピンポン！正解です。\n水を飲むとき、ひげが器にあたることを嫌うネコもいるので、口が広めの器がいいよ。"
    });
  }
};
