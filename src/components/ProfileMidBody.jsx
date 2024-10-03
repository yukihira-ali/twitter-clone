import { Button, Col, Image, Nav, Row, Spinner } from 'react-bootstrap';
import ProfilePostCard from './ProfilePostCard';
import { useSelector } from 'react-redux';

export default function ProfileMidBody() {

    const url = "https://pbs.twimg.com/profile_banners/83072625/1602845571/1500x500";
    const pic = "https://pbs.twimg.com/profile_images/1587405892437221376/h167Jlb2_400x400.jpg";

    const posts = useSelector(store => store.posts.posts);
    const loading = useSelector(store => store.posts.loading);

    return (
        <Col sm={6} className='bg-light' style={{ border: "1px solid lightgray" }}>
            <Image src={url} fluid />
            <br />
            <Image
                src={pic}
                roundedCircle
                style={{
                    width: 150,
                    position: "absolute",
                    top: "140px",
                    border: "4px solid #F8F9FA",
                    marginLeft: 15,
                }}
            />

            <Row className='justify-content-end'>
                <Col xs="auto">
                    <Button className='rounded-pill mt-2' variant='outline-secondary'>
                        Edit Profile
                    </Button>
                </Col>
            </Row>

            <p className='mt-5' style={{ margin: 0, fontWeight: "bold", fontSize: "15px" }}>
                Ali
            </p>
            <p style={{ marginBottom: "2px" }}>
                @Ali_Asnawi
            </p>
            <p>I help people to be an instructor at sigmaschool.co</p>

            <p>Entrepreneur</p>

            <p>
                <strong>222</strong> Following <strong>12</strong> Followers
            </p>

            <Nav variant='underline' defaultActiveKey="/home" justify>
                <Nav.Item>
                    <Nav.Link eventKey="/home">Tweets</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Replies</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Highlights</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Media</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-4">Likes</Nav.Link>
                </Nav.Item>
            </Nav>
            {loading && (
                <Spinner animation="border" className="ms-3 mt-3" variant="primary" />
            )}
            {posts.length > 0 && posts.map((post) => (
                <ProfilePostCard key={post.id} content={post.content} postId={post.id} />
            ))}
        </Col>
    )
}
