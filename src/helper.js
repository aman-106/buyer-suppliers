const baseurl = "http://127.0.0.1:8000/";
import { useEffect, useState } from "react";

function useLoggedUserState() {
  const [logged, setLogged] = useState(function () {
    // get logged or not
    return false;
  });

  return logged;
}

export { baseurl, useLoggedUserState };
