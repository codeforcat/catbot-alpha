"use strict";

module.exports = class RichmenuTeacherQuiz {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    const intents = [
      "food_quiz_noteat",
      "food_quiz_plate",
      "toilet_quiz_do",
      "enviroment_quiz_like",
      "enviroment_quiz_notroom",
      "aruaru_quiz_sign"
    ];
    let random_intent = Math.floor(Math.random() * intents.length);

    await bot.switch_skill({
      name: intents[random_intent]
    });
  }
};
