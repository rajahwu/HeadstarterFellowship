// src/components/ui/dropdown-menu/DropdownMenu.jsx
import React from 'react';
import  Button  from '../../button';
import { CircleUser } from 'lucide-react';

export function DropdownMenu({ children }) {
  return <>{children}</>;
}

export function DropdownMenuTrigger({ children }) {
  return <>{children}</>;
}

export function DropdownMenuContent({ children, align }) {
  return (
    <div className={`dropdown-menu-content ${align}`}>
      {children}
    </div>
  );
}

export function DropdownMenuLabel({ children }) {
  return <div className="dropdown-menu-label">{children}</div>;
}

export function DropdownMenuSeparator() {
  return <div className="dropdown-menu-separator"></div>;
}

export function DropdownMenuItem({ children }) {
  return <div className="dropdown-menu-item">{children}</div>;
}
