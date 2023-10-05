interface IconButtonProps {
  className?: string;
  icon: string;
  alt?: string;
  onClick?: (value?: any) => void;
}

export function IconButton({ className, icon, alt, onClick }: IconButtonProps) {
  return (
    <img
      className={`${className} p-1 rounded cursor-pointer transition-all duration-150 hover:scale-105`}
      src={icon}
      alt={alt}
      onClick={onClick}
    />
  );
}
