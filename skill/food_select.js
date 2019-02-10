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
      opening: {
        message_to_confirm: {
          type: "template",
          altText: "何か気になることある？",
          template: {
            type: "carousel",
            columns: [
              {
                thumbnailImageUrl: "https://code4cat.org/catbot/catbot-02_thumbnail.jpg",
                imageBackgroundColor: "#FFFFFF",
                title: "何をあげればいいの？",
                text: "",
                actions: [
                  {
                    type: "postback",
                    label: "どうしよう？",
                    data: "food_answer_dry"
                  }
                ]
              },
              {
                thumbnailImageUrl: "https://code4cat.org/catbot/catbot-02_thumbnail.jpg",
                imageBackgroundColor: "#FFFFFF",
                title: "いつあげればいいの",
                text: " ",
                actions: [
                  {
                    type: "postback",
                    label: "これが気になる",
                    data: "food_answer_when"
                  }
                ]
              },
              {
                thumbnailImageUrl: "https://code4cat.org/catbot/catbot-02_thumbnail.jpg",
                imageBackgroundColor: "#FFFFFF",
                title: "おやつは？",
                text: "",
                actions: [
                  {
                    type: "postback",
                    label: "好きな場所",
                    data: "food_answer_snack"
                  }
                ]
              },
              {
                thumbnailImageUrl: "https://code4cat.org/catbot/catbot-02_thumbnail.jpg",
                imageBackgroundColor: "#FFFFFF",
                title: "鰹節は？",
                text: "",
                actions: [
                  {
                    type: "postback",
                    label: "できるかな？",
                    data: "food_answer_katsuo"
                  }
                ]
              },
              {
                thumbnailImageUrl: "https://code4cat.org/catbot/catbot-02_thumbnail.jpg",
                imageBackgroundColor: "#FFFFFF",
                title: "水のあげかたは？",
                text: "",
                actions: [
                  {
                    type: "postback",
                    label: "なんだろう？",
                    data: "food_answer_where"
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
