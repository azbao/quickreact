import { useState } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// import './App.css';
import Banner from './components/banner.jsx';
import TermPage from './components/TermPage.jsx';
import {useJsonQuery} from './utilities/fetch.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Main = () => {
    const [data, isLoading, error] = useJsonQuery('https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php');
    if (!data) return <h1>No data available</h1>;
    if (isLoading) return <h1>Loading data...</h1>;
    if (error) return <h1>Error loading data: {`${error}`}</h1>;
    
    return (
        <div>
            <Banner title={data.title} />
            <TermPage courses={data.courses} />
        </div>
    );
};

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <div className="container">
            <Main />
        </div>
    </QueryClientProvider>
);


export default App;
