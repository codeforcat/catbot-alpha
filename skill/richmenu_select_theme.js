"use strict";

module.exports = class RichmenuSelectTheme {
  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      theme: {
        message_to_confirm: {
          type: "template",
          altText: "何か気になることある？",
          template: {
            type: "carousel",
            columns: [
              {
                thumbnailImageUrl: "https://code4cat.org/catbot/theme_food_thumbnail.jpg",
                title: "ご飯どうする",
                text: "食べさせちゃいけないものもあるよ",
                actions: [
                  {
                    type: "postback",
                    label: "どうしよう？",
                    data: "food_select"
                  }
                ]
              },
              {
                thumbnailImageUrl: "https://code4cat.org/catbot/theme_toilet_thumbnail.jpg",
                title: "トイレの用意",
                text: "考えないといけないことがたくさん！",
                actions: [
                  {
                    type: "postback",
                    label: "これが気になる",
                    data: "toilet_select"
                  }
                ]
              },
              {
                thumbnailImageUrl: "https://code4cat.org/catbot/theme_environment_thumbnail.jpg",
                title: "環境づくり",
                text: "快適な場所を作ってほしいな",
                actions: [
                  {
                    type: "postback",
                    label: "好きな場所",
                    data: "environment_select"
                  }
                ]
              },
              {
                thumbnailImageUrl: "https://code4cat.org/catbot/theme_housesitting_thumbnail.jpg",
                title: "お留守番",
                text: "いろんな注意点があるよ",
                actions: [
                  {
                    type: "postback",
                    label: "できるかな？",
                    data: "housesitting_select"
                  }
                ]
              },
              {
                thumbnailImageUrl: "https://code4cat.org/catbot/theme_aruaru_thumbnail.jpg",
                title: "ネコあるある",
                text: "気になるしぐさや習慣があるよね",
                actions: [
                  {
                    type: "postback",
                    label: "なんだろう？",
                    data: "aruaru_select"
                  }
                ]
              },
              {
                thumbnailImageUrl: "https://code4cat.org/catbot/theme_friendly_thumbnail.jpg",
                title: "仲良くなりたい",
                text: "気持ちをわかってほしい！",
                actions: [
                  {
                    type: "postback",
                    label: "なれるかな？",
                    data: "friendly_select"
                  }
                ]
              },
              {
                thumbnailImageUrl: "https://code4cat.org/catbot/theme_care_thumbnail.jpg",
                title: "大切にしたい",
                text: "身体のケアを忘れないでね",
                actions: [
                  {
                    type: "postback",
                    label: "できるかな？",
                    data: "care_select"
                  }
                ]
              },
              {
                thumbnailImageUrl: "https://code4cat.org/catbot/theme_chiikineko_thumbnail.jpg",
                title: "地域猫のこと",
                text: "地域猫って知ってる？",
                actions: [
                  {
                    type: "postback",
                    label: "知りたい！",
                    data: "chiikineko_select"
                  }
                ]
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["food_select", "toilet_select", "environment_select", "housesitting_select", "aruaru_select", "friendly_select", "care_select", "chiikineko_select"].includes(value.data)){
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
    let intent_name = context.confirmed.theme.data;
    await bot.switch_skill({
      name: intent_name
    });
  }
};
