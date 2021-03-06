import React, { useEffect } from "react";
// import logo from "/assets/ic_launcher.png";
import LoginModal from "../components/LoginModal";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Constants from "../Constants";
import Store from "../Store";

const HomePage = ({ toggleLoggedInBar ,history}) => {
  const [passCode, changePassCode] = React.useState("");
  const [classId, setClassId] = React.useState("");
  const db = getFirestore();
  useEffect(()=>{
    history.push("/")
  },[])
  const handleOnSubmitPassCode = async () => {
    const classCodeDoc = await getDoc(getClassCodeRef());
    console.log("passCode :>> ", passCode);
    console.log("classCodeDoc :>> ", classCodeDoc);
    console.log("classCodeDoc.data :>> ", classCodeDoc.data());
    if (validateLogin(classCodeDoc)) {
      const newClassId = classCodeDoc.data()[passCode];
      setClassId(newClassId);
      console.log("passcode class id", classCodeDoc.data()[passCode]);
      console.log("classId :>> ", classId);
      console.log("submitted");
      toggleLoggedInBar(true, newClassId);
      Store.classId = newClassId;
      setTerm().then(() => {
        console.log("Store :>> ", Store.classId);
        history.push("/students");
      });
    } else {
      alert("Wrong class code");
    }
  };
  async function setTerm() {
    const adminDoc = doc(
      db,
      Constants.ADMIN_COLLECTION_PATH,
      Constants.TERM_INFO_DOCUMENT_NAME
    );
    const adminSnapShot = await getDoc(adminDoc);
    Store.term = adminSnapShot.data().term;
  }
  function getClassCodeRef() {
    const docRef = doc(
      db,
      Constants.PASSCODE_COLLECTION_PATH,
      Constants.CLASS_CODE_DOCUMENT_NAME
    );
    return docRef;
  }
  function validateLogin(snapShot) {
    if (snapShot.exists) {
      if (snapShot.data()[passCode]) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  return (
    <div className="homePage colorPrimary">
      <img
      src="./dist/assets/ic_launcher.png"
      width="auto"
      height="auto"
      className="centerHorizontal"
      />
      <LoginModal
        className="centerHorizontal flex mt-16"
        value={passCode}
        valueChangedHandler={changePassCode}
        onSubmit={handleOnSubmitPassCode}
      />

      <h2 className="font-semibold font-serif textColorAccent centerHorizontal">
        A PROJECT BY SET 2K21 FOR TEACHERS OF RANTYA HIGH SCHOOL.
      </h2>
      <h2 className=" font-semibold textColorAccent centerHorizontal">
        No Bad Vibes.
      </h2>
    </div>
  );
};

export default HomePage;
