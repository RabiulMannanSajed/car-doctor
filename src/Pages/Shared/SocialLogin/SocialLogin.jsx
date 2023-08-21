import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center">
                <button className="btn btn-circle btn-outline">
                    G
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;