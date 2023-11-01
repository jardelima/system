import { useRouter } from "next/router";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { authUser, logout, selectUser } from "@/store/userSlice";
import axios from "axios";

function Dashboard() {
    const [name, setName] = useState("");

    const router = useRouter();
    const status = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutUser = () => {
        dispatch(logout());
        localStorage.clear();
        router.push("/");
    };

    useEffect(() => {
        if (!status.user.isLogged) {
            axios
                .get(
                    `http://localhost:8080/auth/${localStorage.getItem("id")}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem(
                                "token"
                            )}`
                        }
                    }
                )
                .then((response) => {
                    setName(response.data.user.name);
                    dispatch(authUser(localStorage.getItem("id")));
                })
                .catch(() => {
                    router.push("/");
                });
        }
    }, []);

    return (
        <>
            <div>Bem vindo à Dashboard, {name}!</div>
            <button onClick={() => logoutUser()}>logout</button>
        </>
    );
}

export default Dashboard;
