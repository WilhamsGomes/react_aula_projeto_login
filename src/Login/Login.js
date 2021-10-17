import React from "react";
import "./Login.css"
import logo from './login.svg';

export default function Login(){


    function esqueceuS(){
        alert("Sua senha será redefinida")
    }

    function logando(){
        alert("Você será redirecionado")
    }

    return (
        <div>
            <div className="conteiner">
                <img src={logo} alt="imagem-login" className="imagem"/>
                <form className="forms">
                    <p className="title_login">Login</p>
                    <input type="text" className="email" name="email" placeholder="Digite seu email"/>
                    <input type="password" className="senha" name="senha" placeholder="Digite sua senha"/>
                    <br></br>
                    <button type="button" className="button" onClick={() => logando()}>Login</button>
                    <p className="esqueceuSenha" onClick={() => esqueceuS()}>Esqueceu sua senha/login?</p>
                </form>
            </div>
        </div>
    );
}