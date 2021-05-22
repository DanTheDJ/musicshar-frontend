import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginForm from '/src/components/LoginForm';

const Home = ({ user }) => {

    if(!!user)
    {

        return <Redirect to="/dashboard"></Redirect>;

    }

    return (
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">

            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden sm:ml-3">
                <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left">
                    
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 mr-2">
                    Login
                    </span>
                    to the party
                </h1>
                <LoginForm></LoginForm>
            </div>
            <div className="flex flex-col w-full xl:w-1/5 justify-center lg:items-start overflow-y-hidden">&nbsp;</div>
            <div className="mx-auto md:pt-16">
                <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
                    Don't have an account yet?</p>
                    <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                        <Link to="/auth/register">
                            <button
                            className="text-xl bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-4 px-6 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                            type="button">
                                Create An Account
                            </button>
                        </Link>
                    </div>
                </div>
            <div className="flex flex-col w-full xl:w-1/5 justify-center lg:items-start overflow-y-hidden sm:ml-3">
                <div className="flex items-center justify-between pt-4">
                    
                </div>
            
            </div>
        </div>
    );

};

const mapStateToProps = state => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(Home);