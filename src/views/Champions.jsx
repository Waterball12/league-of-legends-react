import React, {Component} from 'react';
import Axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from 'react-bootstrap/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import {Link} from 'react-router-dom';

class Champions extends Component {
    state = {
        champions: null,
    }

    componentDidMount() {
        Axios.get('/champions.json')
            .then(response => {
                this.setState({ champions: response.data})
            })
    }

    render() {
        if (this.state.champions === null) {
            return (
                <section className="jumbotron text-center" style={{ backgroundColor: "inherit", boxShadow: 'none' }}>
                    <CircularProgress/>
                </section>
            );
        }

        return (
            <Container className="pt-5">
                <Card>
                    <CardContent>
                        <GridList cellHeight={200} cols={15}>
                            {Object.values(this.state.champions.data).map((champion, key) => (
                                <GridListTile key={key} cols={3} component={props => <Link to={`/champions/${champion.id}`} {...props} />}>
                                    <img src={`https://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/${champion.image.full}`} alt={champion.id} />
                                    <GridListTileBar
                                        title={champion.name}
                                    />
                                </GridListTile>
                            ))}
                        </GridList>
                    </CardContent>
                </Card>
            </Container>
        );
    }
}

export default Champions;
