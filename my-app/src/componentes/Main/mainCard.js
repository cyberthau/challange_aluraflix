import React, { useContext } from 'react';
import './mainCard.css';
import Category from '../Categoria/categoria';
import VideoList from '../VideoLista/videoLista';
import VideoContext from '../../context/videoContext';

function MainCard() {
  const { videos } = useContext(VideoContext);

  if (!videos || videos.length === 0) {
    return <div>Carregando vídeos...</div>;
  }

  return (
    <div className="main-card">
      <div className="topic">
        <Category id={1} title="FRONT END" />
        <VideoList strokeColor="#6BD1FF" category="frontend" />
      </div>
      <div className="topic">
        <Category id={2} title="BACK END" />
        <VideoList strokeColor="#00C86F" category="backend" />
      </div>
      <div className="topic">
        <Category id={3} title="GESTÃO" />
        <VideoList strokeColor="#FFBA05" category="gestao" />
      </div>
      <div className="topic">
        <Category id={4} title="INOVAÇÃO" />
        <VideoList strokeColor="#E47900" category="inovacao" />
      </div>
    </div>
  );
}

export default MainCard;
