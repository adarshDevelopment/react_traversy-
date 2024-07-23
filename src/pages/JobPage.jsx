import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const JobPage = ({  }) => {
    const { id } = useParams();

    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        try {
            var fetchJob = async () => {
                console.log('api');
                const apiUrl = `http://localhost:8000/jobs/${id}`;
                const res = await fetch(apiUrl);
                const data = await res.json();

                setJob(data);
                setLoading(false);

                // console.log(data);

                // console.log(job);
            }

        } catch (e) {
            console.log('Error fetching data: ', e);
        } finally {

            // setLoading(() => false);
        }

        fetchJob();
    }, [])

    // useEffect(() => {
    //     console.log(job); // This logs 'job' whenever it changes
    // }, [job]); // Wa

    // return loading ? <Spinner /> : (<h1>{job.title}</h1>)
    return loading ? <Spinner /> :
        <h1>{job.title}</h1>


    // )
}
export default JobPage


// fetch(`http://localhost:8000/jobs/${id}`)
//     .then((res) => res.json())
//     .then((data) => setJob(data))
//     .then(() => {console.log(data)});
// console.log(job);

// Data Loader
// const jobLoader = async ({ params }) => {

// }




/*
    useEffect(() => {
 
        const apiUrl = 'http://localhost:8000/jobs';
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => setJob(data));
        // const fetchJobs = async () => {
        //     try {
        //         const apiUrl = 'api/jobs/';
        //         const res = await fetch(apiUrl);
        //         const data = await res.data;
        //         console.log(data);
        //     } catch (error) {
        //         console.log(error);
        //     } finally {
        //         setLoading(false);
        //     }
        // }
        // fetchJobs();
    }, []);
*/