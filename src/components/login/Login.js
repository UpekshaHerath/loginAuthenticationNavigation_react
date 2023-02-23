import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  //   const loginAPI = "https://tararoutray.com/demo/react-auth/login.php";
  const navigate = useNavigate();

  console.log(userID);
  console.log(password);

  const submitLoginForm = (event) => {
    event.preventDefault();
    const btnPointer = document.querySelector("#login-btn");
    btnPointer.innerHTML = "Please wait..";
    btnPointer.setAttribute("disabled", true);
    try {
      btnPointer.innerHTML = "Login";
      btnPointer.removeAttribute("disabled");
      if (userID == "userID" && password == "1234") {
        setTimeout(() => {
            navigate("/app");
          }, 500);
        
      } else {
        alert("Unable to login. Please try after some time.");
        return;
      }
    } catch (error) {
      btnPointer.innerHTML = "Login";
      btnPointer.removeAttribute("disabled");
      alert("Oops! Some error occured.");
    }
    //     axios
    //       .post(loginAPI, formDataJSON)
    //       .then((response) => {
    //         btnPointer.innerHTML = "Login";
    //         btnPointer.removeAttribute("disabled");
    //         const data = response.data;
    //         const token = data.token;
    //         if (!token) {
    //           alert("Unable to login. Please try after some time.");
    //           return;
    //         }
    //         localStorage.clear();
    //         localStorage.setItem("user-token", token);
    //         setTimeout(() => {
    //           navigate("/");
    //         }, 500);
    //       })
    //       .catch((error) => {
    //         btnPointer.innerHTML = "Login";
    //         btnPointer.removeAttribute("disabled");
    //         alert("Oops! Some error occured.");
    //       });
  };
  return (
    <React.Fragment>
      <Container className="my-5">
        <h2 className="fw-normal mb-5">Login</h2>
        <Row>
          <Col md={{ span: 6 }}>
            <Form id="loginForm" onSubmit={submitLoginForm}>
              <FormGroup className="mb-3">
                <FormLabel htmlFor={"login-username"}>User ID</FormLabel>
                <input
                  type={"text"}
                  onChange={(e) => setUserID(e.target.value)}
                  className="form-control"
                  id={"login-username"}
                  name="username"
                  required
                />
              </FormGroup>
              <FormGroup className="mb-3">
                <FormLabel htmlFor={"login-password"}>Password</FormLabel>
                <input
                  type={"password"}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id={"login-password"}
                  name="password"
                  required
                />
              </FormGroup>
              <Button type="submit" className="btn-success mt-2" id="login-btn">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Login;
