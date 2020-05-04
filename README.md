# use-scroll-to

A type safe React hook to handle scroll actions

Example of usage:

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

## License

[MIT](https://github.com/deadkff01/use-scroll-to/blob/master/LICENSE)
