"use strict";

module.exports = class HousesittingMameSeason {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.queue({
      type: "text",
      text: "豆知識だよ！"
    });

    await bot.reply({
      type: "text",
      text: "完全室内飼いをお願いします。\n" +
      "季節ごとに注意することがあるよ！\n" +
      "①春は、発情の季節でもあるので、脱出に気をつけて。\n" +
      "②夏は、比較的暑さには強いですが、湿気は苦手、冷房のかけすぎにも注意。\n" +
      "③秋は、気温の上下が激しいので、温かい場所と涼しい場所、両方用意。\n" +
      "④冬、寒さはネコの大敵。毛布などに潜れる場所を。暖房の効きすぎによる脱水症にも注意。"
    });
  }
};
