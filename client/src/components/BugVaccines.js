import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import BoxShadow from "./BoxShadow";
import Bug from "./Bug";
import Vaccine from "./Vaccine";
import VaccineNew from "./VaccineNew";

const BugVaccines = (props) => {
  const [vaccines, setVaccines] = useState([]);

  const location = useLocation();
  console.log("location: ", location);
  const { bug } = location.state;

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      // you can do multiple axios calls if we want to get bug
      // let bugRes = await axios.get(`/api/bugs/${bug.id}`);
      let res = await axios.get(`/api/bugs/${bug.id}/vaccines`);
      setVaccines(res.data);
    } catch (err) {
      alert("error getting data");
    }
  };

  const renderVaccines = () =>
    vaccines.map((v) => <Vaccine key={v.id} {...v} />);

  // const renderVaccines = () => {
  //   return vaccines.map((v) => {
  //     return <Vaccine key={v.id} {...v} />;
  //   });
  // };
  const addVaccine = (vaccine) => {
    setVaccines([vaccine, ...vaccines]);
  };

  return (
    <BoxShadow header="Vaccines">
      <VaccineNew bugId={bug.id} addVaccine={addVaccine} />
      {renderVaccines()}
    </BoxShadow>
  );
};

export default BugVaccines;
