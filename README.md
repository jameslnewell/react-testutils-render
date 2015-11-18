# react-testutils-render

A lite wrapper for shallow rendering React components.

## Installation

    npm install --save react-testutils-render

## Usage

```javascript

it('should increment the count by 1 when called', () => {
  const rendered = render(<Counter/>);
  rendered.component.handleIncrement();
  expect(rendered.component.state).to.have.property('count', 1);
});

it('should render the count', () => {
  expect(render(<Counter/>).element).to.deep.equal(
    <div>
      Count: {0}.
      <button onClick={() => {}}>Increment</button>
    </div>
  );
});

```

## Methods

### render(element) : object

Render the element as a virtual-dom tree, one level deep.

- `element`- A React virtual-dom element

## License

The MIT License (MIT)

Copyright (c) 2015 James Newell
