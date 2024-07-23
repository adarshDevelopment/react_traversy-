import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

import JobPageDataLoader, { jobLoader } from './pages/JobPageDataLoader';




function App() {

  // REQUEST FUNCTION for adding new jobs
  const addJob = async (newJob) => {
    // console.log(newJob);
    const res = await fetch('http://localhost:8000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return;
  }

  // Delete Job
  const deleteJob = async (id) => {
    // console.log(newJob);
    const res = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  const updateJob = async (job) => {  // job is passed from editJobPage which also includes id of the selected job
    const res = await fetch(`http://localhost:8000/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    });
    return;
  }

  const router = createBrowserRouter(
    // createRoutesFromElements(<Route path="/about" element={<h1>My App</h1>} />)
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        {/* any route we put in here is going to use this layout */}
        <Route index element={<HomePage />} />
        <Route path='/jobs' element={<JobsPage />} />

        {/* <Route path="/jobs/:id" element={<JobPage />} /> */}
        <Route path="/jobs/:id" element={<JobPageDataLoader deleteJob={deleteJob} />} loader={jobLoader} />
        <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />

        <Route path="/edit-job/:id" element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader} />



        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />

}

export default App




// return (
//   <>

//     <Navbar />
//     <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />
//     <HomeCards />
//     <JobListings />
//     <ViewAllJobs />

//   </>
// )