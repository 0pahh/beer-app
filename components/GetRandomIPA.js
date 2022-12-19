import React, { useState, useEffect } from "react";

import { ActivityIndicator } from "react-native";

import IPA from "./IPA";

const GetRandomIPA = () => {
  const [randomIPA, setRandomIPA] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadRandomIPA();
  }, []);

  const loadRandomIPA = () => {
    setLoading(true);
    return fetch("https://api.punkapi.com/v2/beers/random")
      .then((response) => {
        console.log(response);
        setRandomIPA(response);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!randomIPA) return <ActivityIndicator size="small" color="orange" />;
  return <IPA IPA={randomIPA} />;
};

export default GetRandomIPA;
