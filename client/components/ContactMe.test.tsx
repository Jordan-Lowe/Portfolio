import { render, fireEvent } from '@testing-library/react';
import ContactMe from './ContactMe';

test('renders ContactMe component and toggles form visibility', () => {
  const { getByAltText, getByPlaceholderText } = render(<ContactMe isActive={false} onToggle={() => {}} />);

  // Initially form should not be visible
  expect(getByPlaceholderText("Name")).not.toBeVisible();
  
  // Simulate form toggle
  fireEvent.click(getByAltText("Contact Me logo"));

  // Now form should be visible
  expect(getByPlaceholderText("Name")).toBeVisible();
});

test('checks form inputs', () => {
  const { getByPlaceholderText } = render(<ContactMe isActive={true} onToggle={() => {}} />);
  
  expect(getByPlaceholderText("Name")).toBeInTheDocument();
  expect(getByPlaceholderText("Email")).toBeInTheDocument();
  expect(getByPlaceholderText("Cell Number")).toBeInTheDocument();
  expect(getByPlaceholderText("Your Enquiry")).toBeInTheDocument();
});

// You can add more tests...
