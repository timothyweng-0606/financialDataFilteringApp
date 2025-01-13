import {useEffect} from 'react'

const FilterBtn = ({toggleText, isVisible, filters, data, setFilteredData, setFilters}) => {
    
  useEffect(() => {
    let filtered = data;

    // Date Range Filter
    if (filters.startDate || filters.endDate) {
      filtered = filtered.filter(item => {
        const year = parseInt(item.date.split('-')[0]);
        const meetsStart = filters.startDate ? year >= parseInt(filters.startDate) : true;
        const meetsEnd = filters.endDate ? year <= parseInt(filters.endDate) : true;
        return meetsStart && meetsEnd;
      });
    }

    // Revenue Filter
    if (filters.minRevenue || filters.maxRevenue) {
      filtered = filtered.filter(item => {
        const revenue = item.revenue || 0;
        const meetsMin = filters.minRevenue ? revenue >= parseFloat(filters.minRevenue) : true;
        const meetsMax = filters.maxRevenue ? revenue <= parseFloat(filters.maxRevenue) : true;
        return meetsMin && meetsMax;
      });
    }

    // Net Income Filter
    if (filters.minNetIncome || filters.maxNetIncome) {
      filtered = filtered.filter(item => {
        const netIncome = item.netIncome || 0;
        const meetsMin = filters.minNetIncome ? netIncome >= parseFloat(filters.minNetIncome) : true;
        const meetsMax = filters.maxNetIncome ? netIncome <= parseFloat(filters.maxNetIncome) : true;
        return meetsMin && meetsMax;
      });
    }

    setFilteredData(filtered);
  }, [filters, data]);

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value || "",
    });
  };

  return (
    <div>
      <button onClick={toggleText} className='text-black m-5 w-60 p-2 border-solid border-4 rounded-full hover:bg-[#2E3A4A] transition duration-300 ease-in-out hover:text-white'>Filter</button>
      { isVisible && 
    <div>
      <div className='flex justify-center my-4'>
      <div className=' w-[676px] p-4 flex flex-col justify-between text-white bg-[#2E3A4A] items-center sm:flex-row sm:justify-evenly'>
        <div className='flex-field p-2'>
          <label className='flex-field'>
            Start Year :
            <input className='text-black' type="number" name="startDate" value={filters.startDate ?? ""} onChange={handleFilterChange} />
          </label>
          <label className='flex-field'>
            End Year :
            <input  className='text-black' type="number" name="endDate" value={filters.endDate ?? ""} onChange={handleFilterChange} />
          </label>
        </div>
        <div className='flex-field p-2'>
          <label className='flex-field'>
            Min Revenue :
            <input className='text-black' type="number" name="minRevenue" value={filters.minRevenue ?? ""} onChange={handleFilterChange} />
          </label>
          <label className='flex-field'>
            Max Revenue :
            <input className='text-black' type="number" name="maxRevenue" value={filters.maxRevenue ?? ""} onChange={handleFilterChange} />
          </label>
        </div>
        <div className='flex-field p-2'>
          <label className='flex-field'>
            Min Net Income :
            <input className='text-black' type="number" name="minNetIncome" value={filters.minNetIncome ?? ""} onChange={handleFilterChange} />
          </label>
          <label className='flex-field'>
            Max Net Income :
            <input className='text-black' type="number" name="maxNetIncome" value={filters.maxNetIncome ?? ""} onChange={handleFilterChange} />
          </label>
        </div>
      </div>
    </div>
        <button onClick={() => setFilters({})} className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 m-2 rounded transition duration-300 ease-in-out">
          Clear
        </button>
    </div>

}
</div> )}
      
export default FilterBtn
