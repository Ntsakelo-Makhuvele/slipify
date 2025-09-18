import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'merchant',
    headerName: 'Merchant',
    width: 150,
    editable: true,
  },
  {
    field: 'amountSpent',
    headerName: 'Amount Spent',
    width: 150,
    editable: true,
  },
  {
    field: 'itemsCount',
    headerName: 'Items Count',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
  },
];

const rows = [
  { id: 1, merchant: 'Spar', amountSpent: 'R200', itemsCount: 3, status:'processed' },
 
];

const Upload = () => {
    return (
        <div>
            <div className="mt-5">
                <p className="text-slate-500 font-semibold">Upload Receipt</p>
            </div>
            <div className="mt-5">
                <div className="md:w-[98%] h-[70px] border border-dotted border-gray-400 rounded-[5px]">
                    <label htmlFor="dropzone-file" className=" h-[70px] w-full rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="grid items-center h-[100%]">
                            <div>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400 pl-3"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400 pl-3">Accepted file types</p>
                            </div>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" />
                    </label>
                </div>
            </div>
            <div className="mt-5">
               <p className="text-slate-500 font-semibold">Uploaded receipt</p>
               <p className="text-slate-700">Receipt.png (5MB)</p>
            </div>
            <div className="mt-5">
            <div className="md:w-[98%]">
               <p className='p-3 text-slate-700'>20 Uploads</p>
                   <Box sx={{ height: '100%', width: '100%',margin:'auto' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
       
        disableRowSelectionOnClick
      />
    </Box>
            </div>

            </div>
        </div>
    )
}

export default Upload;