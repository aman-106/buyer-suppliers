const baseurl = "http://127.0.0.1:8000/";
import { useEffect, useState } from "react";

function useLoggedUserState() {
  const [logged, setLogged] = useState(function () {
    // get logged or not
    if(localStorage.getItem("uuid")){
      // return {
      //   uuid : 'be064170-c286-46d0-af9a-0ec2c3cf5c23'
      // }
      return false
    }
    return false;
  });

  return logged;
}

export { baseurl, useLoggedUserState };
