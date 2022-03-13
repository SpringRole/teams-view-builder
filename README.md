# @springrole/teams-view-builder

## Getting started

This is a simple package that can be used to create the blocks and views required to interact with users on any Teams Application.

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
        TeamsViewBuilder.Container.columnSet({
            columns: [
                column({
                    items: [
                        TeamsViewBuilder.Elements.textBlock({
                            text: "Hello World!",
                        })
                    ]
                }),
                column({
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

---

### License

@springrole/teams-view-builder is licensed under the [MIT License](https://github.com/SpringRole/teams-view-builder/blob/HEAD/LICENSE).
