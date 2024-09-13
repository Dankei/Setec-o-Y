import React, {useEffect} from 'react';
import PopUp from './PopUp.js';
import DeleteYeet from './DeleteYeet.js';
import axios from 'axios';

export default function Yeet(props) {
    const [open, setOpen] = React.useState(false);
    const [userInfo,setUserInfo] = React.useState([]);
    console.log(props.id)
    

    useEffect(() => {
        axios.get(`http://localhost:3001/api/users/findbyid/${props.User}`)
            .then(response => {
                setUserInfo(response.data);
            })
            .catch(error => console.error('Error fetching tweets:', error));
    }, []);

    const userInitial = userInfo.username ? userInfo.username.charAt(0) : '';
    console.log(userInfo)

    return (
        <>
            <div className="flex flex-col border-y-[1px] border-gray-600 p-4">
                <div className="flex text-white">


                    <div className="rounded-full w-fit bg-slate-200 h-fit">
                        <p className="pt-1 text-lg font-bold text-center size-10 text-slate-500">
                            {userInitial}
                        </p>
                    </div>

                    <div className="ms-4 text-white w-[30rem]">
                        <div className="flex justify-between ">
                            <p className="text-sm"><b>{userInfo.username}</b> - {props.Date} </p>
                            <button
                                onClick={() => setOpen(true)}
                            ><img src="/assets/images/more.png"></img></button>
                        </div>



                        <p className="">{props.Content}</p>
                        <div className="flex justify-between mt-5 w-[25rem]">

                            <div className="flex space-x-2">
                                <p><img src="/assets/images/comment.png" /></p>
                                <p>0</p>
                            </div>

                            <div className="flex space-x-2">
                                <p><img src="/assets/images/rt-unselected.png" /></p>
                                <p>0</p>
                            </div>

                            <div className="flex space-x-2">
                                <p><img src="/assets/images/heart-unselected.png" /></p>
                                <p>0</p>
                            </div>

                            <PopUp open={open} onClose={() => setOpen(false)}>
                                <DeleteYeet id={props.id} onClose={() => setOpen(false)} />
                            </PopUp>

                        </div>
                    </div>

                </div>



            </div>


        </>
    );
}