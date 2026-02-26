import './Loader.css';

const Loader = ({
  size = 'md',
  variant = 'primary',
  fullScreen = false,
  text = ''
}) => {
  const sizeClasses = {
    sm: 'loader-sm',
    md: 'loader-md',
    lg: 'loader-lg',
    xl: 'loader-xl',
  };

  const variantClasses = {
    primary: 'loader-primary',
    secondary: 'loader-secondary',
    accent: 'loader-accent',
    gradient: 'loader-gradient',
  };

  const loaderContent = (
    <div className={`loader-container ${fullScreen ? 'loader-fullscreen' : ''}`}>
      <div className={`loader ${sizeClasses[size]} ${variantClasses[variant]}`}>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-ring"></div>
        <div className="loader-core"></div>
      </div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );

  return loaderContent;
};

export default Loader;
