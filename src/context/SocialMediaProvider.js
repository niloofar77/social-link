import React, { createContext, useState, useContext } from "react";
export const SocialMediaContext = createContext();

export const SocialMediaProvider = ({ children }) => {
  const [links, setLinks] = useState([]);

  const addLink = (link) => {
    setLinks([...links, link]);
  };

  const deleteLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const editLink = (index, newLink) => {
    const updatedLinks = links.map((link, i) => (i === index ? newLink : link));
    setLinks(updatedLinks);
  };

  return (
    <SocialMediaContext.Provider
      value={{ links, addLink, deleteLink, editLink }}
    >
      {children}
    </SocialMediaContext.Provider>
  );
};

export const useSocialMedia = () => useContext(SocialMediaContext);
