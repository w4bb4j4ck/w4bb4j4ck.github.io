import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1200,
    height: 800,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const tileData = [
  {
    img: '/images/generic1.jpg',
    title: 'Project1',
    author: 'Blaze'
  },
  {
    img: '/images/generic2.jpg',
    title: 'Project2',
    author: 'Blaze'
  },
  {
    img: '/images/generic3.jpg',
    title: 'Project3',
    author: 'Blaze'
  },
  {
    img: '/images/generic4.jpg',
    title: 'Project4',
    author: 'Blaze'
  },
  {
    img: '/images/generic5.jpg',
    title: 'Project5',
    author: 'Blaze'
  },
  {
    img: '/images/generic6.jpg',
    title: 'Project6',
    author: 'Blaze'
  },
]

export default function PortfolioList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={320} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div">Prime Digital Academy</ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
