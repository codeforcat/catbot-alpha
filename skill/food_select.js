"use strict";

module.exports = class FoodSelect {
  async begin(bot, event, context) {
    await bot.queue({
      type: "text",
      text: "ご飯の、どんなことが気になっているのかい？"
    });
  }

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      foodselect: {
        message_to_confirm: {
          type: "template",
          altText: "何か気になることある？",
          template: {
            type: "carousel",
            columns: [
              {
                title: "何をいつ？",
                text: "どんなご飯を、いつあげたらいいのかわからない",
                actions: [
                  {
                    type: "postback",
                    label: "何をあげればいいの？",
                    data: "food_answer_dry"
                  },
                  {
                    type: "postback",
                    label: "いつあげればいいの?",
                    data: "food_answer_when"
                  },
                  {
                    type: "postback",
                    label: "いつあげれああばいいの?",
                    data: "food_answer_when"
                  }                ]
              },
              {
                title: "こんな物はどうなの？",
                text: "おやつや、お水とかはどうあげたらいいんだろう？",
                actions: [
                  {
                    type: "postback",
                    label: "おやつは？",
                    data: "food_answer_snack"
                  },
                  {
                    type: "postback",
                    label: "鰹節は？",
                    data: "food_answer_katsuo"
                  },
                  {
                    type: "postback",
                    label: "水のあげかたは？",
                    data: "food_answer_water"
                  }
                ]
              }
            ]
          }
        }
      }
    }
  }

  async finish(bot, event, context) {
    let intent_name = context.confirmed.opening.data;
    await bot.switch_skill({
      name: intent_name
    })
  }
};
