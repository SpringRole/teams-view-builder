const EmojiService = require("../utils/EmojiService");

class Actions {
  #actionStyles = Object.freeze({
    default: "default",
    primary: "positive",
    danger: "destructive",
  });

  /**
   * Open URL Action Button.
   * https://adaptivecards.io/explorer/Action.OpenUrl.html
   *
   * @param {String} url url to open
   * @param {String} title label for button that represents the action.
   * @param {String} [iconUrl] optional icon to be shown on the action in conjunction with the title.
   * @param {String} [id] unique id for the button
   * @param {('primary'|'danger'|'default')} [style = 'default'] action style. one of ['primary','danger','default']. is 'default' by default
   * @param {String} [tooltip] works on v1.5 and later, defines text that should be displayed to the end user as they hover the mouse over the action.
   * @param {Boolean} [isEnabled = true] works on v1.5 and later, determines whether the action should be enabled. default true
   * @return {object} open url button.
   */
  openUrl({
    url,
    title,
    iconUrl,
    id,
    tooltip,
    style = "default",
    isEnabled = true,
  }) {
    const action = {
      type: "Action.OpenUrl",
      url,
      title: title ? EmojiService.toUnicodeVersion(title) : title,
      style: this.#actionStyles[style],
      isEnabled,
    };
    if (iconUrl) {
      action.iconUrl = iconUrl;
    }
    if (id) {
      action.id = id;
    }
    if (tooltip) {
      action.tooltip = tooltip;
    }
    return action;
  }

  /**
   * Submit Action Button.
   * https://adaptivecards.io/explorer/Action.Submit.html
   *
   * @param {String} title label for button that represents the action.
   * @param {object} data submit data.
   * @param {String} [iconUrl] optional icon to be shown on the action in conjunction with the title.
   * @param {String} [id] unique id for the button
   * @param {String} [style = 'default'] action style. one of ['primary','danger','default']. is 'default' by default
   * @param {String} [tooltip] works on v1.5 and later, defines text that should be displayed to the end user as they hover the mouse over the action.
   * @param {Boolean} [isEnabled = true] works on v1.5 and later, determines whether the action should be enabled. default true
   * @returns {object} submit button
   */
  submit({
    title,
    data,
    iconUrl,
    id,
    tooltip,
    style = "default",
    isEnabled = true,
  }) {
    const action = {
      type: "Action.Submit",
      title: title ? EmojiService.toUnicodeVersion(title) : title,
      data,
      style: this.#actionStyles[style],
      isEnabled,
    };
    if (iconUrl) {
      action.iconUrl = iconUrl;
    }
    if (id) {
      action.id = id;
    }
    if (tooltip) {
      action.tooltip = tooltip;
    }
    return action;
  }

  /**
   * Show Card Button.
   * https://adaptivecards.io/explorer/Action.ShowCard.html
   *
   * @param {String} title label for button that represents the action.
   * @param {AdaptiveCard} card the Adaptive Card to show. Inputs in ShowCards will not be submitted if the submit button is located on a parent card. See https://docs.microsoft.com/en-us/adaptive-cards/authoring-cards/input-validation for more details.
   * @param {String} [iconUrl] optional icon to be shown on the action in conjunction with the title.
   * @param {String} [id] unique id for the button
   * @param {String} [style = 'default'] action style. one of ['primary','danger','default']. is 'default' by default
   * @param {String} [tooltip] works on v1.5 and later, defines text that should be displayed to the end user as they hover the mouse over the action.
   * @param {Boolean} [isEnabled = true] works on v1.5 and later, determines whether the action should be enabled. default true
   * @returns {object} show card button
   */
  showCard({
    title,
    card,
    iconUrl,
    id,
    tooltip,
    style = "default",
    isEnabled = true,
  }) {
    const action = {
      type: "Action.ShowCard",
      title: title ? EmojiService.toUnicodeVersion(title) : title,
      card,
      style: this.#actionStyles[style],
      isEnabled,
    };
    if (iconUrl) {
      action.iconUrl = iconUrl;
    }
    if (id) {
      action.id = id;
    }
    if (tooltip) {
      action.tooltip = tooltip;
    }
    return action;
  }

  /**
   * Toggle Visibility Button
   * https://adaptivecards.io/explorer/Action.ToggleVisibility.html
   *
   * @param {String} title label for button that represents the action.
   * @param {Array<String|{ elementId, isVisible }>} targetElements list of ids to toggle visibility for. [] by default
   * @param {String} [iconUrl] optional icon to be shown on the action in conjunction with the title.
   * @param {String} [id] unique id for the button
   * @param {String} [style = 'default'] action style. one of ['primary','danger','default']. is 'default' by default
   * @param {String} [tooltip] works on v1.5 and later, defines text that should be displayed to the end user as they hover the mouse over the action.
   * @param {Boolean} [isEnabled = true] works on v1.5 and later, determines whether the action should be enabled. default true
   * @returns {object} toggle visibility button
   */
  toggleVisibility({
    title,
    targetElements = [],
    iconUrl,
    id,
    tooltip,
    style = "default",
    isEnabled = true,
  }) {
    const action = {
      type: "Action.ToggleVisibility",
      title: title ? EmojiService.toUnicodeVersion(title) : title,
      targetElements,
      style: this.#actionStyles[style],
      isEnabled,
    };
    if (iconUrl) {
      action.iconUrl = iconUrl;
    }
    if (id) {
      action.id = id;
    }
    if (tooltip) {
      action.tooltip = tooltip;
    }
    return action;
  }
}

module.exports = new Actions();
