import React from 'react';
import { useRef } from 'react';

import Tutors from 'components/Tutors';
import University from 'components/University/University';

export default function UniversityPage() {
  const isTrueRef = useRef(true);
  console.log(isTrueRef);

  const inputRef = useRef(null);
  console.dir(inputRef);

  function changeIsTrueRef() {
    if (!isTrueRef?.current) {
      return false;
    }

    isTrueRef.current = false;
  }

  return (
    <>
      {/* <input id="inputForRef" ref={inputRef} />
      <button onClick={() => changeIsTrueRef()}> Toggle Value </button> */}
      <h1 className="page-title">University Information</h1>
      <University />
      <Tutors />
    </>
  );
}
