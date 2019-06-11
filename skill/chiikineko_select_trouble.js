'use strict';

module.exports = class ChiikinekoSelectTrouble {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "どんなトラブルがある？困ったとい言うだけでは何も解決しませんよ。"
    });
    await bot.queue({
      type: "text",
      text: "①置きエサ（カラス・虫）\n" +
        "②フン尿（臭い）\n" +
        "③交通事故にあう\n" +
        "④感染症にかかる\n" +
        "⑤ノミ・ダニ\n" +
        "⑥ケンカ、発情などの鳴き声\n" +
        "⑦クルマなどへのイタズラ\n" +
        "⑧ゴミあさり、庭畑あらし"
    });
  }

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      another_q: {
        message_to_confirm: {
          type: "template",
          altText: "トラブルを減らすためにできること",
          template: {
            type: "buttons",
            text: "トラブルを減らすためにできること",
            actions: [
              {
                type: "postback",
                label: "猫の世話をしている人",
                displayText: "猫の世話をしている人",
                data: "chiikineko_answer_caretaker"
              },
              {
                type: "postback",
                label: "飼い猫の飼い主",
                displayText: "飼い猫の飼い主",
                data: "chiikineko_answer_owner"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["chiikineko_answer_caretaker", "chiikineko_answer_owner"].includes(value.data)){
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
