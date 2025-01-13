import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const FinancialDetails = ({ data, loaded }) => {
    // Format the data directly without hierarchical wrapping
    const formattedData = data.map((item) => ({
        date: item.date || 'N/A',
        revenue: item.revenue ? item.revenue.toLocaleString() : 'N/A',
        netIncome: item.netIncome ? item.netIncome.toLocaleString() : 'N/A',
        grossProfit: item.grossProfit ? item.grossProfit.toLocaleString() : 'N/A',
        eps: item.eps || 'N/A',
        operatingIncome: item.operatingIncome ? item.operatingIncome.toLocaleString() : 'N/A',
    }));

    return (
        <div
        className={`transition-all duration-700 ease-in-out overflow-hidden transform ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
        }`}
      >
        <DataTable value={formattedData} scrollable className=' mx-4 sm:mx-10'>
            <Column field="date" dataType="date" sortable header="Date" className="column-style"></Column>
            <Column field="revenue" sortable header="Revenue" className="column-style"></Column>
            <Column field="netIncome" sortable header="Net-Income" className="column-style"></Column>
            <Column field="grossProfit" header="Gross-Profit" className="column-style"></Column>
            <Column field="eps" header="EPS" className="column-style"></Column>
            <Column field="operatingIncome" header="Operating-Income" className="column-style"></Column>
        </DataTable>
    </div>
    );
};

export default FinancialDetails;
