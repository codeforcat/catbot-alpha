"use strict";

module.exports = class HousesittingAnswerOuthomecaution {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "安全・快適・清潔の３つが環境づくりのポイント。ドライフードと水を多め入れて、何か所かに、トイレを複数置きましょう。"
    });
  }
};
