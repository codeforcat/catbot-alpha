'use strict';

module.exports = class CareAnswerBrushing {
  async begin(bot, event, context){
    await bot.queue({
      type: "text",
      text: "定期的なブラッシングは、お手入れの基本です。抜け毛や汚れを取り除き、病気の原因となる毛玉を防ぐだけでなく、マッサージ効果で血流がよくなり、健康増進にも役立ちます。スキンシップの意味もありますよ。"
    });

    await bot.queue({
      type: "text",
      text: "長毛種は、毎日、短毛種でも週に一度はブラッシングタイムをつくりましょう。母ネコが舌で子ネコの毛づくろいをするように、毛並みに沿って丁寧に。カラダに触れることで、皮膚病などの早期発見にもつながります。"
    });
  }

  constructor() {
    this.clear_context_on_finish = true;
    this.required_parameter = {
      another_q: {
        message_to_confirm: {
          type: "template",
          altText: "毛の種類によって道具が変わってくるよ",
          template: {
            type: "buttons",
            text: "毛の種類によって道具が変わってくるよ",
            actions: [
              {
                type: "postback",
                label: "長毛種は？",
                displayText: "長毛種は？",
                data: "care_answer_brushlonghairtype"
              },
              {
                type: "postback",
                label: "短毛種は？",
                displayText: "短毛種は？",
                data: "care_answer_brushshorthairtype"
              }
            ]
          }
        },
        parser: async (value, bot, event, context) => {
          if (["care_answer_brushlonghairtype", "care_answer_brushshorthairtype"].includes(value.data)){
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
