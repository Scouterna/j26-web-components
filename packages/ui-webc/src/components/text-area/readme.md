# scout-text-area

<!-- Auto Generated Below -->


## Properties

| Property      | Attribute     | Description                                                                                                                                                                                       | Type                        | Default     |
| ------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------- |
| `autofocus`   | `autofocus`   |                                                                                                                                                                                                   | `boolean`                   | `false`     |
| `disabled`    | `disabled`    |                                                                                                                                                                                                   | `boolean`                   | `undefined` |
| `form`        | `form`        |                                                                                                                                                                                                   | `string`                    | `undefined` |
| `label`       | `label`       |                                                                                                                                                                                                   | `string`                    | `undefined` |
| `maxLength`   | `max-length`  |                                                                                                                                                                                                   | `number`                    | `undefined` |
| `name`        | `name`        |                                                                                                                                                                                                   | `string`                    | `undefined` |
| `placeholder` | `placeholder` |                                                                                                                                                                                                   | `string`                    | `undefined` |
| `readOnly`    | `read-only`   |                                                                                                                                                                                                   | `boolean`                   | `undefined` |
| `required`    | `required`    |                                                                                                                                                                                                   | `boolean`                   | `undefined` |
| `rows`        | `rows`        |                                                                                                                                                                                                   | `number`                    | `3`         |
| `validate`    | --            | Custom validation function run on top of the implicit validation performed by the browser. Return a string with the validation message to mark the input as invalid, or null to mark it as valid. | `(value: string) => string` | `undefined` |
| `value`       | `value`       |                                                                                                                                                                                                   | `string`                    | `undefined` |


## Events

| Event              | Description                                     | Type                                                         |
| ------------------ | ----------------------------------------------- | ------------------------------------------------------------ |
| `_fieldId`         | Internal event used for form field association. | `CustomEvent<string>`                                        |
| `scoutBlur`        |                                                 | `CustomEvent<void>`                                          |
| `scoutInputChange` |                                                 | `CustomEvent<{ value: string; element: HTMLInputElement; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
