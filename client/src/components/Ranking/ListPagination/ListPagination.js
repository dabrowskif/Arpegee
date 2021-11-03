import React, { useEffect } from 'react';
import { Pagination, PaginationItem, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import useStyles from './styles.js';
import { getRanking, getRankingByFilter } from '../../../actions/ranking.js';

const ListPagination = ({ page, isFiltering, filter }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { numberOfPages } = useSelector((state) => state?.ranking) || 0;

  useEffect(() => {
    if (isFiltering) {
      dispatch(getRankingByFilter(filter, page));
    } else {
      dispatch(getRanking(page));
    }
  }, [page]);

  return (
    <Paper elevation={5} className={classes.paper}>
      <Pagination
        className={classes.pagination}
        count={numberOfPages || 1}
        page={Number(page) || 1}
        variant="outlined"
        color="primary"
        renderItem={(item) => (
          <PaginationItem {...item} component={Link} to={!isFiltering ? `/ranking?page=${item?.page}` : `/ranking/search?page=${item?.page}&nickname=${filter?.nickname}&vocation=${filter?.vocation}&minlevel=${filter?.minLevel}&maxlevel=${filter?.maxLevel}`} />
        )}
      />
    </Paper>
  );
};

export default ListPagination;
