class Input {
  errorMessagent = "Required if isRequired is true";

  /**
   * Text Input Field.
   * https://adaptivecards.io/explorer/Input.Text.html
   *
   * @param {string} id required id of the field.
   * @param {boolean} [isMultiline = false] is multi line field. Defaults to false
   * @param {number} [maxLength] optional max length for field.
   * @param {string} [placeholder] placeholder
   * @param {string} [regex] regex to validate value against.
   * @param {string} [style] style
   * @param {object} [inlineAction] inlineAction
   * @param {string} [value] default value of the field.
   * @param {string} [errorMessage] error message to be shown in case of validation failure.
   * @param {boolean} [isRequired = false] validation. if the value is required to be entered. Defaults to true
   * @param {string} [label] label for the field.
   * @param {string} [height] height
   * @param {boolean} [separator = false] separator on top for the field.
   * @param {string} [spacing] spacing for the field.
   * @param {boolean} [isVisible = true] visibility of field. Defaults to true.
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
    errorMessage = errorMessagent,
    isRequired = false,
    label,
    height,
    spacing,
    separator = false,
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
   * Date Input field.
   *
   * @param {string} id required unique id of the field.
   * @param {boolean} [isVisible=true] should the field be visible. Defaults to true.
   * @param {string} [label] label text
   * @param {string} [value] default value to be selected
   * @param {string} [spacing] spacing above the field.
   * @param {boolean} [separator=false] Should field have a top separator. Defaults to false.
   * @param {boolean} [isRequired=false] Requires validation? Defaults to false
   * @param {string} [errorMessage='Required if isRequired is true'] Error message if validation fails.
   * @returns {Object} date input field.
   */
  dateInput({
    id,
    isVisible = true,
    label,
    value,
    placeholder = "Select a Date",
    spacing,
    separator = false,
    isRequired = false,
    errorMessage = errorMessagent,
  }) {
    return {
      type: "Input.Date",
      id,
      isVisible,
      label,
      value,
      placeholder,
      spacing,
      separator,
      isRequired,
      errorMessage,
    };
  }

  /**
   * Time Input field.
   *
   * @param {string} id required unique id of the field.
   * @param {boolean} [isVisible=true] should the field be visible. Defaults to true.
   * @param {string} [label] label text
   * @param {string} [value] default value to be selected
   * @param {string} [spacing] spacing above the field.
   * @param {boolean} [separator=false] Should field have a top separator. Defaults to false.
   * @param {boolean} [isRequired=false] Requires validation? Defaults to false
   * @param {string} [errorMessage='Required if isRequired is true'] Error message if validation fails.
   * @returns {Object} time input field.
   */
  timeInput({
    id,
    isVisible = true,
    label,
    value,
    spacing,
    separator = false,
    isRequired = false,
    errorMessage = errorMessagent,
  }) {
    return {
      type: "Input.Time",
      id,
      isVisible,
      label,
      value,
      spacing,
      separator,
      isRequired,
      errorMessage,
    };
  }

  /**
   * Number input field.
   *
   * @param {string} id required unique id for the field.
   * @param {boolean} [isVisible=true] Should field be visible. Defaults to true.
   * @param {string} [label] label text for the field.
   * @param {string} [placeholder] placeholder text for the field.
   * @param {string} [value] default value for the field.
   * @param {number} [min] minimum value for the field.
   * @param {number} [max] maximum value for the field.
   * @param {string} [spacing] spacing on top.
   * @param {boolean} [separator=false] should show separator on top? Defaults to false.
   * @param {boolean} [isRequired=false] validation required? defaults to false.
   * @param {string} [errorMessage='Required if isRequired is true'] error message to be shown in case of validation failure.
   * @return {object} number input field.
   */
  numberInput({
    id,
    isVisible = true,
    label,
    placeholder,
    value,
    min,
    max,
    spacing,
    separator = false,
    isRequired = false,
    errorMessage = errorMessagent,
  }) {
    return {
      type: "Input.Number",
      id,
      isVisible,
      label,
      placeholder,
      value,
      max,
      min,
      spacing,
      separator,
      isRequired,
      errorMessage,
    };
  }

  /**
   * select field. Render as dropdown or radio buttons.
   *
   * @param {string} id unique id for the field.
   * @param {boolean} [isVisible=true] should field be visible. Defaults to true.
   * @param {string} [label] label text
   * @param {string} [placeholder='Select'] placeholder text. Defaults to 'Select'
   * @param {boolean} [isMultiSelect=false] Allow multi select. Defaults to false.
   * @param {string} [style] ChoiceSet style. Expanded (Radio buttons) or Dropdown.
   * @param {string} [value] default value to be selected.
   * @param {string} [spacing] top spacing
   * @param {boolean} [separator=false] show separator
   * @param {boolean} [wrap=false] wrap content
   * @param {boolean} [isRequired=false] if value selected needs to be validated.
   * @param {string} [errorMessage='Required if isRequired is true'] error message shown on validation.
   * @param {object<{title,value}>[]} choices array of choices. Each choice having a `title` and `value` field.
   * @returns {object} select field.
   */
  select({
    id,
    isVisible = true,
    label,
    placeholder = "Select",
    isMultiSelect = false,
    style,
    value,
    spacing,
    separator = false,
    wrap = false,
    isRequired = false,
    errorMessage = errorMessagent,
    choices,
  }) {
    return {
      type: "Input.ChoiceSet",
      id,
      isVisible,
      label,
      placeholder,
      isMultiSelect,
      style,
      value,
      spacing,
      separator,
      wrap,
      isRequired,
      errorMessage,
      choices,
    };
  }

  /**
   * Checkbox field.
   *
   * @param {string} id unique id for the field.
   * @param {boolean} [isVisible=true] should field be visible.
   * @param {string} [label] label text
   * @param {string} title text for the checkbox.
   * @param {string} [valueOn='true'] value for the checkbox when checked.
   * @param {string} [valueOff='false'] value for the checkbox when unchecked.
   * @param {string} [value] default value
   * @param {boolean} [separator=false] show separator on top. Defaults to false
   * @param {boolean} [wrap=true] Wrap the title. Defaults to true
   * @param {boolean} [isRequired=false] if validation needs to happen.
   * @param {string} [errorMessage='Required if isRequired is true'] error message shown if validation fails.
   * @return {object} checkbox field.
   */
  checkbox({
    id,
    isVisible = true,
    label,
    title,
    valueOn = "true",
    valueOff = "false",
    value,
    separator = false,
    wrap = true,
    isRequired = false,
    errorMessage = errorMessagent,
  }) {
    return {
      type: "Input.Toggle",
      id,
      isVisible,
      label,
      title,
      value,
      valueOn,
      valueOff,
      separator,
      wrap,
      isRequired,
      errorMessage,
    };
  }

  /**
   * Enum for select style.
   * @enum {Readonly<string>}
   */
  SELECT_STYLE = Object.freeze({
    RADIO: "expanded",
  });
}

module.exports = Input();
