import { useState, useEffect } from 'react';
import { showData } from './services/financialService';
import FinancialDetails from './components/FinancialDetails/FinancialDetails';
import FilterBtn from './components/FilterBtn/FilterBtn';
import logo from './assets/logo.jpeg'
import Hamburger from 'hamburger-react'


const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    startDate: '',
    endDate: '',
    minRevenue: '',
    maxRevenue: '',
    minNetIncome: '',
    maxNetIncome: '',
  });
  const [isVisible, setIsVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
  };

  const [isOpen, setOpen] = useState(false)


  useEffect(() => {
    const fetchDefaultData = async () => {
      const fetchedData = await showData();
      setData(fetchedData);  
      setFilteredData(fetchedData);
      setTimeout(() => setLoaded(true), 100) 
    };
    fetchDefaultData();
  }, []);


  return (
    <div className=' font-sans text-center bg-gray-300 min-h-screen flex flex-col justify-between'>
      <header className='w-screen bg-white flex items-center justify-between '>
        <div className="block sm:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} className='border border-black'/>
        </div>
        <div className="flex-grow flex justify-center">
          <img src={logo} alt="Logo" className='w-40 h-24 mx-auto sm:w-64 sm:h-32' />
        </div>
      </header>
      <h1 className='mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl'><span className='underline text-transparent bg-clip-text bg-gradient-to-r to-cyan-600 from-cyan-900 '>APPL</span> Financial Data</h1>
      <FilterBtn filters={filters} toggleText={toggleText} isVisible={isVisible} data={data} setFilters={setFilters} setFilteredData={setFilteredData}/>
      <FinancialDetails data={filteredData} loaded={loaded} />
      <footer className='bg-[#40505B] text-white p-6 w-screen sm:w-screen sm:p-5'>
        © 2024 ValueGlance. All Rights Reserved
      </footer>
    </div>
  );
};

export default App;
