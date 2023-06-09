export const ErrorFallback = ({
  componentStack,
  error
}: {
  error: Error;
  componentStack: string | null;
}) => (
  <div>
    <h1>{error.message || 'Application error'}</h1>
    <span>
      {componentStack != null ||
        'Oops, something went wrong. Please, contact developers'}
    </span>
  </div>
);

// TODO Change components appearance
