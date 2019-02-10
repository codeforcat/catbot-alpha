"use strict";

module.exports = class AruaruMamePlay {
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
      text: "ネコの「遊んで視線」に気づけないで、ほったらかしだと、読んでる新聞や雑誌の上に乗ってくる、パソコンのキーボードの上に座るなど、実力行使を受けることになるので、普段からよくコミュニケーションしておきましょうね。そうした行動を「ニャンサムウエア」と呼びます。"
    });
  }
};
