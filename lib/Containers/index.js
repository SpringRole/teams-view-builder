const Base = require("../Base");

class Containers extends Base {
  /**
   * Enum for Container Styles
   * @enum {Readonly<String>}
   */
  ContainerStyles = Object.freeze({
    default: "default",
    grey: "emphasis",
    green: "good",
    red: "attention",
    yellow: "warning",
    blue: "accent",
  });

  /**
   * Container Block. Containers group items together.
   *
   * @param {Array<object>} items elements to be placed inside the container.
   * @param {object} [selectAction] action object on click.
   * @param {('grey'|'green'|'red'|'yellow'|'blue'|'default')} [style = 'default'] action style. one of ContainerStyles. is 'default' by default
   * @param {String} [verticalContentAlignment] vertical alignment of the container.
   * @param {Boolean} [bleed = false] determines whether the element should bleed through its parent's padding.
   * @param {String|backgroundImage} [backgroundImage] either a URL or background image object.
   * @param {String} [minHeight] minimum height of the container.
   * @param {Boolean} [rtl = false] works on v1.5 and later, when true content in this Container should be presented right to left. defaults to false.
   * @param {String} [height] height of the container
   * @param {Boolean} [separator = false] Show separator(divider) on top. Defaults to false.
   * @param {String} [spacing] Spacing in the container.
   * @param {String} [id] unique id for the field
   * @param {Boolean} [isVisible = true] Show container. Defaults to true.
   * @return {object} container object.
   */
  container({
    items,
    selectAction,
    style = this.ContainerStyles.default,
    verticalContentAlignment = this.VAlign.top,
    bleed = false,
    backgroundImage,
    minHeight,
    rtl,
    height,
    separator = false,
    spacing,
    id,
    isVisible = true,
  }) {
    return {
      type: "Container",
      items,
      selectAction,
      style,
      verticalContentAlignment,
      bleed,
      backgroundImage,
      minHeight,
      rtl,
      height,
      separator,
      spacing,
      id,
      isVisible,
    };
  }

  /**
   * Column Set Container. ColumnSet divides a region into Columns, allowing elements to sit side-by-side.
   *
   * @param {Array<column>} columns columns containing elements
   * @param {object} [selectAction] action object in case of click.
   * @param {('grey'|'green'|'red'|'yellow'|'blue'|'default')} [style = 'default'] action style. one of ContainerStyles. is 'default' by default
   * @param {Boolean} [bleed = false] determines whether the element should bleed through its parent's padding.
   * @param {String} [minHeight] min height of the column set in pixels.
   * @param {String} [horizontalAlignment = HAlign.left] horizontal alignment. defaults to 'left'
   * @param {String} [height] height for the field.
   * @param {Boolean} [separator = false] show separator(divider) on top. defaults to false
   * @param {String} [spacing] spacing for the field.
   * @param {String} [id] unique id for the columnSet
   * @param {Boolean} [isVisible = true] should show field. defaults to true.
   * @return {object} column set field.
   */
  columnSet({
    columns,
    selectAction,
    style = this.ContainerStyles.default,
    bleed = false,
    minHeight,
    horizontalAlignment = this.HAlign.left,
    height,
    separator = false,
    spacing,
    id,
    isVisible = true,
  }) {
    return {
      type: "ColumnSet",
      columns,
      selectAction,
      style,
      bleed,
      minHeight,
      horizontalAlignment,
      height,
      separator,
      spacing,
      id,
      isVisible,
    };
  }

  /**
   * Column Container to be used inside columnSet.
   *
   * @param {Array<object>} items elements to be embedded in the column.
   * @param {String|backgroundImage} [backgroundImage] background image for the column.
   * @param {Boolean} [bleed = false] determines whether the element should bleed through its parent's padding.
   * @param {String} [minHeight] min height of the column
   * @param {Boolean} [rtl = false] works on v1.5 and later, when true content in this Container should be presented right to left. defaults to false.
   * @param {Boolean} [separator = false] show separator(divider) on top. defaults to false.
   * @param {String} [spacing] spacing of the column
   * @param {object} [selectAction] action object on click.
   * @param {('grey'|'green'|'red'|'yellow'|'blue'|'default')} [style = 'default'] action style. one of ContainerStyles. is 'default' by default
   * @param {String} [verticalContentAlignment = VAlign.top] vertical alignment of content.
   * @param {String|number} [width] width of the column. Can be 'stretched', weight -> 50, pixels -> '50px'
   * @param {String} [id] unique id for the column
   * @param {Boolean} [isVisible = true] show the column. defaults to true.
   * @return {object} column container.
   */
  column({
    id,
    isVisible = true,
    spacing,
    separator = false,
    horizontalAlignment = this.HAlign.left,
    height,
    width,
    minHeight,
    verticalContentAlignment = this.VAlign.top,
    style = this.ContainerStyles.default,
    bleed = false,
    backgroundImage,
    selectAction,
    items,
  }) {
    return {
      type: "Column",
      id,
      isVisible,
      spacing,
      separator,
      horizontalAlignment,
      height,
      width,
      minHeight,
      verticalContentAlignment,
      style,
      bleed,
      backgroundImage,
      selectAction,
      items,
    };
  }

  /**
   * Enum for container width
   * @enum {Readonly<String>}
   */
  COLUMN_WIDTH = Object.freeze({
    AUTO: "auto",
    STRETCH: "stretch",
  });

  /**
   * Enum for container style
   * @enum {Readonly<String>}
   */
  CONTAINER_STYLE = Object.freeze({
    DEFAULT: "default",
    EMPHASIS: "emphasis",
    ACCENT: "accent",
    GOOD: "good",
    ATTENTION: "attention",
    WARNING: "warning",
  });
}

module.exports = new Containers();
