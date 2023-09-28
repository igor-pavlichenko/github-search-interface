import { render } from '@testing-library/react';
import { describe, it } from 'vitest';

import App from './App';

describe('App.tsx', () => {
  it('should pass smoke test', () => {
    render(<App />);
  });
});
