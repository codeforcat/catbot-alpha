"use strict";

module.exports = class FriendlyMameImage {
  constructor(){
    this.clear_context_on_finish = true;
  }

  async finish(bot, event, context){
    const images = [
      {
        original: "https://code4cat.org/catbot/catbot-05_original.jpg",
        preview: "https://code4cat.org/catbot/catbot-05_preview.jpg",
        message: "観察している"
      },
      {
        original: "https://code4cat.org/catbot/catbot-05_original.jpg",
        preview: "https://code4cat.org/catbot/catbot-05_preview.jpg",
        message: "友好の気持ち"
      },
      {
        original: "https://code4cat.org/catbot/catbot-05_original.jpg",
        preview: "https://code4cat.org/catbot/catbot-05_preview.jpg",
        message: "喜んでいる"
      },
      {
        original: "https://code4cat.org/catbot/catbot-05_original.jpg",
        preview: "https://code4cat.org/catbot/catbot-05_preview.jpg",
        message: "挑発している"
      },
      {
        original: "https://code4cat.org/catbot/catbot-05_original.jpg",
        preview: "https://code4cat.org/catbot/catbot-05_preview.jpg",
        message: "防御している"
      },
      {
        original: "https://code4cat.org/catbot/catbot-05_original.jpg",
        preview: "https://code4cat.org/catbot/catbot-05_preview.jpg",
        message: "臨戦態勢"
      },
      {
        original: "https://code4cat.org/catbot/catbot-05_original.jpg",
        preview: "https://code4cat.org/catbot/catbot-05_preview.jpg",
        message: "怒っている"
      },
      {
        original: "https://code4cat.org/catbot/catbot-05_original.jpg",
        preview: "https://code4cat.org/catbot/catbot-05_preview.jpg",
        message: "不安を感じている"
      },
      {
        original: "https://code4cat.org/catbot/catbot-05_original.jpg",
        preview: "https://code4cat.org/catbot/catbot-05_preview.jpg",
        message: "恐怖を感じている"
      },
      {
        original: "https://code4cat.org/catbot/catbot-05_original.jpg",
        preview: "https://code4cat.org/catbot/catbot-05_preview.jpg",
        message: "興味を持っている"
      },
      {
        original: "https://code4cat.org/catbot/catbot-05_original.jpg",
        preview: "https://code4cat.org/catbot/catbot-05_preview.jpg",
        message: "イライラしている"
      },
      {
        original: "https://code4cat.org/catbot/catbot-05_original.jpg",
        preview: "https://code4cat.org/catbot/catbot-05_preview.jpg",
        message: "リラックスしている"
      }
    ];
    let random_image = Math.floor(Math.random() * images.length);

    await bot.queue({
      type: "text",
      text: "次のイラストから気持ちを読み取ってみましょう。"
    });

    await bot.queue({
      type: "image",
      originalContentUrl: images[random_image].original,
      previewImageUrl: images[random_image].preview
    });

    await bot.reply({
      type: "text",
      text: images[random_image].message
    });
  }
};
