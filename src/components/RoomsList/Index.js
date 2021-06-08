import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';

import { withAlert } from 'react-alert';

import RoomListItem from './RoomListItem';

import Api from '/src/Api';

import { axiosError } from '/src/helpers/apiErrorHandler';

const Index = ({ user, alert }) => {

    const [rooms, setRooms] = useState([]);

    useEffect(() => {

        Api.getOpenRooms().then(function(rooms) {

            setRooms(rooms.data);

        })
        .catch(function(err) {

            console.error(err);

            axiosError(alert, err);

        });

    }, []);

    return (<div>
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Host
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {rooms.map(function(room) {
                                    return <RoomListItem room={room}></RoomListItem>;
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>);

};

const mapStateToProps = state => ({
    user: state.auth.user,
});

export default connect(mapStateToProps)(withAlert()(Index));