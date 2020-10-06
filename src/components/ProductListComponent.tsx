import React, {useContext} from "react";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
import {GridList, GridListTile, GridListTileBar, IconButton} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import { useHistory } from "react-router-dom";
import ProductsStore from "../stores/products-store"
const useStyles = makeStyles((theme: Theme) =>
	                             createStyles({
		                                          root: {
			                                          display: 'flex',
			                                          flexWrap: 'wrap',
			                                          justifyContent: 'space-around',
			                                          overflow: 'hidden',
			                                          backgroundColor: theme.palette.background.paper,
		                                          },
		                                          gridList: {
			                                          width: 500,
			                                          height: 600,
		                                          },
		                                          icon: {
			                                          color: 'rgba(255, 255, 255, 0.54)',
		                                          },
	                                          }),
);

function ProductListComponent(props: any) {
	const history = useHistory()
	const classes = useStyles();
	const productsStore = useContext(ProductsStore);
	return (
		<div className={classes.root}>
			<GridList cellHeight={180} className={classes.gridList}>
				{productsStore.products.map((tile) => (
					<GridListTile key={tile.id} >
						<img src={tile.image} alt={tile.name} />
						<GridListTileBar
							title={tile.name}
							subtitle={<span>by: {tile.category}</span>}
							actionIcon={
								<IconButton aria-label={`info about ${tile.name}`} className={classes.icon} onClick={()=>{
									history.push('/product/' + tile.id);
								}
								}>
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

export default ProductListComponent;
