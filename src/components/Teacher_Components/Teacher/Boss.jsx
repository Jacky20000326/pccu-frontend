import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"


import { getTeacherInfo, getBoss } from "../../../Store/UploadTeacherSlice"

const Boss = () => {

    // get dispatch
    let dispatch = useDispatch()

    let getBossData = useSelector(item => item.UploadTeacherReducer.bossData)



    // get bossData
    const getBossInfo = async () => {
        await dispatch(getTeacherInfo())
        await dispatch(getBoss())

    }

    useEffect(() => {
        getBossInfo()
    }, [])

    return (
        <Teacher_boss_container >


            <Teacher_title>系主任</Teacher_title>

            <Teacher_master_container>
                {
                    getBossData ? getBossData.map(item => (
                        <Link to={`/department/teacher/${item.TR_name}`} >
                            <Teacher_container>

                                <Teacher_master_image_container>


                                    <Teacher_image src={`https://140.137.51.13:5000/${item.TR_image}`} />
                                    <Teacher_name>{item.TR_name}</Teacher_name>
                                </Teacher_master_image_container>
                                <Teacher_master_block_container>

                                    <Teacher_job_title>系主任/教授</Teacher_job_title>
                                    <Teacher_school>{item.TR_academic}</Teacher_school>
                                    <Teacher_specialized>{item.TR_research}
                                    </Teacher_specialized>

                                    <Teacher_more_info>more</Teacher_more_info>

                                </Teacher_master_block_container>

                            </Teacher_container>
                        </Link>
                    )) : <></>
                }

            </Teacher_master_container>




        </Teacher_boss_container >

    )
}


const Teacher_boss_container = styled.div`
    margin-top: 30px;
`
const Teacher_title = styled.div`
    font-weight: 600;
    font-size: 20px;
`
const Teacher_master_container = styled.div`
    display: flex;
    /* flex-direction: column; */
    margin-top: 30px;
    max-width: 780px;
    /* width: ; */
    /* margin-left: 15px; */
    @media (max-width: ${({ theme }) => theme.w_900.w}) {
        flex-directon: column;
	}
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        
	}
`
const Teacher_container = styled.div`
    display: flex;
    box-shadow: 4px 5px 13px -4px rgba(0,0,0,0.1);
    /* width: 180px; */
    margin: 0px 0px 25px 15px;
    width: 220px;

    flex-direction: column;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        width: 185px;
        margin: 0px 5px 25px 5px;
	}
    @media (max-width: ${({ theme }) => theme.w_400.w}) {
        width: 165px;
        margin: 0px 5px 25px 5px;
	}



`

const Teacher_master_image_container = styled.div`
  /* flex: 1.5; */
    width: 100%;
    position: relative;
    /* min-height: 300px; */
    background-color: #f4dada;
    height: 240px;
`
const Teacher_image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Teacher_master_block_container = styled.div`
    flex: 5;
    padding: 20px 30px 20px 30px;
    position: relative;
    
`
const Teacher_name = styled.div`
    /* font-weight: 600;
    font-size: 1.5em;
    color: #888888;
   
    @media (max-width: ${({ theme }) => theme.w_900.w}) { */
        position: absolute;
        bottom: 20px;
        font-size: 1rem;
        background-color: #F69393;
        opacity: 0.9;
        padding: 5px 10px 5px 10px;
        font-weight: 500;
        color: #fff;
	/* } */
    
    
`
const Teacher_job_title = styled.div`
    font-size: 1em;
    font-weight: 500;
    margin-top: 10px;
    color: #4a4a4a;
`
const Teacher_school = styled.div`
    margin-top: 10px;
    font-weight: 300;
    font-size: 0.8rem;
    color: #4a4a4a;
   
`
const Teacher_specialized = styled.div`
   margin-top: 15px;
    font-weight: 500;
    font-size: 0.4em;
    color: #F69393;
    height: 70px;
    margin-bottom: 20px;
    overflow: hidden;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        font-size: 0.8rem;
	}
`
const Teacher_professor_container = styled.div`
`

const Teacher_more_info = styled.div`
    font-size: 10px;
    margin-top: 20px;
    font-weight: 500;
    color: #888888;
    position: absolute;
    right: 10px;
    bottom: 10px;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        right: 10px;
        bottom: 15px;
        font-size: 0.8rem;

	}
  
`

export default Boss