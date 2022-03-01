const Base = require("../Base");
const EmojiService = require("../utils/EmojiService");

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
   * Displays a set of actions.
   * https://adaptivecards.io/explorer/ActionSet.html
   *
   * @param {Array{Actions}} actions actions to be added to the set
   * @param {String} [height] height for the field. one of this.Height
   * @param {Boolean} [separator=false] Show separator(divider) on top. Defaults to false.
   * @param {String} [spacing] Spacing in the container.
   * @param {String} [id] unique id for the field
   * @param {Boolean} [isVisible=true] show container
   * @return {object} ActionSet Container.
   */
  actionSet({ actions, height, separator, spacing, id, isVisible = true }) {
    return {
      type: "ActionSet",
      actions,
      height,
      separator,
      spacing,
      id,
      isVisible,
    };
  }

  /**
   * Container Block. Containers group items together.
   * https://adaptivecards.io/explorer/Container.html
   *
   * @param {Array<object>} items elements to be placed inside the container.
   * @param {object} [selectAction] action object on click.
   * @param {('grey'|'green'|'red'|'yellow'|'blue'|'default')} [style = 'default'] container style. one of ContainerStyles. is 'default' by default
   * @param {String} [verticalContentAlignment] vertical alignment of the container. one of this.VAlign
   * @param {Boolean} [bleed = false] determines whether the element should bleed through its parent's padding.
   * @param {String|Types.backgroundImage} [backgroundImage] either a URL or background image object.
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
   * https://adaptivecards.io/explorer/ColumnSet.html
   *
   * @param {Array<column>} columns columns containing elements
   * @param {object} [selectAction] action object in case of click.
   * @param {('grey'|'green'|'red'|'yellow'|'blue'|'default')} [style = 'default'] container style. one of ContainerStyles. is 'default' by default
   * @param {Boolean} [bleed = false] determines whether the element should bleed through its parent's padding.
   * @param {String} [minHeight] min height of the column set in pixels.
   * @param {String} [horizontalAlignment = HAlign.left] horizontal alignment. defaults to 'left'
   * @param {String} [height] height for the field. one of this.Height
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
   * https://adaptivecards.io/explorer/Column.html
   *
   * @param {Array<object>} items elements to be embedded in the column.
   * @param {String|Types.backgroundImage} [backgroundImage] background image for the column.
   * @param {Boolean} [bleed = false] determines whether the element should bleed through its parent's padding.
   * @param {String} [minHeight] min height of the column
   * @param {Boolean} [rtl = false] works on v1.5 and later, when true content in this Container should be presented right to left. defaults to false.
   * @param {Boolean} [separator = false] show separator(divider) on top. defaults to false.
   * @param {String} [spacing] spacing of the column
   * @param {object} [selectAction] action object on click.
   * @param {('grey'|'green'|'red'|'yellow'|'blue'|'default')} [style = 'default'] container style. one of ContainerStyles. is 'default' by default
   * @param {String} [verticalContentAlignment = VAlign.top] vertical alignment of content.
   * @param {String|number} [width] width of the column. Can be one of this.Width -OR- weight -> 50 -OR- pixels -> '50px'
   * @param {String} [id] unique id for the column
   * @param {Boolean} [isVisible = true] show the column. defaults to true.
   * @return {object} column container.
   */
  column({
    items,
    backgroundImage,
    bleed = false,
    minHeight,
    rtl = false,
    separator = false,
    spacing,
    selectAction,
    style = this.ContainerStyles.default,
    verticalContentAlignment = this.VAlign.top,
    width,
    id,
    isVisible = true,
  }) {
    return {
      type: "Column",
      items,
      backgroundImage,
      bleed,
      minHeight,
      rtl,
      separator,
      spacing,
      selectAction,
      style,
      verticalContentAlignment,
      width,
      id,
      isVisible,
    };
  }

  /**
   * The FactSet element displays a series of facts (i.e. name/value pairs) in a tabular form.
   * https://adaptivecards.io/explorer/FactSet.html
   *
   * @param {Array<fact>} facts array of facts. a fact describes a key/value pair.
   * @param {String} [height] height for the field. one of this.Height
   * @param {Boolean} [separator = false] show separator(divider) on top. defaults to false
   * @param {String} [spacing] spacing for the field.
   * @param {String} [id] unique id for the FactSet
   * @param {Boolean} [isVisible = true] should show field. defaults to true.
   * @return {object} fact set field.
   */
  factSet({ facts, height, separator = false, spacing, id, isVisible = true }) {
    return {
      type: "FactSet",
      facts,
      height,
      separator,
      spacing,
      id,
      isVisible,
    };
  }

  /**
   * Describes a Fact in a FactSet as a key/value pair.
   * https://adaptivecards.io/explorer/Fact.html
   *
   * @param {String} title the title of the fact.
   * @param {String} value the value of the fact.
   * @return {object} fact object.
   */
  fact({ title, value }) {
    return {
      title: title ? EmojiService.toUnicodeVersion(title) : title,
      value: value ? EmojiService.toUnicodeVersion(value) : value,
    };
  }

  /**
   * Image Set Container. The ImageSet displays a collection of Images similar to a gallery. Acceptable formats are PNG, JPEG, and GIF
   * https://adaptivecards.io/explorer/ImageSet.html
   *
   * @param {Array<image>} images the array of Image elements to show.
   * @param {String} [height] height for the field. one of this.Height
   * @param {String} [imageSize] controls the approximate size of each image. one of ImageSizes
   * @param {Boolean} [separator = false] show separator(divider) on top. defaults to false
   * @param {String} [spacing] spacing for the field.
   * @param {String} [id] unique id for the ImageSet
   * @param {Boolean} [isVisible = true] should show field. defaults to true.
   * @return {object} image set field.
   */
  imageSet({
    images,
    imageSize,
    height,
    separator = false,
    spacing,
    id,
    isVisible = true,
  }) {
    return {
      type: "ImageSet",
      images,
      imageSize,
      height,
      separator,
      spacing,
      id,
      isVisible,
    };
  }

  /**
   * Provides a way to display data in a tabular form.
   * Works in v1.5 and later
   * https://adaptivecards.io/explorer/Table.html
   *
   * @param {Array<object>} columns defines the number of columns in the table, their sizes, and more.
   * @param {Array<object>} rows defines the rows of the table.
   * @param {Boolean} [firstRowAsHeader = true] specifies whether the first row of the table should be treated as a header row, and be announced as such by accessibility software
   * @param {Boolean} [showGridLines = true] specifies whether grid lines should be displayed.
   * @param {('grey'|'green'|'red'|'yellow'|'blue'|'default')} [gridStyle = 'default'] container style. one of ContainerStyles. is 'default' by default
   * @param {String} [horizontalCellContentAlignment = HAlign.left] horizontal alignment. defaults to 'left'
   * @param {String} [verticalCellContentAlignment = VAlign.top] vertical alignment. defaults to 'top'
   * @param {String} [height] height for the field. one of this.Height
   * @param {Boolean} [separator = false] show separator(divider) on top. defaults to false
   * @param {String} [spacing] spacing for the field.
   * @param {String} [id] unique id for the Table
   * @param {Boolean} [isVisible = true] should show field. defaults to true.
   * @return {object} column set field.
   */
  table({
    columns,
    rows,
    firstRowAsHeader,
    showGridLines,
    gridStyle = this.ContainerStyles.default,
    horizontalCellContentAlignment = this.HAlign.left,
    verticalCellContentAlignment = this.VAlign.top,
    height,
    separator = false,
    spacing,
    id,
    isVisible = true,
  }) {
    return {
      type: "Table",
      columns,
      rows,
      firstRowAsHeader,
      showGridLines,
      gridStyle,
      horizontalCellContentAlignment,
      verticalCellContentAlignment,
      height,
      separator,
      spacing,
      id,
      isVisible,
    };
  }

  /**
   * Represents a cell within a row of a Table element.
   * Works in v1.5 and later
   * https://adaptivecards.io/explorer/TableCell.html
   *
   * @param {Array<object>} items elements to be embedded in the TableCell.
   * @param {object} [selectAction] action object on click.
   * @param {('grey'|'green'|'red'|'yellow'|'blue'|'default')} [style = 'default'] container style. one of ContainerStyles. is 'default' by default
   * @param {String} [verticalContentAlignment = VAlign.top] vertical alignment of content.
   * @param {Boolean} [bleed = false] determines whether the element should bleed through its parent's padding.
   * @param {String|Types.backgroundImage} [backgroundImage] background image for the TableCell.
   * @param {String} [minHeight] min height of the TableCell
   * @param {Boolean} [rtl = false] works on v1.5 and later, when true content in this Container should be presented right to left. defaults to false.
   * @return {object} TableCell container.
   */
  tableCell({
    items,
    selectAction,
    style = this.ContainerStyles.default,
    verticalContentAlignment = this.VAlign.top,
    bleed = false,
    backgroundImage,
    minHeight,
    rtl = false,
  }) {
    return {
      type: "TableCell",
      items,
      selectAction,
      style,
      verticalContentAlignment,
      bleed,
      backgroundImage,
      minHeight,
      rtl,
    };
  }
}

module.exports = new Containers();
