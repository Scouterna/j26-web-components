# scout-bottom-bar-item



<!-- Auto Generated Below -->


## Overview

A bottom bar item used within the bottom bar for navigation. Should not be
used outside of a bottom bar.

## Properties

| Property             | Attribute | Description                                                                                            | Type                 | Default     |
| -------------------- | --------- | ------------------------------------------------------------------------------------------------------ | -------------------- | ----------- |
| `active`             | `active`  | Whether the item is currently active. Should be set to true when the item represents the current page. | `boolean`            | `undefined` |
| `href`               | `href`    | An optional link to navigate to when the item is clicked. Only used when `type` is set to "link".      | `string`             | `undefined` |
| `icon` _(required)_  | `icon`    | An icon to display above the label. Must be an SVG string.                                             | `string`             | `undefined` |
| `label` _(required)_ | `label`   | The label to display below the icon.                                                                   | `string`             | `undefined` |
| `type`               | `type`    | The type of the bottom bar item, either a button or a link.                                            | `"button" \| "link"` | `"button"`  |


## Events

| Event        | Description | Type                |
| ------------ | ----------- | ------------------- |
| `scoutClick` |             | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
