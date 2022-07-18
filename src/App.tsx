import OAuthProvider from '@/providers/OAuthProvider';
import ReactQueryClientProvider from '@/providers/ReactQueryClientProvider';

import Router from './Router';

function App() {
  return (
    <div className="light">
      <ReactQueryClientProvider>
        <OAuthProvider>
          <Router />
        </OAuthProvider>
      </ReactQueryClientProvider>
    </div>
  );
}

export default App;
