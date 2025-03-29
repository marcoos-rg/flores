import React from 'react';
import { Card, Navbar, Nav, Container } from 'react-bootstrap';
import landingVideo from '../../assets/video/landingpage.mp4';

function VideoCard() {
  return (
    <Card
      className="bg-dark text-white w-100 border-0 rounded-0"
      style={{ height: '105vh', overflow: 'hidden', position: 'relative' }}
    >
      <video
        className="card-img"
        autoPlay
        loop
        muted
        playsInline
        style={{
          objectFit: 'cover',
          objectPosition: 'center 25%',
          width: '100%',
          height: '100%',
        }}
      >
        <source src={landingVideo} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Degradado inferior */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '80px',
          background: 'linear-gradient(to bottom, transparent, white)',
          pointerEvents: 'none',
        }}
      />

      <Card.ImgOverlay
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          paddingTop: '4rem',
          paddingBottom: '2rem',
        }}
      >
        
        
        <div
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            padding: '1rem 2rem',
            borderRadius: '0.5rem',
            maxWidth: '600px',
          }}
        >
          <Card.Title className="fs-1 fw-bold">Flores frescas, momentos inolvidables</Card.Title>
          <Card.Text className="fs-5">
            Descubre arreglos florales únicos, elaborados con pasión y sostenibilidad.
          </Card.Text>
          <Card.Text className="fs-6">Entrega rápida y cuidada en cada detalle</Card.Text>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default VideoCard;
