import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams, useRouteLoaderData } from 'react-router';
import NewsCard from '../components/NewsCard';

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
            <h2 className='font-bold mb-5'>Total <span className='text-secondary'>{categoryNews.length} </span>news found</h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map(news=> <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;