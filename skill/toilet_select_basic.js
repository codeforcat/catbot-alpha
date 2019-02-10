"use strict";

module.exports = class ToiletSelectBasic {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      toiletbasic: {
        message_to_confirm: {
          type: "template",
          altText: "トイレの基本は、こんなことがあるよ。何を知りたい？",
          template: {
            type: "buttons",
            text: "トイレの基本は、こんなことがあるよ。何を知りたい？",
            actions: [
              {
                type: "postback",
                label: "何を用意すればいい？",
                displayText: "何を用意すればいい？",
                data: "toilet_answer_multi"
              },
              {
                type: "postback",
                label: "いろんな種類があるけど？",
                displayText: "いろんな種類があるけど？",
                data: "toilet_answer_size"
              },
              {
                type: "postback",
                label: "どこに置いたらいい？",
                displayText: "どこに置いたらいい？",
                data: "toilet_answer_where"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["toilet_answer_multi", "toilet_answer_size", "toilet_answer_where"].includes(value.data)){
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
    let intent_name = context.confirmed.toiletbasic.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};
