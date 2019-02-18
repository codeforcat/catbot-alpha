"use strict";

module.exports = class FoodSelectWater {

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      question: {
        message_to_confirm: {
          type: "template",
          altText: "気になることある？",
          template: {
            type: "buttons",
            text: "水のあげ方は、こんなことがあるよ。何を知りたい？",
            actions: [{
                type: "postback",
                label: "水の種類？",
                displayText: "水の種類？",
                data: "food_answer_water"
              },
              {
                type: "postback",
                label: "置き場所？",
                displayText: "置き場所？",
                data: "food_answer_wherewater"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["food_answer_water", "food_answer_wherewater"].includes(value.data)){
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
    let intent_name = context.confirmed.question.data;
    console.log("*******ToiletWhyMulti*******intent_name ********: "+intent_name);
    await bot.switch_skill({
      name: intent_name
    });
  }
};
