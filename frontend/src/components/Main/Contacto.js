import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

const Contacto = () => {

    const items = [
        {
            title: '¿Quiénes somos?',
            text: 'Somos una plataforma que conecta floricultores con clientes que buscan flores frescas, sostenibles y con encanto.',
            image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jqnv90y1fassqp4egrqwbnn0%2Fimg_0.webp?st=2025-03-31T08%3A51%3A19Z&se=2025-04-06T09%3A51%3A19Z&sks=b&skt=2025-03-31T08%3A51%3A19Z&ske=2025-04-06T09%3A51%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=5jC6cczqXzHat%2B1z2FZhpqXp9TNrpQLEMbdsJZqb4to%3D&az=oaivgprodscus'
        },
        {
            title: '¿Por qué trabajar con nosotros?',
            text: 'Ofrecemos visibilidad online, soporte técnico y logístico, y una comunidad fiel de clientes.',
            image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jqnv90y1fassqp4egrqwbnn0%2Fimg_0.webp?st=2025-03-31T08%3A51%3A19Z&se=2025-04-06T09%3A51%3A19Z&sks=b&skt=2025-03-31T08%3A51%3A19Z&ske=2025-04-06T09%3A51%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=5jC6cczqXzHat%2B1z2FZhpqXp9TNrpQLEMbdsJZqb4to%3D&az=oaivgprodscus'
        },
        {
            title: 'Contáctanos',
            text: 'Puedes escribirnos a contacto@floresapp.com o llamarnos al +1 234 567 890.',
            image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jqnv90y1fassqp4egrqwbnn0%2Fimg_0.webp?st=2025-03-31T08%3A51%3A19Z&se=2025-04-06T09%3A51%3A19Z&sks=b&skt=2025-03-31T08%3A51%3A19Z&ske=2025-04-06T09%3A51%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=5jC6cczqXzHat%2B1z2FZhpqXp9TNrpQLEMbdsJZqb4to%3D&az=oaivgprodscus'
        },
        {
            title: 'Ubicación',
            text: 'Estamos en Calle Flores, 123, Ciudad Jardín, con puntos de recogida en todo el país.',
            image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jqnv90y1fassqp4egrqwbnn0%2Fimg_0.webp?st=2025-03-31T08%3A51%3A19Z&se=2025-04-06T09%3A51%3A19Z&sks=b&skt=2025-03-31T08%3A51%3A19Z&ske=2025-04-06T09%3A51%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=5jC6cczqXzHat%2B1z2FZhpqXp9TNrpQLEMbdsJZqb4to%3D&az=oaivgprodscus'
        },
        {
            title: 'Horario de atención',
            text: 'De lunes a viernes de 9:00 a 18:00. Horarios extendidos en fechas especiales.',
            image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jqnv90y1fassqp4egrqwbnn0%2Fimg_0.webp?st=2025-03-31T08%3A51%3A19Z&se=2025-04-06T09%3A51%3A19Z&sks=b&skt=2025-03-31T08%3A51%3A19Z&ske=2025-04-06T09%3A51%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=5jC6cczqXzHat%2B1z2FZhpqXp9TNrpQLEMbdsJZqb4to%3D&az=oaivgprodscus'
        },
        {
            title: 'Redes Sociales',
            text: 'Síguenos en Instagram, Facebook y TikTok como @flor.es.',
            image: 'https://videos.openai.com/vg-assets/assets%2Ftask_01jqnv90y1fassqp4egrqwbnn0%2Fimg_0.webp?st=2025-03-31T08%3A51%3A19Z&se=2025-04-06T09%3A51%3A19Z&sks=b&skt=2025-03-31T08%3A51%3A19Z&ske=2025-04-06T09%3A51%3A19Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=5jC6cczqXzHat%2B1z2FZhpqXp9TNrpQLEMbdsJZqb4to%3D&az=oaivgprodscus'
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
