'use strict';

module.exports = class ToiletQuizDoSand {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "そういう行動は、トイレの砂が気に入らないときだよ。"
    });
  }
  async finish(bot, event, context) {
  }
};
