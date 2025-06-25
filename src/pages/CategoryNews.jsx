import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams, useRouteLoaderData } from 'react-router';

const CategoryNews = () => {
    const {id}= useParams();
    const data=useLoaderData();

const [categoryNews, setCategoryNews]=useState([]);

    useEffect(()=>{
        if(id=="0"){
            setCategoryNews(data);
            return;
        }else if(id=="1"){
            const filterdNews=data.filter(news=>news.others.is_today_pick==true);
            setCategoryNews(filterdNews)
        }
        else{
 const filterdNews=data.filter(news=>news.category_id==id);
        // console.log(filterdNews)
        setCategoryNews(filterdNews);
        }
       
    },[data,id])
    return (
        <div>
            <h1>Total {categoryNews.length} found</h1>
        </div>
    );
};

export default CategoryNews;