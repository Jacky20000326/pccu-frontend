import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import moment from 'moment';
const Announcement_Category = () => {

    let category = useSelector(item => item.AnnouncementReducer.value.category)
    let [data, setData] = useState(null)
    const getOtherAnnoucement = async () => {
        let result = await axios.get("http://140.137.51.13:3003/api/UploadAnnouncement/get/PerAnnouncement", { category: category }).then(res => res.data)
        let sortResult = await result.data.sort((a, b) => b.A_id - a.A_id)
        console.log(sortResult)
        setData(sortResult.slice(0, 4))
    }
    useEffect(() => {
        getOtherAnnoucement()
    }, [])

    return (
        <Announcement_Category_container>
            <Announcement_other_Category_txt>其他公告</Announcement_other_Category_txt>
            {
                data ? data.map(item => (

                    <>
                        <Link to={`/announcement/detail/${item.A_id}`}>
                            <Announcement_other_Category_container>
                                <Announcement_Category_image src={`http://140.137.51.13:5000/${item.A_img}`}></Announcement_Category_image>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                    <Announcement_Category_title>{item.A_smellTitle}</Announcement_Category_title>
                                    <Announcement_Category_time>{moment(item.A_createTime).format('YYYY-MM-DD')}</Announcement_Category_time>
                                </div>

                            </Announcement_other_Category_container>
                        </Link>

                    </>)) : null

            }
            <Link to={`/announcement`}>
                <Announcement_Category_allcaregory>查看所有公告</Announcement_Category_allcaregory>
            </Link>
        </Announcement_Category_container>
    )
}
const Announcement_Category_container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 50px;
    margin-top: 20px;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        margin: 5em 0px 2em 0px;

	}

`
const Announcement_other_Category_txt = styled.h4`
    font-size: 16px;
    color: #555555;
    font-weight: 500;
`
const Announcement_other_Category_container = styled.div`
    display: flex;
    margin: 20px 0px 30px 0px;
`
const Announcement_Category_image = styled.img`
    width: 70px;
    height: 90px;
    margin-right: 20px;
    object-fit: contain;
   
`
const Announcement_Category_title = styled.div`
    font-size: 1rem;
    color: #ee8987;
`
const Announcement_Category_time = styled.div`
    font-size: 0.8rem;
    color: #555555;
`
const Announcement_Category_allcaregory = styled.h4`
    font-size: 16px;
    font-weight: 500;
    color: #555555;
    transition: 0.3s;
    &:hover{
        color: #F69393;
    }
`

export default Announcement_Category