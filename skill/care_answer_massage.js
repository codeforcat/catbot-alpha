'use strict';

module.exports = class CareAnswerMassage {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "撫でられたり、ブラッシングされたりするのが好きなネコは、マッサージも大好き。肩こりなど無縁と思えるネコですが、よく動かす首回りや背中などは案外凝ってるようなので、やさしく揉みほぐしてあげましょう。"
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
                label: "マッサージの手順は？",
                displayText: "マッサージの手順は？",
                data: "care_answer_howtomassage"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["care_answer_howtomassage"].includes(value.data)){
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
