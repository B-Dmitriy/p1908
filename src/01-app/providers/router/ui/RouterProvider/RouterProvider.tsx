import { RouterProvider } from 'react-router-dom';
import { router } from '../../lib/routes';

export const AppRouter = () => {
    return <RouterProvider router={router} />;
};
