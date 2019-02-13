"use strict";

module.exports = class CareAnswerCutclawcaution {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "深爪注意。爪を光に透かすと赤い筋がはっきり見えます。それが血管なので、傷つけると、出血します。そこまでは神経が通っているので、痛みも感じます。ギリギリではなく、余裕をもって、それより先の部分を切りましょう。"
    });
  }
};
