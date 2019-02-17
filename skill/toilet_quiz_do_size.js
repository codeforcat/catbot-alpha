'use strict';

module.exports = class ToiletQuizDoSize {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "そういう行動は、トイレの形や大きさが気に入らないときだよ。"
    });
  }
  async finish(bot, event, context) {
  }
};
