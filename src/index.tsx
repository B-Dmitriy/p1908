import '07-shared/assets/styles/index.scss';
import '07-shared/config/i18n/i18n.config';
import { createRoot } from 'react-dom/client';
import { AppRouter } from '01-app/providers/router';
import { StoreProvider } from '01-app/providers/store';
import { ThemeProvider } from '07-shared/providers/themeProvider';

const root = createRoot(document.getElementById('root'));

root.render(<StoreProvider><ThemeProvider><AppRouter /></ThemeProvider></StoreProvider>);
