const { CardFactory } = require("botbuilder");
const _ = require("lodash");

class Cards {
  /**
   * The adaptive card, containing a free-form body of card elements, and an optional set of actions.
   * https://adaptivecards.io/explorer/AdaptiveCard.html
   *
   * @param {String} version Schema version that this card requires. If a client is lower than this version, the fallbackText will be rendered.
   * @param {Array<object>} body the card elements to show in the primary card region.
   * @param {Array<object>} actions the Actions to show in the card’s action bar.
   * @param {String} minHeight specifies the minimum height of the card.
   * @param {('top'|'center'|'bottom')} verticalContentAlignment defines how the content should be aligned vertically within the container. one of ['top', 'center', 'bottom']
   * @param {String} fallbackText text shown when the client doesn’t support the version specified (may contain markdown).
   * @param {String} backgroundImage specifies the background image of the card. is a url
   * @param {String} lang the 2-letter ISO-639-1 language used in the card. Used to localize any date/time functions
   * @param {Refresh} refresh works on v1.4 and later, defines how the card can be refreshed by making a request to the target Bot.
   * @param {Authentication} authentication works on v1.4 and later, defines authentication information to enable on-behalf-of single sign on or just-in-time OAuth.
   * @param {Boolean} [rtl = false] works on v1.5 and later, when true content in this Adaptive Card should be presented right to left. defaults to false.
   * @param {Boolean} [isFullWidth = true] sets the card width to full size if true. defaults to true
   * @param {Array<object>} [entities = []] array of entities to be set inside msteams attribute
   * @returns
   */
  adaptiveCard({
    version = "1.3",
    body,
    actions,
    minHeight,
    verticalContentAlignment,
    fallbackText,
    backgroundImage,
    lang,
    refresh,
    authentication,
    rtl = false,
    isFullWidth = true,
    entities = [],
  }) {
    const msteams = {};
    if (isFullWidth) {
      msteams.width = "full";
    }
    if (!_.isEmpty(entities)) {
      msteams.entities = entities;
    }
    return CardFactory.adaptiveCard({
      type: "AdaptiveCard",
      $schema: "https://adaptivecards.io/schemas/adaptive-card.json",
      version,
      msteams,
      body,
      actions,
      minHeight,
      verticalContentAlignment,
      fallbackText,
      backgroundImage,
      lang,
      refresh,
      authentication,
      rtl,
    });
  }
}

module.exports = new Cards();
