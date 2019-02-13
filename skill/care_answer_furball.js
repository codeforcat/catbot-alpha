"use strict";

module.exports = class CareAnswerFurball {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "吐かせるのではなく、口に入らないようにすべきです。下毛の多いネコは先にコームで取り除いてから、ラバーブラシでちょっと固い毛を抜いてあげるのが基本。"
    });
  }
};
