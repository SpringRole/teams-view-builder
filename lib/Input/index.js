const Base = require("../Base");
const EmojiService = require("../utils/EmojiService");

class Input extends Base {
  defaultErrorMessage = "The field should not be left empty.";

  /**
   * Enum for Text Input Styles
   * @enum {Readonly<String>}
   */
  TextInputStyles = Object.freeze({
    text: "text",
    tel: "tel",
    url: "url",
    email: "email",
    password: "password",
  });

  /**
   * Enum for Select Style.
   * @enum {Readonly<String>}
   */
  SelectStyles = Object.freeze({
    compact: "compact",
    radio: "expanded",
    filtered: "filtered",
  });

  /**
   * Text Input Field.
   * https://adaptivecards.io/explorer/Input.Text.html
   *
   * @param {String} id required id of the field.
   * @param {Boolean} [isMultiline = false] is multi line field. Defaults to false
   * @param {Number} [maxLength] optional max length for field.
   * @param {String} [placeholder] placeholder. description of the input desired. displayed when no text has been input.
   * @param {String} [regex] regex to validate value against.
   * @param {('text'|'tel'|'url'|'email'|'password')|(TextInputStyles.text|TextInputStyles.tel|TextInputStyles.url|TextInputStyles.email|TextInputStyles.password)} [style] style hint for text input.
   * @param {object} [inlineAction] inlineAction
   * @param {String} [value] default value of the field.
   * @param {String} [errorMessage = this.defaultErrorMessage] error message to be shown in case of validation failure.
   * @param {Boolean} [isRequired = false] validation. if the value is required to be entered. defaults to false
   * @param {String} [label] label for the field.
   * @param {String} [height] height. one of this.Height
   * @param {Boolean} [separator = false] separator on top for the field. defaults to false
   * @param {('default'|'none'|'small'|'medium'|'large'|'extraLarge'|'padding')|(Spacing.default|Spacing.none|Spacing.small|Spacing.medium|Spacing.large|Spacing.xl|Spacing.padding)} [spacing] field spacing. one of this.Spacing
   * @param {Boolean} [isVisible = true] visibility of field. defaults to true.
   * @returns {Object} text input field.
   */
  text({
    id,
    isMultiline = false,
    maxLength,
    placeholder,
    regex,
    style,
    inlineAction,
    value,
    errorMessage = this.defaultErrorMessage,
    isRequired = false,
    label,
    height,
    separator = false,
    spacing,
    isVisible = true,
  }) {
    return {
      type: "Input.Text",
      id,
      isMultiline,
      maxLength,
      placeholder,
      regex,
      style,
      inlineAction,
      value,
      errorMessage,
      isRequired,
      label,
      height,
      spacing,
      separator,
      isVisible,
    };
  }

  /**
   * Number Input Field.
   * https://adaptivecards.io/explorer/Input.Number.html
   *
   * @param {String} id required unique id for the field.
   * @param {Number} [max] maximum value for the field.
   * @param {Number} [min] minimum value for the field.
   * @param {String} [placeholder] placeholder text for the field.
   * @param {String} [value] default value for the field.
   * @param {String} [errorMessage = this.defaultErrorMessage] error message to be shown in case of validation failure.
   * @param {Boolean} [isRequired = false] validation required? defaults to false.
   * @param {String} [label] label text for the field.
   * @param {String} [height] height. one of this.Height
   * @param {Boolean} [separator = false] should show separator on top? Defaults to false.
   * @param {('default'|'none'|'small'|'medium'|'large'|'extraLarge'|'padding')|(Spacing.default|Spacing.none|Spacing.small|Spacing.medium|Spacing.large|Spacing.xl|Spacing.padding)} [spacing] field spacing. one of this.Spacing
   * @param {Boolean} [isVisible = true] Should field be visible. Defaults to true.
   * @return {object} Number input field.
   */
  number({
    id,
    max,
    min,
    placeholder,
    value,
    errorMessage = this.defaultErrorMessage,
    isRequired = false,
    label,
    height,
    separator = false,
    spacing,
    isVisible = true,
  }) {
    return {
      type: "Input.Number",
      id,
      max,
      min,
      placeholder,
      value,
      errorMessage,
      isRequired,
      label,
      height,
      separator,
      spacing,
      isVisible,
    };
  }

  /**
   * Date Input Field.
   * https://adaptivecards.io/explorer/Input.Date.html
   *
   * @param {String} id required unique id of the field.
   * @param {String} [max] maximum value expressed in YYYY-MM-DD.
   * @param {String} [min] minimum value expressed in YYYY-MM-DD.
   * @param {String} [placeholder] placeholder text for the field.
   * @param {String} [value] default value to be selected expressed in YYYY-MM-DD
   * @param {String} [errorMessage = this.defaultErrorMessage] Error message if validation fails.
   * @param {Boolean} [isRequired = false] Requires validation? Defaults to false
   * @param {String} [label] label text
   * @param {String} [height] height. one of this.Height
   * @param {Boolean} [separator = false] Should field have a top separator. Defaults to false.
   * @param {('default'|'none'|'small'|'medium'|'large'|'extraLarge'|'padding')|(Spacing.default|Spacing.none|Spacing.small|Spacing.medium|Spacing.large|Spacing.xl|Spacing.padding)} [spacing] field spacing. one of this.Spacing
   * @param {Boolean} [isVisible = true] should the field be visible. Defaults to true.
   * @returns {Object} date input field.
   */
  date({
    id,
    max,
    min,
    placeholder,
    value,
    errorMessage = this.defaultErrorMessage,
    isRequired = false,
    label,
    height,
    separator = false,
    spacing,
    isVisible = true,
  }) {
    return {
      type: "Input.Date",
      id,
      max,
      min,
      placeholder,
      value,
      errorMessage,
      isRequired,
      label,
      height,
      separator,
      spacing,
      isVisible,
    };
  }

  /**
   * Time Input field.
   * https://adaptivecards.io/explorer/Input.Time.html
   *
   * @param {String} id required unique id of the field.
   * @param {String} [max] maximum value expressed in HH:MM.
   * @param {String} [min] minimum value expressed in HH:MM.
   * @param {String} [placeholder] placeholder text for the field.
   * @param {String} [value] default value to be selected expressed in HH:MM
   * @param {String} [errorMessage = this.defaultErrorMessage] Error message if validation fails.
   * @param {Boolean} [isRequired = false] Requires validation? Defaults to false
   * @param {String} [label] label text
   * @param {String} [height] height. one of this.Height
   * @param {Boolean} [separator = false] Should field have a top separator. Defaults to false.
   * @param {('default'|'none'|'small'|'medium'|'large'|'extraLarge'|'padding')|(Spacing.default|Spacing.none|Spacing.small|Spacing.medium|Spacing.large|Spacing.xl|Spacing.padding)} [spacing] field spacing. one of this.Spacing
   * @param {Boolean} [isVisible = true] should the field be visible. Defaults to true.
   * @returns {Object} time input field.
   */
  time({
    id,
    max,
    min,
    placeholder,
    value,
    errorMessage = this.defaultErrorMessage,
    isRequired = false,
    label,
    height,
    separator = false,
    spacing,
    isVisible = true,
  }) {
    return {
      type: "Input.Time",
      id,
      max,
      min,
      placeholder,
      value,
      errorMessage,
      isRequired,
      label,
      height,
      separator,
      spacing,
      isVisible,
    };
  }

  /**
   * Checkbox Field.
   * https://adaptivecards.io/explorer/Input.Toggle.html
   *
   * @param {String} title text for the checkbox.
   * @param {String} id unique id for the field.
   * @param {String} [value] default value
   * @param {String} [valueOff = 'false'] value for the checkbox when unchecked.
   * @param {String} [valueOn = 'true'] value for the checkbox when checked.
   * @param {Boolean} [wrap = true] Wrap the title. Defaults to true
   * @param {String} [errorMessage = this.defaultErrorMessage] error message shown if validation fails.
   * @param {Boolean} [isRequired = false] if validation needs to happen.
   * @param {String} [label] label text
   * @param {String} [height] height. one of this.Height
   * @param {Boolean} [separator = false] show separator on top. defaults to false
   * @param {('default'|'none'|'small'|'medium'|'large'|'extraLarge'|'padding')|(Spacing.default|Spacing.none|Spacing.small|Spacing.medium|Spacing.large|Spacing.xl|Spacing.padding)} [spacing] field spacing. one of this.Spacing
   * @param {Boolean} [isVisible = true] should field be visible.
   * @return {object} checkbox field.
   */
  checkbox({
    title,
    id,
    value,
    valueOff = "false",
    valueOn = "true",
    wrap = true,
    errorMessage = this.defaultErrorMessage,
    isRequired = false,
    label,
    height,
    separator = false,
    spacing,
    isVisible = true,
  }) {
    return {
      type: "Input.Toggle",
      title: title ? EmojiService.toUnicodeVersion(title) : title,
      id,
      value,
      valueOff,
      valueOn,
      wrap,
      errorMessage,
      isRequired,
      label,
      height,
      separator,
      spacing,
      isVisible,
    };
  }

  /**
   * Select field. Render as dropdown or radio buttons.
   * https://adaptivecards.io/explorer/Input.ChoiceSet.html
   *
   * @param {String} id unique id for the field.
   * @param {Array<choice>} choices array of choices. Each choice having a `title` and `value` field.
   * @param {Boolean} [isMultiSelect = false] Allow multi select. Defaults to false.
   * @param {('compact'|'expanded'|'filtered')|(SelectStyles.compact|SelectStyles.radio|SelectStyles.filtered)} [style] ChoiceSet style. Expanded (Radio buttons) or Dropdown.
   * @param {String} [value] default value to be selected.
   * @param {String} [placeholder = 'Select'] placeholder text. Defaults to 'Select'
   * @param {Boolean} [wrap = false] wrap content
   * @param {String} [errorMessage = this.defaultErrorMessage] error message shown on validation.
   * @param {Boolean} [isRequired = false] if value selected needs to be validated.
   * @param {String} [label] label text
   * @param {String} [height] height. one of this.Height
   * @param {Boolean} [separator = false] show separator. defaults to false.
   * @param {('default'|'none'|'small'|'medium'|'large'|'extraLarge'|'padding')|(Spacing.default|Spacing.none|Spacing.small|Spacing.medium|Spacing.large|Spacing.xl|Spacing.padding)} [spacing] field spacing. one of this.Spacing
   * @param {Boolean} [isVisible = true] should field be visible. Defaults to true.
   * @returns {object} select field.
   */
  select({
    id,
    choices,
    isMultiSelect = false,
    style,
    value,
    placeholder = "Select",
    wrap = false,
    errorMessage = this.defaultErrorMessage,
    isRequired = false,
    label,
    height,
    separator = false,
    spacing,
    isVisible = true,
  }) {
    return {
      type: "Input.ChoiceSet",
      id,
      choices,
      isMultiSelect,
      style,
      value,
      placeholder,
      wrap,
      errorMessage,
      isRequired,
      label,
      height,
      separator,
      spacing,
      isVisible,
    };
  }

  /**
   * Describes a choice for use in a ChoiceSet/select.
   * https://adaptivecards.io/explorer/Input.Choice.html
   *
   * @param {String} title text to display.
   * @param {String} value The raw value for the choice. NOTE: do not use a , in the value, since a ChoiceSet with isMultiSelect set to true returns a comma-delimited string of choice values.
   * @return {object} choice object.
   */
  choice({ title, value }) {
    return {
      title: title ? EmojiService.toUnicodeVersion(title) : title,
      value,
    };
  }
}

module.exports = new Input();
