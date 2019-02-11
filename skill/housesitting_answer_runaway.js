'use strict';

module.exports = class HousesittingAnswerRunaway {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "玄関、窓、ベランダに注意しましょう。\n" +
      "玄関をあけるときは、手前のドアは必ず閉めておきましょう。\n" +
      "窓は、開けっ放しにしない。網戸、ストッパーなどをつけましょう。\n" +
      "ベランダに出す場合には、網、柵などで、逃亡防止しましょう。"
    });
  }

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      another_q: {
        message_to_confirm: {
          type: "template",
          altText: "他にも気になることある？",
          template: {
            type: "buttons",
            text: "他にも気になることある？",
            actions: [
              {
                type: "postback",
                label: "逃げちゃったら？",
                displayText: "逃げちゃったら？",
                data: "housesitting_answer_howtoback"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["housesitting_answer_howtoback"].includes(value.data)){
            return value;
          }
          throw new Error();
        },
        reaction: async (error, value, bot, event, context) => {
          if (error){
            await bot.reply({
              type: "text",
              text: "にゃ？\nもう一度言ってほしいにゃ。"
            });
            await bot.init();
          }
        }
      }
    }
  }

  async finish(bot, event, context) {
    let intent_name = context.confirmed.another_q.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};
