"use strict";

module.exports = class RichmenuTeacherSecret {
  constructor() {
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context) {
    const intents = [
      "live_mame_attitude",
      "live_mame_trouble",
      "food_mame_water",
      "toilet_mame_poohigh",
      "environment_mame_sleep",
      "environment_mame_catforwarding",
      "housesitting_mame_room",
      "aruaru_mame_grooming",
      "aruaru_mame_bite",
      "aruaru_mame_play",
      "friendly_mame_neckbell",
      "friendly_mame_meowtype",
      // "friendly_mame_image",
      "friendly_mame_howtohold",
      "friendly_mame_matatabi",
      "care_mame_tooth",
      "care_mame_toothstay",
      "care_mame_catgrass"
    ];
    let random_intent = Math.floor(Math.random() * intents.length);

    await bot.switch_skill({
      name: intents[random_intent]
    });
  }
};
