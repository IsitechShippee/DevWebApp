import './Login.css';

function Login() {

    const CreateAccount = () => {
        document.getElementsByClassName('Connection')[0].style.display = "none"
        document.getElementsByClassName('Inscription')[0].style.display = "flex"
    }

    return (
        <>
            <div className="Login">
                <div className="Connection">
                    <h2>Connexion</h2>
                    <div className="Form_Login">
                        <div className="Mail">
                            <label>Mail</label>
                            <input />
                        </div>
                        <div className="Password">
                            <label>Mot de passe</label>
                            <input />
                        </div>
                        <div className="Valider_Form">
                            <button>Valider</button>
                            <p onClick={() => CreateAccount()}>Créer un compte</p>
                        </div>
                    </div>
                </div>
                <div className="Inscription">
                    <h2>Inscription</h2>
                    <div className="Form_Inscription">
                        
                    </div>
                </div>
            </div>
        </>
    );

}

export default Login;