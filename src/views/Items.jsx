import React, {Component} from 'react';
import Axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from 'react-bootstrap/Container';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Tooltip from '@material-ui/core/Tooltip/Tooltip';

class Items extends Component {
    state = {
        items: null,
    }

    componentDidMount() {
        Axios.get('/items.json')
            .then(response => {
                this.setState({ items: response.data })
            })
    }

    render() {
        if (this.state.items === null) {
            return (
                <section className="jumbotron text-center" style={{ backgroundColor: "#fff" }}>
                    <CircularProgress />
                </section>
            );
        }

        return (
            <Container className="pt-5">
                <Card>
                    <CardContent>
                        <GridContainer>
                                {Object.values(this.state.items.data).map((item, key) => {
                                    return <GridItem key={key} xs={3} sm={2} md={1}>
                                        <Tooltip title={
                                                <React.Fragment>
                                                    <img src={`http://ddragon.leagueoflegends.com/cdn/9.3.1/img/item/${item.image.full}`} alt={item.name} />
                                                    <p>{item.description}</p>
                                                    <p>Cost <span className="text-warning">{item.gold.total} ({item.gold.base})</span> </p>
                                                </React.Fragment>
                                            }
                                        >
                                            <div className="text-center">
                                                <img src={`http://ddragon.leagueoflegends.com/cdn/9.3.1/img/item/${item.image.full}`} alt={item.name} />
                                                {item.name}
                                            </div>
                                        </Tooltip>
                                    </GridItem>
                                })}
                        </GridContainer>
                    </CardContent>
                </Card>
            </Container>
        );
    }
}

export default Items;
