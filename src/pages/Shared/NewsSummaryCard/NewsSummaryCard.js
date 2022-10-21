import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
    console.log(news);
    const { _id, author, title, total_view, details, rating, image_url } = news;
    return (
        <Card className='mb-3'>
            <Card.Header className='d-flex justify-content-between align-items-center'>
                <div className='d-flex'>
                    <Image className='me-2'
                        roundedCircle
                        src={author.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div style={{ margin: 0 }}>
                        <p style={{ margin: 0 }}>{author.name}</p>
                        <p style={{ margin: 0 }}>{author.published_date}</p>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-3'></FaRegBookmark>
                    <FaShareAlt className='me-2'></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length > 250 ?
                            <> {details.slice(0, 250) + '.....'} <Link to={`/news/${_id}`}>Read more.</Link></>
                            : <>{details}</>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between align-items-center">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsSummaryCard;