import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import LightBox from './LightBox';
import { GetTopic, GetTopicDetail } from "../../Store/TopicSlice"
import { useDispatch, useSelector } from "react-redux"
const Folio = () => {

    // get dispatch
    let dispatch = useDispatch()
    // get Topic data
    let TopicData = useSelector(item => item.UploadTopicReducer.topicData)
    let Loaging = useSelector(item => item.UploadTopicReducer.loaging)

    console.log(TopicData)





    const img_big_container_style = { overflow: "hidden", width: "100%", height: "auto" }
    const img_small_container_style = { overflow: "hidden", width: "50%", height: "auto" }

    const [CurrentTopic, setCurrentTopic] = useState(null)
    const [LightboxState, setLightboxState] = useState("none")
    const GetCurrentTopic = (index) => {
        setCurrentTopic(index.TP_title)
        // get Topic detail data
        dispatch(GetTopicDetail(index.TP_title))
        // 開啟燈箱
        setLightboxState("display")
    }
    const CloseLightbox = () => {
        setLightboxState("none")
    }

    const getTopicDetail = () => {

    }
    useEffect(() => {
        dispatch(GetTopic())


    }, [])
    return (
        <All_Topics_Container >
            <Folio_txt>2021年度畢業製作代表作品</Folio_txt>
            <hr />
            {
                TopicData.length == 6 ?
                    <Folio_Container>
                        <Folio_Container_row>
                            {
                                TopicData.map(item => (

                                    <Folio_cube onClick={() => { GetCurrentTopic(TopicData[item.TP_id - 1]) }}>
                                        <Folio_Container_image src={`http://140.137.51.13:5000/${item.TP_img}`} />
                                        <Folio_mask id='mask'>
                                            <Folio_mask_title>{item.TP_title}</Folio_mask_title>
                                            <Folio_mask_content>{item.TP_content}</Folio_mask_content>
                                        </Folio_mask>
                                    </Folio_cube>




                                ))
                            }
                        </Folio_Container_row>
                    </Folio_Container> : <div style={{ color: "#f8b6b5", fontSize: "30px", border: "2px solid #f8b6b5", padding: "10px 20px 10px 20px" }}>即將公告</div>
            }


            {/* // 傳入index判斷燈箱顯示，及傳入state來判斷燈箱是否開啟 */}
            <LightBox title={CurrentTopic} LightboxState={LightboxState} CloseLightbox={CloseLightbox} />

        </All_Topics_Container >);
};
const All_Topics_Container = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        font-size: 14px;
        padding: 0px 20% 0px 20%;
        margin-bottom: 150px;
       
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
            padding: 0px 10% 0px 10%;

	}
`

const Folio_txt = styled.h3`
        align-items: center;
        margin-top: 100px;
        
        color: #0050AE;
        /* color: ${(prop) => prop.theme.color}; */
        font-weight: 400;
        font-size: 45px;
        @media (max-width: ${(prop) => prop.theme.w_576.w}) {
            font-size: 20px;
            

	}
        `
// const Decorative_line = styled.hr`
//     width:  1em;
// `
const Folio_Container = styled.div`
    max-width: 800px;
    min-width: 720px;
    display: flex;
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        min-width: 600px;
    }
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        min-width: 300px;
    }


`
const Folio_Container_row = styled.div`
    width: 100%;
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    

    
`


const Folio_cube = styled.div`
    overflow: hidden;
    position: relative;
    
    &:hover  #mask{
        opacity: 1;
        transition: 0.5s;
    }
`

const Folio_Container_image = styled.img`
    width: 240px;
    height: 240px;
    background-size: cover;
    background-position: center;
    transition: 0.5s;
    object-fit: cover;
    
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
       
    }
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        width: 200px;
        height: 200px;
    }
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        width: 100px;
        height: 100px;
    }
   

`
// mask
const Folio_mask = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(0,0,0,0.7);
    top: 0px;
    pointer-events: none;
    padding: 0px 20px;
    opacity: 0;
    z-index: 100;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        display: none;
    }
    
    
 
`
const Folio_mask_title = styled.div`
    color: #fff;
    font-size: 1.4rem;
    margin-bottom: 10px;
`
const Folio_mask_content = styled.div`
    color: #fff;
    font-size: 1rem;
    text-align: justify;
`


export default Folio;
