const Base = require("../Base");

class Types extends Base {
  /**
   * Enum for container background image fill mode
   * @enum {Readonly<string>}
   */
  BackgroundImageFillMode = Object.freeze({
    hRepeat: "repeatHorizontally",
    vRepeat: "repeatVertically",
    repeat: "repeat",
    cover: "cover",
  });

  /**
   * Background Image. Acceptable formats are PNG, JPEG, and GIF
   * https://adaptivecards.io/explorer/BackgroundImage.html
   *
   * @param {string} url image url
   * @param {string} [fillMode] fill mode. one of BackgroundImageFillMode
   * @param {string} [horizontalAlignment = HAlign.center] horizontal alignment
   * @param {string} [verticalAlignment = VAlign.center] vertical alignment
   */
  backgroundImage({
    url,
    fillMode,
    horizontalAlignment = this.HAlign.center,
    verticalAlignment = this.VAlign.center,
  }) {
    return {
      url,
      fillMode,
      horizontalAlignment,
      verticalAlignment,
    };
  }
}

module.exports = new Types();
