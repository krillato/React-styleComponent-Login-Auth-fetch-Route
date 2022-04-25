import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (Component) => (props) => {
  const history = useNavigate();
  console.log("เรียกใช้งาน");
  useEffect(() => {
    (async () => {
      const token = await verifyToken();
      console.log("hello", token);
      if (token === "") {
        history("/Login");
      }
    })();
  }, []);

  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    fetch("http://localhost:3001/authen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "ok") {
          console.log("Status OK!!");
          //alert(data.decoded.role);
        } else {
          //ไม่มีการเข้าสู่ระบบ
          localStorage.removeItem("token");
          history("/Login");
        }
        console.log("Success: ", data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  return <Component {...props} />;
};
export default withAuth;
