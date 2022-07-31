// import OAuthProvider from '@/providers/OAuthProvider';
import ReactQueryClientProvider from '@/providers/ReactQueryClientProvider';
import { useGitHubOAuthQuery } from '@/queries/oauth';

import Router from './Router';

function AppContent() {
  useGitHubOAuthQuery();

  return (
    <div className="light">
      <Router />
    </div>
  );
}

const App = () => (
  <ReactQueryClientProvider>
    <AppContent />
  </ReactQueryClientProvider>
);

export default App;
