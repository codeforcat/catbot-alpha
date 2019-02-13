"use strict";

module.exports = class CareAnswerHowtomassage {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコマッサージに決まった手順はありません。気持ちのいいツボも力加減もネコそれぞれ。うっとり目を閉じていたら、うまくできている証拠です。そのうち、自分からおねだりするようになりますよ。"
    });
  }
};
