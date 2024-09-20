import React, { useEffect } from "react";

interface Props {
  children: React.ReactNode
  title?: string
}


export function Layout({ children, title }: Props) {
  useEffect(() => {
    document.title = title ? `${title} | Github Challenge` : 'Github Challenge';

    document.addEventListener('wheel', (event: any) => {
      if (event.target.type === 'number') {
        event.preventDefault();
      }
    }, { passive: false });
  }, []);


  return (
    <div style={{ height: '100%' }}>
      <div className="layout">
        { children }
      </div>
    </div>
  );
}
