# @springrole/teams-view-builder

## Getting started

This is a simple package that can be used to create the blocks and views required to interact with users on any Microsoft Teams Application.

### Installation

```console
 npm install --save @springrole/teams-view-builder
```

---

### Usage

#### Render a Text Block in an adaptive card

```javascript
const TeamsViewBuilder = require("@springrole/teams-view-builder");

renderTextBlock() {
    const body = [
        TeamsViewBuilder.Elements.textBlock({
            text: "Hello World!",
        })
    ]
    return TeamsViewBuilder.Cards.adaptiveCard({
        body
    })
}

// OR

const { Elements, Cards } = require("@springrole/teams-view-builder");

renderTextBlock() {
    const body = [
        Elements.textBlock({
            text: "Hello World!",
        })
    ]
    return Cards.adaptiveCard({
        body
    })
}
```

#### Render an Image in an adaptive card

```javascript
const TeamsViewBuilder = require("@springrole/teams-view-builder");

renderImage() {
    const body = [
        TeamsViewBuilder.Elements.image({
            url: "https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg",
            altText: "Matt Hidinger",
            size: TeamsViewBuilder.Elements.ImageSizes.small
        })
    ]
    return TeamsViewBuilder.Cards.adaptiveCard({
        body
    })
}
```

#### Render a ColumnSet in an adaptive card

```javascript
const TeamsViewBuilder = require("@springrole/teams-view-builder");

renderColumnSet() {
    const body = [
        TeamsViewBuilder.Containers.columnSet({
            columns: [
                TeamsViewBuilder.Containers.column({
                    items: [
                        TeamsViewBuilder.Elements.textBlock({
                            text: "Hello World!",
                        })
                    ]
                }),
                TeamsViewBuilder.Containers.column({
                    items: [
                        TeamsViewBuilder.Elements.image({
                            url: "https://pbs.twimg.com/profile_images/3647943215/d7f12830b3c17a5a9e4afcc370e3a37e_400x400.jpeg",
                            altText: "Matt Hidinger",
                            size: TeamsViewBuilder.Elements.ImageSizes.small
                        })
                    ]
                })
            ]
        })
    ]
    return TeamsViewBuilder.Cards.adaptiveCard({
        body
    })
}
```

#### Tag a user in the text block of an adaptive card

```javascript
const TeamsViewBuilder = require("@springrole/teams-view-builder");

tagUserInTextBlock(userName, userId) {
    const body = [
        TeamsViewBuilder.Elements.textBlock({
            text: `Hello <@${userName}>`,
        })
    ]
    return TeamsViewBuilder.Cards.adaptiveCard({
        body,
        entities: [
            TeamsViewBuilder.Entity.tag(userName, userId)
        ]
    })
}

// OR

tagUserInTextBlock(userName, userId) {
    const body = [
        TeamsViewBuilder.Elements.textBlock({
            text: `Hello ${TeamsViewBuilder.Entity.tagify(userName)}`,
        })
    ]
    return TeamsViewBuilder.Cards.adaptiveCard({
        body,
        entities: [
            TeamsViewBuilder.Entity.tag(userName, userId)
        ]
    })
}
```

#### Render a Text Block with Action Buttons in an adaptive card

```javascript
const TeamsViewBuilder = require("@springrole/teams-view-builder");

renderTextBlockWithActions() {
    const body = [
        TeamsViewBuilder.Elements.textBlock({
            text: "Hello World!",
        })
    ]

    const actions = [
        TeamsViewBuilder.Actions.submit({
            title: "Cancel",
            style: TeamsViewBuilder.Actions.ActionStyles.danger,
            data: {
                value: 'Cancel'
            }
        }),
        TeamsViewBuilder.Actions.openUrl({
            title: "Open Link",
            style: TeamsViewBuilder.Actions.ActionStyles.primary,
            url: "https://teams.microsoft.com/l/entity/ABCDE-12345-SAMPLE/tab"
        })
    ]

    return TeamsViewBuilder.Cards.adaptiveCard({
        body,
        actions
    })
}

// OR

renderTextBlockWithActions() {
    const body = [
        TeamsViewBuilder.Elements.textBlock({
            text: "Hello World!",
        }),
        TeamsViewBuilder.Containers.actionSet({
            actions: [
                TeamsViewBuilder.Actions.submit({
                    title: "Cancel",
                    style: TeamsViewBuilder.Actions.ActionStyles.danger,
                    data: {
                        value: 'Cancel'
                    }
                }),
                TeamsViewBuilder.Actions.openUrl({
                    title: "Open Link",
                    style: TeamsViewBuilder.Actions.ActionStyles.primary,
                    url: "https://teams.microsoft.com/l/entity/ABCDE-12345-SAMPLE/tab"
                })
            ]
        })
    ]
    return TeamsViewBuilder.Cards.adaptiveCard({
        body
    })
}
```

#### Render Select Dropdown in an adaptive card

```javascript
const TeamsViewBuilder = require("@springrole/teams-view-builder");

renderSelectDropDown() {
    const choices = [
        TeamsViewBuilder.Input.choice({
            title: "choice 1",
            value: "1"
        }),
        TeamsViewBuilder.Input.choice({
            title: "choice 2",
            value: "2"
        })
    ]

    const body = [
        TeamsViewBuilder.Input.select({
            choices,
            placeholder: 'Select a value',
            wrap: true,
            spacing: TeamsViewBuilder.Input.Spacing.small,
            value: 'value',
            id: 'selectDropDown'
        })
    ]

    return TeamsViewBuilder.Cards.adaptiveCard({
        body
    })
}
```

---

### License

@springrole/teams-view-builder is licensed under the [MIT License](https://github.com/SpringRole/teams-view-builder/blob/HEAD/LICENSE).
