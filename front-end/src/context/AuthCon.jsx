import { createContext, useEffect, useState, useContext} from "react";
import { supabase } from "../supabaseClient";
const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const [session, setSession] = useState(undefined);




    // sign up user
    const signUpUser = async (email, password, username, displayName) => {
        const { data, error } = await supabase.auth.signUp(
        {
            email: email,
            password: password,
            options: {
                data: {
                    username: username,
                    displayName: displayName,
                }
            }
        })

        if (error){
            console.error("Sign-up error: ", error);
            return {success: false, error};
        }

        return {success: true, data};
    };

    // sign in user

    const signInUser = async (email, password) =>{
        try{
            const {data, error} = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            if (error){
                console.error("sign-in error: ", error);
                return {success: false, error};
            }
            console.log("sign in success");
            
            const {data: userExists, error: fetchingError} = await supabase.from('clients').select().eq('ID', data.user.id).maybeSingle();
            
            if (!userExists){
                const {er} = await supabase.from('clients').insert({
                    ID: data.user.id,
                    username: data.user.user_metadata.username,
                    displayName: data.user.user_metadata.displayName,
                    email: data.user.email,
                })

                if (er){
                    console.log("insert-database error: ", er.message)
                }
            }
            if (fetchingError){
                console.log("fetch error: ", fetchingError.message);
            }

            return {success: true, data};
        } catch (error){
            console.error("while trying sign-in error: ", error)
        }
    }



    useEffect(()=>{
        supabase.auth.getSession().then(({data: session})=>{
            setSession(session);
        });

        supabase.auth.onAuthStateChange((_event, session)=>{
            setSession(session);
        })
    },[])


    // sign out user
    const signOutUser = () =>{
        const {error} = supabase.auth.signOut();
        if (error){
            console.log("sign-out error: ", error);
        }
    }

    return(
        <AuthContext.Provider value={{session, signUpUser, signInUser, signOutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}