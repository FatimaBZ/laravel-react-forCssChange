import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebar from '../../components/sidebar/Sidebar'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import './home.css'

export default function Home() {
  return (
    <>

      <Header />
      <h2 style={{ textAlign: 'center', marginTop: "10px" }} className="font-title">Services</h2>
      <div className="home">
        <Row xs={1} md={4} className="g-4">
          <Col>
            <Card body outline color="success" className="mx-auto my-2" border="primary">



              <Card.Body>
                <Card.Title><p style={{ textAlign: 'center' }}><i className="fas fa-home fa-2x"></i></p>
                  <Card.Title><h4 style={{ textAlign: 'center' }}>Apartment Management</h4></Card.Title></Card.Title>
                <Card.Text>
                  Whether a property requires any maintenance or a complete onboarding, we get it done.
                </Card.Text>
                <p style={{ textAlign: 'center' }}><a href="/login"> <Button variant="primary">Click here</Button> </a> </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card body outline color="success" className="mx-auto my-2" border="primary">


              <Card.Body>
                <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-building fa-2x"></i></p>
                  <Card.Title><h4 style={{ textAlign: 'center' }}>Building Management</h4></Card.Title></Card.Title>
                <Card.Text>
                  Whenever a building requires any maintenance or tenant issues, Lunar Management is ready to help.
                </Card.Text>
                <p style={{ textAlign: 'center' }}><a href="/login"> <Button variant="primary">Click here</Button> </a> </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card body outline color="success" className="mx-auto my-2" border="primary">
              <Card.Body>
                <Card.Title><p style={{ textAlign: 'center' }}><i class="fas fa-user-friends fa-2x"></i></p>
                  <Card.Title> <h4 style={{ textAlign: 'center' }}>Visitor Management</h4></Card.Title></Card.Title>

                <Card.Text>
                  Visitors can submit a form for inquiry stating which apartment they want to visit to.
                </Card.Text>
                <p style={{ textAlign: 'center' }}><a href="/login"> <Button variant="primary">Click here</Button> </a> </p>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card body outline color="success" className="mx-auto my-2" border="primary">
              <Card.Body>

                <Card.Title><p style={{ textAlign: 'center' }}><i class="far fa-flower-tulip fa-2x"></i></p>
                  <Card.Title><h4 style={{ textAlign: 'center' }}>Community Management</h4></Card.Title></Card.Title>
                <Card.Text>
                  A clean community for our residents by managing gardening, pool and other amenities.
                </Card.Text>
                <p style={{ textAlign: 'center' }}><a href="/login"> <Button variant="primary">Click here</Button> </a> </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* <Posts/>
        <Sidebar /> */}
      </div>

    </>
  )
}
