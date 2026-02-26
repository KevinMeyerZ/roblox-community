import { Link } from 'react-router-dom';
import { Button } from '../components/common';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gradient-vibrant mb-4">404</h1>
        <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
        <p className="text-secondary mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <Button variant="primary" size="lg">
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
