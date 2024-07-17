import Auth from "./Auth";

const Login = () => {
    return (
        <Auth>
            <div className="px-4">
            <p className="text-center pt-6 pb-3">Des articles qui font sourire et de l'argent à gagner !</p>
                <form className="flex flex-col gap-3 my-4">
                    <input type="email" name="email" placeholder="Email" className="p-2 border rounded"/>
                    <input type="password" name="password" placeholder="Mot de passe" className="p-2 border rounded"/>
                    <p className="text-blue-900 text-[13px]">Mot de passe oublie ?</p>
                    <button type="button" className="bg-blue-900 text-white rounded py-2">Je me connecte</button>
                </form>
             </div>
        </Auth>
    );
}

export default Login;
