import React, {useEffect, useState} from 'react';
import useStyles from "./styles";
import CharactersList from "./CharactersList/CharactersList";
import CharactersFilter from "./CharactersFilter/CharactersFilter";
import {CircularProgress, Container, Grid, Grow} from "@mui/material";
import ListPagination from "./ListPagination/ListPagination";
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {getRanking, getRankingByFilter} from "../../actions/ranking";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Ranking = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();

    const [isFiltering, setIsFiltering] = useState(false);
    const [filter, setFilter] = useState( { nickname: '', vocation: 'all', minLevel: 1, maxLevel: 999});

    const page = query?.get('page') || 1;
    const filteredNickname = query.get('nickname') || '';
    const filteredVocation = query.get('vocation') || 'all';
    const filteredMinLevel = query.get('minlevel') || 1;
    const filteredMaxLevel = query.get('maxlevel') || 999;

    const ranking = useSelector(state => state?.ranking);


    const handleFilterChange = e => {
        const {name, value} = e.target;
        if(name === 'minLevel' || name === 'maxLevel') {
            setFilter( {...filter, [name]: Number(value)});
        } else {
            setFilter( {...filter, [name]: value});
        }
    };

    const handleFilterReset = e => {
        setFilter( {...filter, vocation: 'all', nickname: '', minLevel: 1, maxLevel: 999});
        setIsFiltering(false);
        dispatch(getRanking(1));
        history.push('/ranking?page=1');
    }

    const handleFilterSubmit = e => {
        e.preventDefault();
        if(isFiltering) {
            dispatch(getRankingByFilter(filter, 1));
            history.push(`/ranking/search?page=1&nickname=${filter.nickname}&vocation=${filter.vocation}&minlevel=${filter.minLevel}&maxlevel=${filter.maxLevel}`);
        } else {
            setIsFiltering(true);
        }
    };

    useEffect(() => {
        //TODO repair commented-out code to fix quadriple fetching issue
        //TODO when getting filter from url query, make it wait before fetching filtered data, currently it is quadriple fetch caused by Pagination useEffect etc. causing data table to blink
        /*if (filteredNickname !== null) {
            console.log("notnull")
            setFilter( { ...filter, nickname: filteredNickname, vocation: filteredVocation, minLevel: Number(filteredMinLevel), maxLevel: Number(filteredMaxLevel)});
            dispatch(getRankingByFilter({nickname: filteredNickname, vocation: filteredVocation, minLevel: Number(filteredMinLevel), maxLevel: Number(filteredMaxLevel)}, 1));
            setIsFiltering(true);
        }*/

        if(isFiltering) {
            dispatch(getRankingByFilter( filter, 1));
            history.push(`/ranking/search?page=1&nickname=${filter.nickname}&vocation=${filter.vocation}&minlevel=${filter.minLevel}&maxlevel=${filter.maxLevel}`);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isFiltering]);

    return (
        <Grow in>
            <Container maxWidth="xl">
                    <Grid className={classes.mainGrid} container>
                        <Grid className={classes.filter} item xs={12} sm={4}>
                            <CharactersFilter handleFilterChange={handleFilterChange} handleFilterSubmit={handleFilterSubmit} handleFilterReset={handleFilterReset}/>
                            {isFiltering
                                ? <ListPagination page={page} isFiltering={true} filter={ filter }/>
                                : <ListPagination page={page} isFiltering={false} />
                                }
                            }
                        </Grid>
                        <Grid className={classes.characters} item  xs={12} sm={8}>{
                            ranking?.isLoading
                                ? <CircularProgress className={classes.circularProgress} size={100}/>
                                : <CharactersList />
                        }
                        </Grid>
                    </Grid>
            </Container>
        </Grow>
    );
};

export default Ranking;
