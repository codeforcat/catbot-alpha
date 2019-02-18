'use strict';

module.exports = class FoodQuizPlateNO {
  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "ブッブー！不正解です。\n水を飲むとき、ひげが器にあたることを嫌うネコもいるので、口が広めの器がいいよ。"
    });
  }
};
