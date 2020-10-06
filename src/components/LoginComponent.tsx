import React, {useState} from "react";
import {Button, TextField} from "@material-ui/core";

function LoginComponent(props:any){
	const [logged, setLogged] = useState(false);

		if(logged) {
			return <div>
				Hello, admin!
			</div>;
		} else {
			return <div>
				<TextField required id="standard-required" label="Required" defaultValue="type user" />
				<TextField
					id="standard-password-input"
					label="Password"
					type="password"
					autoComplete="current-password"
				/>
				<Button variant="contained" color="primary" onClick={()=>{
					console.log("click pe log");
					setLogged(true);}
				}>
					Login
				</Button>
			</div>;
		}
}

export default LoginComponent;
