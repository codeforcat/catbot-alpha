'use strict';

module.exports = class EnvironmentAnswerHigh {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "野生の名残らしいよ。野生のネコは地上の敵から襲われにくく、獲物を狙いやすい木の上で暮らしてたからだよ。お家では、タンスやテーブルの上が指定席なのはそういうこと。キャットタワー置いてあげるといいよ。"
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
                label: "キャットタワーの設置",
                displayText: "キャットタワー、どこに置いたらいい？",
                data: "environment_answer_cattower"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["environment_answer_cattower"].includes(value.data)){
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
