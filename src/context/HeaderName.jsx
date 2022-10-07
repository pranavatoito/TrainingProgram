import { createContext, useState } from "react";
export const HeaderContext = createContext(null);
function HeaderNameContext({ children }) {
  const [name, setName] = useState("");
  return <HeaderContext.Provider value={{ name, setName }}>{children}</HeaderContext.Provider>;
}

export default HeaderNameContext;
