'use strict';

module.exports = class CareAnswerClawboard {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "材質も、木製、ダンボール、縄など様々なので、いろいろ試してお気に入りを探してあげてください。好みがつかめたら、それに合わせた設置場所や角度、材質の工夫を。古くなった爪とぎは引っかかりが悪くなるので、爪をとぐ醍醐味が減ってしまいます。高価なものでなくてもいいので、こまめに取り換えてあげましょう。"
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
                label: "設置場所は？",
                displayText: "設置場所は？",
                data: "care_answer_whichclawboard"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["care_answer_whichclawboard"].includes(value.data)){
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
