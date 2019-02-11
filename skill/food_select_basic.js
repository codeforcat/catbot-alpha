"use strict";

module.exports = class FoodSelectBasic {

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      question: {
        message_to_confirm: {
          type: "template",
          altText: "気になることある？",
          template: {
            type: "buttons",
            text: "ご飯の基本は、こんなことがあるよ。何を知りたい？",
            actions: [{
                type: "postback",
                label: "何をあげればいいの？",
                displayText: "何をあげればいいの？",
                data: "food_answer_dry"
              },
              {
                type: "postback",
                label: "いつあげればいいの",
                displayText: "いつあげればいいの",
                data: "food_answer_when"
              },
              {
                type: "postback",
                label: "おやつは？",
                displayText: "おやつは？",
                data: "food_answer_snack"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["food_answer_dry", "food_answer_when", "food_answer_snack"].includes(value.data)){
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
