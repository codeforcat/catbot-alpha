'use strict';

module.exports = class ToiletQuizDoSize {
  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "そういう行動は、トイレの形や大きさが気に入らないときだよ。"
    });
  }
};
