import React, {Component} from 'react';
import Axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from 'react-bootstrap/Container';
import Card from '@material-ui/core/Card/Card';
import CardContent from '@material-ui/core/CardContent/CardContent';
import CardHeader from '@material-ui/core/CardHeader/CardHeader';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import {Divider, Typography} from '@material-ui/core';
import Table from 'components/Table/Table';
import Badge from 'react-bootstrap/Badge';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

class Champion extends Component {

    state = {
        champion: null,
        error: false
    }

    componentDidMount() {
        const targetChampion = this.props.match.params.champ;
        if (targetChampion != null) {
            Axios.get(`https://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion/${targetChampion}.json`)
                .then(response => {
                    this.setState({ champion: response.data })
                })
                .catch(error => {
                    this.setState({ error: true })
                })
        }
    }


    render() {
        if (this.state.error === true) {
            return (
                <section className="jumbotron text-center" style={{ backgroundColor: "#fff", boxShadow: 'none' }}>
                    <h3>Failed to get the target champion</h3>
                </section>
            );
        } else if (this.state.champion === null) {
            return (
                <section className="jumbotron text-center" style={{ backgroundColor: "#fff" }}>
                    <CircularProgress />
                </section>
            );
        }

        const champion = this.state.champion.data[this.props.match.params.champ];

        return (
            <section className="jumbotron" style={{ backgroundColor: "inherit" }}>
                <Container>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={5}>
                            <Card>
                                <CardContent>
                                    <GridContainer>
                                        <GridItem xl={4} xs={12} sm={12} md={4}>
                                            <img src={`https://ddragon.leagueoflegends.com/cdn/9.3.1/img/champion/${champion.image.full}`} alt="Champion" />
                                        </GridItem>
                                        <GridItem xl={8} xs={12} sm={12} md={8}>
                                            <Typography variant="h5">
                                                {champion.name}
                                            </Typography>
                                            <Typography variant="h6">
                                                {champion.title}
                                            </Typography>
                                            <Typography>
                                                {champion.tags.map((tag, key) => {
                                                    return <Badge key={key} className="mr-1" variant="danger">{tag} </Badge>
                                                })}
                                            </Typography>
                                        </GridItem>
                                    </GridContainer>
                                    <Table
                                        tableHeaderColor="primary"
                                        tableData={[
                                            ["Health", `${champion.stats.hp} (+${champion.stats.hpperlevel} per level)`],
                                            ["Mana", `${champion.stats.mp} (+${champion.stats.mpperlevel} per level)`],
                                            ["Attack Damage", `${champion.stats.attackdamage} (+${champion.stats.attackdamageperlevel} per level)`],
                                            ["Attack Speed", `${champion.stats.attackspeed} (+${champion.stats.attackspeedperlevel} per level)`],
                                            ["Health Regen", `${champion.stats.hpregen} (+${champion.stats.hpregenperlevel} per level)`],
                                            ["Mana Regen", `${champion.stats.mpregen} (+${champion.stats.mpregenperlevel} per level)`],
                                            ["Armor", `${champion.stats.armor} (+${champion.stats.armorperlevel} per level)`],
                                            ["Magic Resist", `${champion.stats.spellblock} (+${champion.stats.spellblockperlevel} per level)`],
                                            ["Crit", `${champion.stats.crit} (+${champion.stats.critperlevel} per level)`],
                                            ["Attack range", `${champion.stats.attackrange}`],
                                            ["Movement speed", `${champion.stats.movespeed}`],
                                        ]}
                                    />
                                </CardContent>
                            </Card>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={7}>
                            <Card>
                                <CardContent>
                                    <Typography variant="subheading">
                                        {champion.lore}
                                    </Typography>
                                    <br/>
                                    <Typography variant="title">
                                        Ally Tip
                                    </Typography>
                                    {champion.allytips.map((tip, key) => {
                                        return <Typography key={key} variant="subheading">
                                            {key}. {tip}
                                        </Typography>
                                    })}
                                    <br />
                                    <Typography variant="title">
                                        Enemy Tip
                                    </Typography>
                                    {champion.enemytips.map((tip, key) => {
                                        return <Typography key={key} variant="subheading">
                                            {key}. {tip}
                                        </Typography>
                                    })}
                                </CardContent>
                            </Card>
                        </GridItem>
                    </GridContainer>
                    <br/>
                    <Card>
                        <CardContent>
                            <CardHeader className="text-center"
                                title="Skins"
                            />
                            <GridList cellHeight={200} cols={15}>
                                {champion.skins.map((skin, key) => {
                                    return <GridListTile key={key} cols={3}>
                                        <img src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_${skin.num}.jpg`} alt={skin.name} />
                                        <GridListTileBar
                                            title={skin.name}
                                        />
                                    </GridListTile>
                                })}
                            </GridList>
                        </CardContent>
                    </Card>
                    <br />
                    <Card>
                        <CardContent>
                            <CardHeader className="text-center"
                                title="Abilities"
                            />
                            {champion.spells.map((spell, key) => {
                                return <div key={key}>
                                    <GridContainer className="pt-3">
                                        <GridItem xl={2} xs={3} sm={2} md={1}>
                                            <img src={`https://ddragon.leagueoflegends.com/cdn/9.3.1/img/spell/${spell.image.full}`} alt="Spell" />
                                        </GridItem>
                                        <GridItem xl={10} xs={9} sm={10} md={11}>
                                            <Typography variant="h5">
                                                {spell.name}
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                Cost: {spell.costType}
                                            </Typography>
                                            <Typography variant="subtitle1">
                                                Range: {spell.rangeBurn}
                                            </Typography>
                                        </GridItem>
                                        <Typography variant="subheading" className="p-3">
                                            {spell.description}
                                        </Typography>
                                        <Typography variant="subheading" className="p-3">
                                            {spell.tooltip}
                                        </Typography>
                                    </GridContainer>
                                    <Divider />
                                </div> 
                                
                            })}
                            
                        </CardContent>
                    </Card>
                </Container>
            </section>
        );
    }
}

export default Champion;
