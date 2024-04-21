import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './Pages/EditEventPage.js';
import ErrorPage from './Pages/ErrorPage.js';
import EventsDetailPage, {
  Loader as eventDetailLoader,
  action as deleteEventAction,
} from './Pages/EventsDetailPage.js';
import EventsPage, { Loader as eventsLoader } from './Pages/EventsPage.js';
import EventsRootLayout from './Pages/EventsRoot.js';
import HomePage from './Pages/Homepage.js';
import NewEventPage from './Pages/NewEvent.js';
import RootLayout from './Pages/Root';
import { action as manipulateEventAction } from './components/EventForm.js';
import NewsletterPage, { action as newsletterAction } from './Pages/NewsLetter.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRootLayout />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventsDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
          },
        ],
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;