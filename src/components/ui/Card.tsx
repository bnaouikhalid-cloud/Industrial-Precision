import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function Card({ children, className = '', noPadding = false }: CardProps) {
  return (
    <div className={`bg-surface-container-lowest rounded-xl ambient-shadow ${noPadding ? '' : 'p-6'} ${className}`}>
      {children}
    </div>
  );
}
