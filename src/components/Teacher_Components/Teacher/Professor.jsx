import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux"


import { Link } from "react-router-dom"
import { getTeacherInfo, getProfessor } from "../../../Store/UploadTeacherSlice"
const Professor = () => {
    // get dispatch
    let dispatch = useDispatch()
    let getProfessorInfo = useSelector(item => item.UploadTeacherReducer.ProfessorData)

    const getProfessorData = async () => {
        await dispatch(getTeacherInfo())
        await dispatch(getProfessor())
    }

    useEffect(() => {
        getProfessorData()
    }, [])

    return (
        <div style={{ marginTop: "30px" }}>
            <Teacher_title>教授</Teacher_title>
            <Teacher_container>
                {
                    getProfessorInfo ? getProfessorInfo.map(data => {
                        return (
                            <Link to={`/department/teacher/${data.TR_name}`} >
                                <Teacher_master_container>
                                    <Teacher_master_image_container>
                                        <Teacher_image src={`${process.env.REACT_APP_API_URL_IMAGE}/${data.TR_image}`} />
                                        <Teacher_name>{data.TR_name}</Teacher_name>
                                    </Teacher_master_image_container>
                                    <Teacher_master_block_container>

                                        <Teacher_job_title>系主任/教授</Teacher_job_title>
                                        <Teacher_school>{data.TR_academic}</Teacher_school>
                                        <Teacher_specialized>{data.TR_research} </Teacher_specialized>

                                        <Teacher_more_info>more</Teacher_more_info>

                                    </Teacher_master_block_container>
                                </Teacher_master_container>
                            </Link>
                        )
                    }) : <></>
                }

            </Teacher_container>
        </div >
    )
}

const Teacher_container = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        justify-content: space-between;
        

	}

`
const Teacher_title = styled.div`
    font-weight: 600;
    font-size: 20px;
    
`
const Teacher_master_container = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 4px 5px 13px -4px rgba(0,0,0,0.1);
    width: 220px;
    margin: 0px 0px 25px 15px;
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
    display: flex;
    flex-direction: column;
    position: relative;
    /* flex: 5; */
    padding: 20px;

  
`
const Teacher_name = styled.div`
    font-weight: 600;
    font-size: 0.8em;
    position: absolute;
    bottom: 1.2em;
    /* left: 1em; */
    color: #fff;
    background-color: #F69393;
    opacity: 0.9;
    padding: 5px 10px 5px 10px;
    
`
const Teacher_job_title = styled.div`
    font-size: 0.4em;
    font-weight: 500;
    margin-top: 10px;
    color: #4a4a4a;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        font-size: 1rem;
	}
`
const Teacher_school = styled.div`
    margin-top: 10px;
    font-weight: 300;
    font-size:0.4em;
    color: #888888;
    @media (max-width: ${({ theme }) => theme.w_576.w}) {
        font-size: 0.8rem;
	}
   
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

export default Professor