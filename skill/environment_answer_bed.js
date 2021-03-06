'use strict';

module.exports = class EnvironmentAnswerBed {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "高価なネコベットを用意しても、ダンボールや毛布のほうがお気に入りということもあるけど、置くところ変えてみるとか、いろいろ試してみて。"
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
                label: "どこに置くといい？",
                displayText: "どこに置くといい？",
                data: "environment_answer_wherebed"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["environment_answer_wherebed"].includes(value.data)){
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
