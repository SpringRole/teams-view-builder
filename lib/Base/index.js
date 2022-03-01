class Base {
  /**
   * Enum for layout spacing
   * @enum {Readonly<{string}>}
   */
  Spacing = Object.freeze({
    small: "small",
    medium: "medium",
    large: "large",
    xl: "extraLarge",
    padding: "padding",
  });

  /**
   * Enum for layout horizontal alignment
   * @enum {Readonly<string>}
   */
  HAlign = Object.freeze({
    left: "left",
    center: "center",
    right: "right",
  });

  /**
   * Enum for layout vertical alignment
   * @enum {Readonly<string>}
   */
  VAlign = Object.freeze({
    top: "top",
    center: "center",
    bottom: "bottom",
  });

  /**
   * Enum for layout height
   * @enum {Readonly<string>}
   */
  Height = Object.freeze({
    auto: "auto",
    stretch: "stretch",
  });

  /**
   * Enum for layout width
   * @enum {Readonly<string>}
   */
  Width = Object.freeze({
    auto: "auto",
    stretch: "stretch",
  });
}

module.exports = Base;
