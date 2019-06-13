"use strict";

module.exports = class ChiikinekoMameTnr {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    await bot.reply({
      type: "text",
      text: "TNRって知ってますか？\n" +
        "\n" +
        "T＝Trap（つかまえて）\n" +
        "N＝Neuter（不妊去勢手術して）\n" +
        "R＝Return（元の場所に返す）\n" +
        "\n" +
        "手術をしても、エサ場の管理やトイレの始末をしないとトラブルの元になります。"
    });

    await bot.switch_skill({
      name: "chiikineko_more_confirm"
    });
  }
};
