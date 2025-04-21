import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

// Importar imágenes locales
import Contacto1 from '../../assets/images/Contacto1.png';
import Contacto2 from '../../assets/images/Contacto2.png';
import Contacto3 from '../../assets/images/Contacto3.png';
import Contacto4 from '../../assets/images/Contacto4.png';
import Contacto5 from '../../assets/images/Contacto5.png';
import Contacto6 from '../../assets/images/Contacto6.png';

const Contacto = () => {

    const items = [
        {
            title: '¿Quiénes somos?',
            text: 'Somos una plataforma que conecta floricultores con clientes que buscan flores frescas, sostenibles y con encanto.',
            image: Contacto1
        },
        {
            title: '¿Por qué trabajar con nosotros?',
            text: 'Ofrecemos visibilidad online, soporte técnico y logístico, y una comunidad fiel de clientes.',
            image: Contacto2
        },
        {
            title: 'Contáctanos',
            text: 'Puedes escribirnos a contacto@floresapp.com o llamarnos al +1 234 567 890.',
            image: Contacto3
        },
        {
            title: 'Ubicación',
            text: 'Estamos en Calle Flores, 123, Ciudad Jardín, con puntos de recogida en todo el país.',
            image: Contacto4
        },
        {
            title: 'Horario de atención',
            text: 'De lunes a viernes de 9:00 a 18:00. Horarios extendidos en fechas especiales.',
            image: Contacto5
        },
        {
            title: 'Redes Sociales',
            text: 'Síguenos en Instagram, Facebook y TikTok como @flor.es.',
            image: Contacto6
        }
    ];

    return (
        <Container className="mt-5 mb-5">
            <h2 className="mb-4 text-center">Contacto</h2>
            <Row>
                {items.map((item, index) => (
                    <Col key={index} md={4} className="mb-4">
                        <Card className="bg-dark text-white border-0">
                            <Card.Img
                                src={item.image}
                                alt={item.title}
                                style={{ height: '300px', objectFit: 'cover' }}
                            />
                            <Card.ImgOverlay className="d-flex align-items-end p-0">
                                <div style={{
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    color: 'white',
                                    width: '100%',
                                    padding: '1rem'
                                }}>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.text}</Card.Text>
                                </div>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Contacto;
