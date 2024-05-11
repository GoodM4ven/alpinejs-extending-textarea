<div align="center">
    بسم الله الرحمن الرحيم
</div>

# AlpineJS Extending Textarea
An [AlpineJS](https://alpinejs.dev/) **plugin** to ensure that the text-area expands as it has more input than its height can fit.

Until `form-sizing` CSS attribute is [resolved](https://github.com/w3c/csswg-drafts/issues/7542), this is a swift solution for now.


## Installation

1. Use your favorite package manager to install the dependency in your [TALL](https://tallstack.dev) project:

   ```bash
   bun add alpinejs-extending-textarea
   ```

2. Then initialize the Alpine plugin in your flow JS like this:

   ```js
   // import { Livewire, Alpine } from '../../../vendor/livewire/livewire/dist/livewire.esm';
   import ExtendingTextarea from 'alpinejs-extending-textarea';

   Alpine.plugin(ExtendingTextarea);

   // Alpine.start();
   ```


## Usage

- Simply just add `x-extending-textarea` to your `textarea` element and you're good to go!

  ```html
  <textarea x-extending-textarea></textarea>
  ```


## Support

Support ongoing package maintenance as well as the development of **other projects** through [sponsorship](https://github.com/sponsors/GoodM4ven) or one-time [donations](https://github.com/sponsors/GoodM4ven?frequency=one-time&sponsor=GoodM4ven) if you prefer.

And may Allah accept your strive; aameen.

### License

This package is open-sourced software licensed under the [MIT license](LICENSE.md).

### Credits

- [ChatGPT](https://chat.openai.com)
- [Graphite](https://graphite.dev)
- [AlpineJS](https://alpinejs.dev)
- [The Contributors](../../contributors)
- All the [frontend packages](./package.json#24) and services this package relies on...
- And the generous individuals that we've learned from and been supported by throughout our journey...

### Inspiration

- [AlpineHooks](https://github.com/ryangjchandler/alpine-hooks)


<div align="center">
   <br>والحمد لله رب العالمين
</div>
