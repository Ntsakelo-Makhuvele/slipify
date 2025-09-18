import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

const columns: GridColDef<(typeof rows)[number]>[] = [
 { field: 'id', headerName: 'ID', width: 150,hideable:true },
  {
    field: 'category',
    headerName: 'Category',
    width: 150,
    editable: true,
  },
  {
    field: 'lastUpdated',
    headerName: 'Last Updated',
    width: 150,
    editable: true,
  },
  {
    field: 'totalSpending',
    headerName: 'Total Spending',
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
  {id:1, category: 'Grocery', lastUpdated: '17-09-2025', totalSpending: 'R250.00', status:'processed' },
 
];

const Overview = () => {
    return (
        <div className="p-5">
             
            <div className="md:flex gap-4">
              <div className="md:flex-6 h-20 shadow-sm">
                 <div className="p-5">
                      <p className="text-md text-gray-700">Expenses</p>
                      <p className="text-2xl text-gray-900 text-semibold">ZAR 700 000</p>
                 </div>
              </div>
               <div className="md:flex-6 h-20 shadow-sm">
                 <div className="p-5">
                      <p className="text-md text-gray-700">Goal</p>
                      <p className="text-2xl text-gray-900 text-semibold">ZAR 600 000</p>
                 </div>
              </div>
            </div>
            <div className="">
                <div className="shadow-sm mt-5 h-100">
                    <div className="h-[80px]">
                   <button className="m-5 cursor-pointer float-right bg-gray-700 text-white p-1 w-[100px] rounded-[5px]">Filter</button>
               </div> 
               <div>
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
       sx={{border:'none'}}
        disableRowSelectionOnClick
      />
    </Box>
               </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;