"use strict";

module.exports = class FoodSelectDonot {

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      question: {
        message_to_confirm: {
          type: "template",
          altText: "気になることある？",
          template: {
            type: "buttons",
            text: "あげちゃいけないものには、こんなことがあるよ。何を知りたい？",
            actions: [{
                type: "postback",
                label: "鰹節は？",
                displayText: "鰹節は？",
                data: "food_answer_katsuo"
              },
              {
                type: "postback",
                label: "牛乳は？",
                displayText: "牛乳は？",
                data: "food_answer_milk"
              },
              {
                type: "postback",
                label: "他にあげちゃいけないものは？",
                displayText: "他にあげちゃいけないものは？",
                data: "food_answer_donteat"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["food_answer_katsuo", "food_answer_milk", "food_answer_donteat"].includes(value.data)){
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
