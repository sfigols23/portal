import "../index.css";
import Input from "./components/Input";
import Button from "./components/Button";

const Login = () => {

    const login_handler = () => {
        
    }

    const inputs = [
        {
            id: 1,
            label: "User Name",
            type: "text",
            required: true,
            placeholder: "hello@example.com"
        },
        {
            id: 2,
            label: "Password",
            type: "password",
            required: true,
            placeholder: "···············"
        },
    ];

    return(
        <div className="flex h-screen bg-red-500">
            <div className="m-auto bg-white rounded">
                <div>
                    <h1 className="text-center text-3xl p-8">VILAR RIBA</h1>
                </div>
                <div className="text-center p-8">
                    {inputs.map((items) => 
                        <Input key={items.id} type={items.type} label={items.label} required={items.required} placeholder={items.placeholder}/>
                    )}
                    <Button text="Entra" onClick={login_handler()}/>
                </div>
            </div>
        </div>
    );
}

export default Login;