// import { createContext, useEffect, useState } from "react";

// export const CounterContext = createContext();

// export function CounterProvider({ children }) {
//     const [counter, setCounter] = useState(0);
//     useEffect(() => {
//       const storedCounter = JSON.parse(localStorage.getItem("cart"))?.length || 0;
//       setCounter(storedCounter);
//     }, []);
//     return (
//         <CounterContext.Provider value={{ counter, setCounter }}>
//             {children}
//         </CounterContext.Provider>
//     );
// }












import { createContext, useEffect, useState } from "react";

export const CounterContext = createContext();

export function CounterProvider({ children }) {
  const [counter, setCounter] = useState(0);
  const [queryKey, setQueryKey] = useState(Date.now()); // Query Key لتحديث البيانات

  useEffect(() => {
    const storedCounter = JSON.parse(localStorage.getItem("cart"))?.reduce((acc, item) => acc + item.quantity, 0) || 0;
    setCounter(storedCounter);
  }, [queryKey]);
  

  const updateCounter = () => {
    setQueryKey(Date.now()); // تغيير queryKey لتحديث البيانات
  };

  return (
    <CounterContext.Provider value={{ counter, setCounter, updateCounter }}>
      {children}
    </CounterContext.Provider>
  );
}


