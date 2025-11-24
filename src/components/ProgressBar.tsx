interface ProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div 
      className="fixed top-0 left-0 h-2 bg-green-600 z-50 transition-all duration-500" 
      style={{ width: `${progress}%` }}
    />
  );
};

export default ProgressBar;