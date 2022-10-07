import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Home_Components/Announcement";
import Folio from "../components/Home_Components/Folio";
import Carousel from "../components/Home_Components/Carousel"
import Video from "../components/Home_Components/Video";
import axios from 'axios'
import SeparateImgSrc from '../assets/SeparateImg.jpeg'
const Home = () => {



	return (
		< >

			<Carousel ></Carousel>
			<Announcement></Announcement>
			<SeparateImg imgSrc={SeparateImgSrc} />
			<Video></Video>
			<Folio />
		</>
	);
};


const SeparateImg = styled.div`
				background-image: url(${props => props.imgSrc});
				background-size: cover;
				background-attachment: fixed;
				background-position: center center;
				height: 35vh;
				width: 100vw;
				margin-top: 100px;
				`


export default Home;
