import React from "react";

function Child(props: any) {
  console.log("child render");

  return <>child: {props.text}</>;
}

export default React.memo(Child);
