import React, { Component } from 'react';
import { useParams } from 'react-router';

import RoomNotFound from '/src/components/RoomNotFound';

import ManageRoom from '/src/pages/Room/Manage/ManageRoom';

const Index = () => {

    let { id } = useParams();

    if(id)
    {

        return <ManageRoom id={id}></ManageRoom>;

    }

    return <RoomNotFound></RoomNotFound>;

};

export default Index;