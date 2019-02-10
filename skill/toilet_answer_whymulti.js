"use strict";

module.exports = class ToiletAnswerWhymulti {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "あなたの留守中や夜間などお掃除できないことがありますよね。そんなときでも、清潔なトイレを利用できるように、複数設置してあげてください。"
    });
  }
};
