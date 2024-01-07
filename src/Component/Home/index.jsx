import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { latestNews, otherNews } from "../../Store/action"
import LatestNews from "./LatestNews";
import OtherNews from "./OtherNews";
import axios from "axios";

const Home = () => {
    const state = useSelector((state) => ({ ...state }));
    console.log(state)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(latestNews())
        dispatch(otherNews())
    }, []);

    return (
        <>
            <LatestNews latest={state.articles.latest} />
            <OtherNews otherNews={state.articles.otherNews} />

        </>
    )

}

export default Home;