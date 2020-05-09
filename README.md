# use-scroll-to

A type safe React hook to handle scroll actions

## Example of usage:

```tsx
const divRef = React.useRef<HTMLDivElement>(null);
const scrollTo = useScrollTo(divRef);

return (
  <div>
    <div onClick={scrollTo} style={{ height: '500px' }} />
    <div style={{ height: '500px' }} />
    <div style={{ height: '500px' }} />
    <div ref={divRef} />
  </div>
);
```

## Example with options:

Options is an object with flowing props: `behavior`, `minus` and `plus`.

`behavior` have two options: `auto` and `smooth`, if this property has not been declared, it will be `smooth` by default.

`minus` and `plus`: are the number of pixels that must be added or reduced when the scroll is performed on the element.

All these properties are `optional`.

```tsx
const divRef = React.useRef<HTMLDivElement>(null);

const scrollToPlus = useScrollTo(divRef, { behavior: 'auto', plus: 100 });

const scrollToMinus = useScrollTo(divRef, { behavior: 'auto', minus: 100 });
```

## License

[MIT](https://github.com/deadkff01/use-scroll-to/blob/master/LICENSE)
