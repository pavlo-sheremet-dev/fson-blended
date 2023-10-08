import { nanoid } from 'nanoid';
import { createContext, useEffect, useState } from 'react';

export const MobileMenuContext = createContext({
  isOpen: false,
  toggle: () => {},
});

export const MobileMenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(p => !p);
  };

  return (
    <MobileMenuContext.Provider value={{ isOpen, toggle }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const ArrayHandlerContext = createContext({
  array: [],
  addItem: () => {},
  removeItem: () => {},
  updateItem: () => {},
});

export const ArrayHandlerProvider = ({
  children,
  initialState = [],
  storageKey = '',
}) => {
  const [array, setArray] = useState(
    () => JSON.parse(localStorage.getItem(storageKey)) ?? initialState
  );

  const addItem = item => {
    setArray(prev => [...prev, { id: nanoid(), ...item }]);
  };

  const removeItem = id => {
    setArray(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(array));
  }, [array, storageKey]);

  return (
    <ArrayHandlerContext.Provider value={{ array, addItem, removeItem }}>
      {children}
    </ArrayHandlerContext.Provider>
  );
};
