const Base = require("../Base");
const EmojiService = require("../utils/EmojiService");

class Elements extends Base {
  /**
   * Enum for TextBlock Styles
   * @enum {Readonly<String>}
   */
  TextColors = Object.freeze({
    default: "default",
    black: "dark",
    grey: "light",
    blue: "accent",
    green: "good",
    yellow: "warning",
    red: "attention",
  });

  /**
   * Enum for Text FontTypes
   * @enum {Readonly<String>}
   */
  TextFontTypes = Object.freeze({
    default: "default",
    monospace: "monospace",
  });

  /**
   * Enum for Text Sizes
   * @enum {Readonly<String>}
   */
  TextSizes = Object.freeze({
    default: "default",
    small: "small",
    medium: "medium",
    large: "large",
    xl: "extraLarge",
  });

  /**
   * Enum for Text Weights
   * @enum {Readonly<string>}
   */
  TextWeights = Object.freeze({
    default: "default",
    lighter: "lighter",
    bolder: "bolder",
  });

  /**
   * Enum for Text Styles
   * @enum {Readonly<string>}
   */
  TextStyles = Object.freeze({
    default: "default",
    heading: "heading",
  });

  /**
   * Enum for Image Sizes
   * @enum {Readonly<string>}
   */
  ImageSizes = Object.freeze({
    small: "small",
    medium: "medium",
    large: "large",
    stretch: "stretch",
    auto: "auto",
  });

  /**
   * Enum for Image Styles
   * @enum {Readonly<string>}
   */
  ImageStyles = Object.freeze({
    default: "default",
    rounded: "person",
  });

  /**
   * Displays text, allowing control over font sizes, weight, and color.
   * https://adaptivecards.io/explorer/TextBlock.html
   *
   * @param {String} text text content.
   * @param {('black'|'grey'|'blue'|'green'|'yellow'|'red'|'default')} [color] optional color for the text. one if TextColors
   * @param {(undefined|'default'|'monospace')} [fontType] font type. one of TextFontTypes
   * @param {String} [horizontalAlignment = HAlign.left] text block horizontal alignment. defaults to left.
   * @param {Boolean} [isSubtle = false] should the text be subtle? Defaults to false.
   * @param {Number} [maxLines] optional maximum number of lines to be shown.
   * @param {('default'|'small'|'medium'|'large'|'xl')} [size] text font size. one of TextSizes
   * @param {('default'|'lighter'|'bolder'))} [weight] text font weight. one of TextWeights
   * @param {Boolean} [wrap = true] wrap the content in the given layout. Defaults to true.
   * @param {(undefined|'default'|'heading')} [style = 'default'] style of textblock. one of TextStyles
   * @param {String} [height] text block height. one of this.Height
   * @param {Boolean} [separator = false] should there be a separator on top. Defaults to false.
   * @param {('default'|'none'|'small'|'medium'|'large'|'xl'|'padding')} [spacing] text spacing. one of this.Spacing
   * @param {String} [id] optional id for the text block
   * @param {Boolean} [isVisible = true] should the block be visible on render? Defaults to true.
   * @returns {object} text block object
   */
  textBlock({
    text,
    color,
    fontType,
    horizontalAlignment = this.HAlign.left,
    isSubtle = false,
    maxLines,
    size,
    weight,
    wrap = true,
    style = this.TextStyles.default,
    height,
    separator = false,
    spacing,
    id,
    isVisible = true,
  }) {
    let preparedText = text;
    if (text) {
      preparedText = text.replace(/\@\<+([^\>[]+)>+/g, "<at>$1</at>"); // replace @<something> with <at>something</at>
      preparedText = EmojiService.toUnicodeVersion(preparedText);
    }
    return {
      type: "TextBlock",
      text: preparedText,
      color,
      fontType,
      horizontalAlignment,
      isSubtle,
      maxLines,
      size,
      weight,
      wrap,
      style,
      height,
      separator,
      spacing,
      id,
      isVisible,
    };
  }

  /**
   * Displays an image. Acceptable formats are PNG, JPEG, and GIF
   * https://adaptivecards.io/explorer/Image.html
   *
   * @param {String} url image url.
   * @param {String} [altText = 'image'] alternate text describing the image.
   * @param {String} [backgroundColor] applies a background to a transparent image. This property will respect the image style. can have hex values
   * @param {String} [height] height of the element. Can be one of this.Height -OR- weight -> 50 -OR- pixels -> '50px'
   * @param {String} [horizontalAlignment = HAlign.left] horizontal alignment in container. Defaults to left.
   * @param {Object} [selectAction] on click action for the image.
   * @param {('small'|'medium'|'large'|'stretch'|'auto')} [size] size of the image. one of this.ImageSizes
   * @param {('default'|'rounded')} [style] show squared image or rounded image. one of this.ImageStyles
   * @param {String} [width] width of the image. Can be one of this.Width -OR- weight -> 50 -OR- pixels -> '50px'
   * @param {Boolean} [separator = false] Show separator on top. Defaults to false.
   * @param {('default'|'none'|'small'|'medium'|'large'|'xl'|'padding')} [spacing] text spacing. one of this.Spacing
   * @param {String} [id] id for the field.
   * @param {Boolean} [isVisible = true] Show field. Defaults to true.
   * @return {object} image element.
   */
  image({
    url,
    altText,
    backgroundColor,
    height,
    horizontalAlignment = this.HAlign.left,
    selectAction,
    size,
    style,
    width,
    separator = false,
    spacing,
    id,
    isVisible = true,
  }) {
    return {
      type: "Image",
      url,
      altText,
      backgroundColor,
      height,
      horizontalAlignment,
      selectAction,
      size,
      style,
      width,
      separator,
      spacing,
      id,
      isVisible,
    };
  }
}

module.exports = Elements();
