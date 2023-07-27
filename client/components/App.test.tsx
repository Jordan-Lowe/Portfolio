import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

const server = setupServer(
  rest.get('/api/v1/users', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, language_name: "Java", language_info: "Test Java language_info" }]))
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders App component with loading state', () => {
  const { getByText } = render(<App />);
  expect(getByText('Loading...')).toBeInTheDocument();
});

test('renders App component with error state', async () => {
  server.use(
    rest.get('/api/users', (req, res, ctx) => {
      return res(ctx.status(500))
    })
  );

  render(<App />);

  await waitFor(() => screen.getByText(/An error has occurred/i));
});

test('renders App component with fetched data', async () => {
  render(<App />);
  
  await waitFor(() => screen.getByText(/Java/i));
});

test('renders App component without selected language', async () => {
  render(<App />);
  
  await waitFor(() => screen.getByText(/No language selected/i));
});

// You can add more tests...
