import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useScrollTo from '../.';

const App = () => {
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
};

ReactDOM.render(<App />, document.getElementById('root'));
