import React, { useState} from 'react';
import { TableContainer, 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody, 
    TablePagination, 
    Tooltip,
    IconButton,
    Fab} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import AddIcon from '@material-ui/icons/Add';
import { product } from  '../../../Data/Product';
import './AllProduct.css';

function AllProduct() {

    const [page,setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newpage) => {
        setPage(newpage);
    }

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    }
    
    return (
        <div className="allproduct_con">
            <div className="allproduct_head">
                <div>All Products</div>
                <div>
                    <Tooltip title="Add" aria-label="add">
                        <Fab color="primary">
                            <AddIcon />
                        </Fab>
                    </Tooltip>
                </div>
            </div>
            <div className="allproduct_table">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow className="tabhead">
                                <TableCell className="tabhead">No</TableCell>
                                <TableCell>Product Id</TableCell>
                                <TableCell>Product Title</TableCell>
                                <TableCell>Category</TableCell>
                                <TableCell>Sub-Category</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Per Kg/L</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {
                                product.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((iteam,id) => {
                                    return(
                                        <TableRow key={id}>
                                            <TableCell>{id+1}</TableCell>
                                            <TableCell>{iteam.product_id}</TableCell>
                                            <TableCell>{iteam.product_name}</TableCell>
                                            <TableCell>{iteam.category}</TableCell>
                                            <TableCell>{iteam.sub_category}</TableCell>
                                            <TableCell>{iteam.price}</TableCell>
                                            <TableCell>{iteam.per_kg_l}</TableCell>
                                            <TableCell>
                                                <Tooltip title="Delete">
                                                    <IconButton aria-label="delete">
                                                        <DeleteIcon className="tabicon"/>
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip title="Edit">
                                                    <IconButton aria-label="Edit">
                                                        <CreateIcon className="tabicon"/>
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                               
                            }
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={[10]}
                        component="div"
                        count={product.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage} 
                    />
                </TableContainer>
                
            </div>
        </div>
    )
}

export default AllProduct
