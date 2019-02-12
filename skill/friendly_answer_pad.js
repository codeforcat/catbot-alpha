"use strict";

module.exports = class FriendlyAnswerPad {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "ネコのカラダで唯一、汗腺があるのが肉球です。汗をかくことで体温を調節するほか、衝撃を吸収する、足音を消す、滑り止めなど、大切な役割を担っています。それだけに、とてもデリケートなので、様子を見ながらタッチしてください。"
    });
  }
};
