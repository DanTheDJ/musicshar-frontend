import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import SearchInput from '/src/components/SearchInput/Index';

const Dashboard = ({ user }) => {

    const [search, setSearch] = useState(null);

    function updateSearchQuery(newValue) {

        setSearch(newValue);

    };

    return (
        <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">


            <Link to="/room/create" class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out" type="submit">
            Start Room
            </Link>

            <SearchInput handleChange={updateSearchQuery} value={search}></SearchInput>
            
        </div>
    );

};

const mapStateToProps = state => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(Dashboard);