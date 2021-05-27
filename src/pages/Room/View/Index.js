import React, { Component } from 'react';
import { useParams } from 'react-router';

import RoomNotFound from '/src/components/RoomNotFound/Index';

import ViewRoom from '/src/pages/Room/View/ViewRoom';

const Index = () => {

    let { id } = useParams();

    if(id)
    {

        return <ViewRoom id={id}></ViewRoom>;

    }

    return <RoomNotFound></RoomNotFound>;

};

export default Index;