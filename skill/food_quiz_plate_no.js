'use strict';

module.exports = class FoodQuizPlateNO {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "ブッブー！不正解です。\n水を飲むとき、ひげが器にあたることを嫌うネコもいるので、口が広めの器がいいよ。"
    });
  }

    async finish(bot, event, context) {
    }
  };
