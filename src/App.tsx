import ReactQueryClientProvider from '@/providers/ReactQueryClientProvider';

import Router from './Router';

function App() {
  return (
    <div className="light">
      <ReactQueryClientProvider>
        <Router />
      </ReactQueryClientProvider>
    </div>
  );
}

export default App;
