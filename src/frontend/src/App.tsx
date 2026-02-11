import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import LandingPage from './pages/LandingPage';
import MoodPage from './pages/MoodPage';

// Root route
const rootRoute = createRootRoute({
  component: () => <div id="router-outlet" />,
});

// Landing page route
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});

// Dynamic mood page route
const moodRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/mood/$slug',
  component: MoodPage,
});

// 404 catch-all route
const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '*',
  component: () => (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 p-4">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Page Not Found</h1>
        <p className="mb-6 text-gray-600">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="inline-block rounded-full bg-gradient-to-r from-pink-400 to-purple-400 px-6 py-3 text-white transition-transform hover:scale-105"
        >
          Go Back Home
        </a>
      </div>
    </div>
  ),
});

const routeTree = rootRoute.addChildren([indexRoute, moodRoute, notFoundRoute]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
