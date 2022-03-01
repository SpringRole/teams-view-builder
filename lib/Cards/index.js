const { CardFactory } = require("botbuilder");

class Cards {
  /**
   * The adaptive card.
   * @param {object} 
   * @returns
   */
  adaptiveCard = ({
    $schema = "https://adaptivecards.io/schemas/adaptive-card.json",
    version = "1.3",
    body,
    actions,
    minHeight,
    fallbackText,
    backgroundImage,
    lang,
    refresh,
    authentication,
    isFullWidth = true,
  }) =>
    CardFactory.adaptiveCard({
      type: "AdaptiveCard",
      $schema,
      version,
      msteams: isFullWidth ? { width: "full" } : {},
      body,
      actions,
      minHeight,
      fallbackText,
      backgroundImage,
      lang,
      refresh,
      authentication,
    });
}

module.exports = new Cards();
