"use strict";

module.exports = class ChiikinekoAnswerNeutering {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    await bot.reply({
      type: "text",
      text: "①新たな子猫は生まれない\n" +
        "②発情期の鳴き声やケンカが減る\n" +
        "③尿スプレーの抑制、尿の臭いの軽減\n" +
        "④生殖器系の病気の予防"
    });
  }
};
