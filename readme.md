# svelte-quill

![NPM](https://img.shields.io/npm/l/svelte-quill)

A package that contains a single action to be used on an element where you want to use [QuillJS](https://quilljs.com/).

## Demos

[🌱 Simple demo](https://svelte.dev/repl/0cc84ebc0b114dd7ab5b20b87bbee486?version=3.19.1)

## Installation

```bash
yarn add svelte-quill
```

**Note:** Install as a dev dependency (yarn add svelte-select --dev) if using [Sapper](https://sapper.svelte.dev/) to avoid a SSR error.

## Usage

Simply use the action and listen to events using the `text-change` event. The event details contain the `html` (innerHTML, conveniently used with Sveltes `@html` directive) and `text` (a string of the contents).

```html
<script>
  import { quill } from "svelte-quill";

  const options = { ... }

  let content;
</script>

<div class="editor" use:quill={options} on:text-change={e => content =
e.detail}/>
```

## Options

```javascript
{
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline", "strike"],
      ["link", "code-block"]
    ]
  },
  placeholder: "Type something...",
  theme: "snow"
}
```

To customize you can pass in any of these options like so:

```javascript
{
  placeholder: "Something Custom?";
}
```

### Styling

Styling is done using the regular Quill CSS. You can either import them using ´<svelte:head>´ or add the css to some global.css file.

Here is an example:

```html
<svelte:head>
	<link href="//cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet">
</svelte:head>
```

You can style a component by overriding [the available CSS variables](/docs/theming_variables.md).

```html
<script>
  import Select from "svelte-select";

  const items = ["One", "Two", "Three"];
</script>

<style>
  .themed {
    --border: 3px solid blue;
    --borderRadius: 10px;
    --placeholderColor: blue;
  }
</style>

<div class="themed">
  <h2>Theming</h2>
  <select {items}></select>
</div>
```
