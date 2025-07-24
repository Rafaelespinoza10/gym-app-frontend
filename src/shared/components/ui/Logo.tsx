
interface LogoProps {
    width?: number;
    height?: number;
    className?: string;
  }

  
export const Logo = ({
    width = 40,
    height = 40,
    className = '',
  }: LogoProps) => {
    return (
    <img
        src="/images/gym-logo.png"
        width={width}
        height={height}
        className={className}
    />
    );
  };
  