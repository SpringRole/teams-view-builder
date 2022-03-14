class Entities {
  /**
   * The method generates the mention entity. It works in collaboration with Elements.textBlock
   *
   * @param {String} userName name of the user being tagged
   * @param {String} userId user id / objectId of the user being tagged
   * @returns {object} mention entity
   */
  tag(userName, userId) {
    return {
      type: "mention",
      text: `<at>${userName}</at>`,
      mentioned: {
        id: userId,
        name: userName,
      },
    };
  }

  /**
   * The method surrounds the string passed to it with <at></at> tags and returns
   *
   * @param {String} userName name of the user being tagged
   * @returns {String} something --> <at>something</at>
   */
  tagify(userName) {
    return `<at>${userName}</at>`;
  }
}

module.exports = Entities();
