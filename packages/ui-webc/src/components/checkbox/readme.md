# scout-checkbox

<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description                                                                                                                | Type      | Default     |
| ---------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `ariaLabelledby` | `aria-labelledby` | Use this prop if you need to connect your checkbox with another element describing its use, other than the property label. | `string`  | `undefined` |
| `checked`        | `checked`         |                                                                                                                            | `boolean` | `false`     |
| `disabled`       | `disabled`        |                                                                                                                            | `boolean` | `false`     |
| `label`          | `label`           |                                                                                                                            | `string`  | `undefined` |
| `name`           | `name`            |                                                                                                                            | `string`  | `undefined` |
| `value`          | `value`           |                                                                                                                            | `string`  | `undefined` |


## Events

| Event          | Description                                     | Type                                                            |
| -------------- | ----------------------------------------------- | --------------------------------------------------------------- |
| `_fieldId`     | Internal event used for form field association. | `CustomEvent<string>`                                           |
| `scoutChecked` |                                                 | `CustomEvent<{ checked: boolean; element: HTMLInputElement; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
