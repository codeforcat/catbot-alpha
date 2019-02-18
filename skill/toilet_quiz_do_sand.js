'use strict';

module.exports = class ToiletQuizDoSand {
  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "そういう行動は、トイレの砂が気に入らないときだよ。"
    });
  }
};
