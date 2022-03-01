const emojiService = require("node-emoji");

class EmojiService {
  toUnicodeVersion(text) {
    return emojiService.emojify(text.toString(), () => "");
  }
}

module.exports = new EmojiService();
