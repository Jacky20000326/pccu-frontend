import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from "react-redux"
import { CHANGE_PAGE_NUMBER } from "../../Store/AnnouncementSlice"
const Pagination = () => {
    const [count, setCount] = useState(1)
    // 將useDispatch實體化
    let dispatch = useDispatch()
    // 取得所有資料(資料庫回傳排序需由新到舊)
    let get_Announcement = useSelector(item => item.AnnouncementReducer.value.Search_Result)
    let Pagination_max_Count = Math.round(get_Announcement.length / 3)
    // 下一頁
    const nextPage = () => {
        if (count >= Pagination_max_Count) {
            return
        }
        setCount(item => item + 1)
    }
    // 上一頁
    const lastPage = () => {
        if (count == 1) {
            return
        }
        setCount(item => item - 1)
    }
    useEffect(() => {
        if (count > Pagination_max_Count) {
            return
        }
        dispatch(CHANGE_PAGE_NUMBER(count))
    }, [count])



    return (
        <PaginationContainer>
            <>
                {
                    count == 1 ? null : <Pagination_last onClick={() => { lastPage() }}>
                        上一頁
                    </Pagination_last>
                }
                {
                    count >= Pagination_max_Count ? null : <Pagination_next onClick={() => { nextPage() }}>
                        下一頁
                    </Pagination_next>
                }

            </>



        </PaginationContainer >
    )
}
const PaginationContainer = styled.div`
    display: flex;

`

const Pagination_last = styled.button`
    margin-right: 20px;
    color: #F69393;
    transition: 0.3s;
    width: 70px;

    display: flex;
    justify-content: center;
    align-content: center;
    cursor: pointer;
    border: none;
    background: none;

    background-color: #aeaeae;
    color: #fff;
    &:hover{
        background-color: #F69393;
        color: #fff;
        
    }
    
`
const Pagination_next = styled.button`
    margin-right: 1em;
    color: #F69393;
    transition: 0.3s;
    width: 70px;

    display: flex;
    justify-content: center;
    align-content: center;
    cursor: pointer;
    border: none;
    background: none;
    background-color: #aeaeae;
    color: #fff;
    &:hover{
        background-color: #F69393;
        color: #fff;
    }
    
`
export default Pagination