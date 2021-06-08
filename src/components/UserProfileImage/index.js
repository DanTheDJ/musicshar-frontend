import React from 'react';

var classnames = require('classnames');

const UserProfileImage = ({ user, classes }) => {

    //return null;

    const imageClasses = [
        'h-10',
        'w-10',
        'rounded-full'
    ];

    if(!!user)
    {

        return <img class={classnames(imageClasses, classes)} src={`https://eu.ui-avatars.com/api/?name=${user.name.replace(' ', '+')}`} title={`${user.name} (${user.username})`} />;

    }

    return null;    

};

export default UserProfileImage;